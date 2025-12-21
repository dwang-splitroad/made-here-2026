import sgMail from '@sendgrid/mail';

// Set API key at module level if available
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Get the Google Apps Script Web App URL from environment variable
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    
    if (!scriptUrl) {
      console.error('GOOGLE_SCRIPT_URL environment variable is not set');
      return Response.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }
    
    // Submit to Google Sheets
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit form to Google Sheets');
    }
    
    const result = await response.json();
    
    // Send email notification via SendGrid
    console.log('=== EMAIL SENDING SECTION REACHED ===');
    const sendGridApiKey = process.env.SENDGRID_API_KEY;
    console.log('SendGrid API Key present:', !!sendGridApiKey);
    console.log('SendGrid API Key length:', sendGridApiKey?.length || 0);
    console.log('SendGrid API Key first 10 chars:', sendGridApiKey?.substring(0, 10) || 'N/A');
    console.log('All env vars check:', {
      hasGoogleScript: !!process.env.GOOGLE_SCRIPT_URL,
      hasSendGrid: !!process.env.SENDGRID_API_KEY
    });
    
    if (sendGridApiKey) {
      console.log('=== ENTERING EMAIL SEND BLOCK ===');
      try {
        // Ensure API key is set
        sgMail.setApiKey(sendGridApiKey);
        console.log('SendGrid API key configured, preparing email...');
        
        const emailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
              New Form Submission - Made Here 2026
            </h2>
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin-top: 20px;">
              <h3 style="color: #555; margin-top: 0;">Submission Details:</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px; font-weight: bold; color: #333; width: 150px;">Name:</td>
                  <td style="padding: 8px; color: #666;">${formData.name || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold; color: #333;">Email:</td>
                  <td style="padding: 8px; color: #666;">${formData.email || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold; color: #333;">Phone:</td>
                  <td style="padding: 8px; color: #666;">${formData.phone || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold; color: #333;">Company:</td>
                  <td style="padding: 8px; color: #666;">${formData.company || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold; color: #333;">Job Title:</td>
                  <td style="padding: 8px; color: #666;">${formData.jobTitle || 'N/A'}</td>
                </tr>
              </table>
            </div>
            <p style="color: #888; font-size: 12px; margin-top: 20px;">
              This is an automated notification from the Made Here 2026 registration form.
            </p>
          </div>
        `;
        
        const emailText = `
New Form Submission - Made Here 2026

Submission Details:
Name: ${formData.name || 'N/A'}
Email: ${formData.email || 'N/A'}
Phone: ${formData.phone || 'N/A'}
Company: ${formData.company || 'N/A'}
Job Title: ${formData.jobTitle || 'N/A'}

This is an automated notification from the Made Here 2026 registration form.
        `;
        
        const msg = {
          to: 'hello@splitroadmedia.com',
          cc: 'dennis@splitroadmedia.com',
          from: 'noreply@splitroadmedia.com', // Simplified format - using authenticated domain
          subject: `New Registration: ${formData.name || 'Made Here 2026'}`,
          text: emailText,
          html: emailHtml,
        };
        
        console.log('=== ABOUT TO CALL SENDGRID ===');
        console.log('Sending email to:', msg.to, 'CC:', msg.cc, 'From:', msg.from);
        console.log('Message subject:', msg.subject);
        
        const emailResponse = await sgMail.send(msg);
        console.log('=== SENDGRID CALL COMPLETED ===');
        console.log('Email notification sent successfully!');
        console.log('Response status:', emailResponse[0]?.statusCode);
        console.log('Response body:', JSON.stringify(emailResponse[0]?.body, null, 2));
      } catch (emailError: any) {
        // Log email error but don't fail the request if Google Sheets succeeded
        console.error('=== EMAIL SEND ERROR CAUGHT ===');
        console.error('Failed to send email notification - Full error:', emailError);
        console.error('Error message:', emailError?.message);
        console.error('Error stack:', emailError?.stack);
        console.error('Error response:', emailError?.response?.body);
        console.error('Error code:', emailError?.code);
        if (emailError?.response) {
          console.error('SendGrid Response Status:', emailError.response.statusCode);
          console.error('SendGrid Response Headers:', JSON.stringify(emailError.response.headers, null, 2));
        }
      }
    } else {
      console.error('=== SENDGRID API KEY NOT FOUND ===');
      console.error('SENDGRID_API_KEY environment variable is not set');
      console.error('Available env vars:', Object.keys(process.env).filter(k => k.includes('SEND') || k.includes('GRID')));
    }
    
    return Response.json({ success: true, data: result });
  } catch (error) {
    console.error('Form submission error:', error);
    return Response.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}

