"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/hooks/use-toast"

interface RSVPFormProps {
  eventId: string
}

export function RSVPForm({ eventId }: RSVPFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    message: "",
    notifications: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, guests: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, notifications: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("RSVP submitted:", { eventId, ...formData })

      toast({
        title: "RSVP Confirmed!",
        description: "You have successfully RSVP'd to this event.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        guests: "1",
        message: "",
        notifications: true,
      })
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Your RSVP couldn't be submitted. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="guests">Number of Guests</Label>
        <Select value={formData.guests} onValueChange={handleSelectChange}>
          <SelectTrigger id="guests">
            <SelectValue placeholder="Select number of guests" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 (Just me)</SelectItem>
            <SelectItem value="2">2 people</SelectItem>
            <SelectItem value="3">3 people</SelectItem>
            <SelectItem value="4">4 people</SelectItem>
            <SelectItem value="5">5 people</SelectItem>
            <SelectItem value="6+">6+ people</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Any questions or comments?"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center space-x-2 pt-2">
        <Checkbox id="notifications" checked={formData.notifications} onCheckedChange={handleCheckboxChange} />
        <Label htmlFor="notifications" className="text-sm">
          Send me reminders and updates about this event
        </Label>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Confirm RSVP"}
      </Button>
    </form>
  )
}
