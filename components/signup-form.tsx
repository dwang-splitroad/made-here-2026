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
    <section className="px-4 py-12 sm:py-16 md:py-24 max-w-2xl mx-auto">
      <div className="bg-card border border-border p-6 sm:p-8 md:p-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-balance">GET UPDATES</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">Stay informed about made here 2026</p>

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

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <Label htmlFor="name" className="text-sm font-medium mb-2 block">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="bg-input border-border"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium mb-2 block">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-input border-border"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium mb-2 block">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="bg-input border-border"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div>
            <Label htmlFor="company" className="text-sm font-medium mb-2 block">
              Company
            </Label>
            <Input
              id="company"
              name="company"
              type="text"
              required
              value={formData.company}
              onChange={handleChange}
              className="bg-input border-border"
              placeholder="Your company"
            />
          </div>

          <div>
            <Label htmlFor="jobTitle" className="text-sm font-medium mb-2 block">
              Job Title
            </Label>
            <Input
              id="jobTitle"
              name="jobTitle"
              type="text"
              required
              value={formData.jobTitle}
              onChange={handleChange}
              className="bg-input border-border"
              placeholder="Your role"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 sm:h-12 text-sm sm:text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </section>
  )
}
