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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="px-4 py-16 md:py-24 max-w-2xl mx-auto">
      <div className="bg-card border border-border p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-balance">GET UPDATES</h2>
        <p className="text-muted-foreground mb-8">Stay informed about made here 2026</p>

        <form onSubmit={handleSubmit} className="space-y-6">
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
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-medium"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  )
}
