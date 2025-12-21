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
    
    return Response.json({ success: true, data: result });
  } catch (error) {
    console.error('Form submission error:', error);
    return Response.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}

