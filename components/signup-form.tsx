"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit")
      }

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          jobTitle: "",
        })
      } else {
        throw new Error("Submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="px-4 py-4 sm:py-6 md:py-8 max-w-4xl mx-auto">
      <div className="bg-card p-6 sm:p-8 md:p-12">
        <div className="mb-6 sm:mb-8 text-center">
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance"
            style={{
              fontFamily: 'var(--font-roboto-condensed), "Avenir Next Condensed", "Avenir", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontStretch: 'condensed',
              fontWeight: 700,
              color: 'lab(54.8% 66.8 56.8)',
              letterSpacing: '0.02em'
            }}
          >
            GET UPDATES
          </h2>
          <p 
            className="text-lg sm:text-xl md:text-2xl font-medium"
            style={{
              color: 'lab(15.2% 18.4 -37)'
            }}
          >
            Be Sure To Be In The Know For Next Years Showcase
          </p>
        </div>

        {submitStatus === "success" && (
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
            <p className="text-sm sm:text-base text-green-800 dark:text-green-200 font-medium">
              Thank you! Your information has been submitted successfully.
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
            <p className="text-sm sm:text-base text-red-800 dark:text-red-200 font-medium">
              Something went wrong. Please try again.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 form-orange-placeholder">
          {/* First Row: Company, Name, Title */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Input
              id="company"
              name="company"
              type="text"
              required
              value={formData.company}
              onChange={handleChange}
              className="bg-white border-border"
              placeholder="Company"
            />

            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="bg-white border-border"
              placeholder="Name"
            />

            <Input
              id="jobTitle"
              name="jobTitle"
              type="text"
              required
              value={formData.jobTitle}
              onChange={handleChange}
              className="bg-white border-border"
              placeholder="Title"
            />
          </div>

          {/* Second Row: Email, Phone, Submit */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-white border-border"
              placeholder="Email"
            />

            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="bg-white border-border"
              placeholder="Phone"
            />

            <div className="flex items-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white hover:opacity-90 h-11 sm:h-12 text-sm sm:text-base font-bold uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  fontFamily: 'var(--font-roboto-condensed), "Avenir Next Condensed", "Avenir", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontStretch: 'condensed',
                  fontWeight: 700,
                  backgroundColor: 'lab(15.2% 18.4 -37)',
                  borderRadius: '0.75rem',
                }}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </div>
        </form>
        
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Where the Orthopedic Capital of the World showcases their capabilities, echo system, teamwork, and education funnel. If it's Orthopedics, it's MADE HERE!
          </p>
        </div>
      </div>
    </section>
  )
}
