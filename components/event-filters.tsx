"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function EventFilters() {
  const [categories, setCategories] = useState({
    garageSales: false,
    sports: false,
    classes: false,
    volunteer: false,
    exhibitions: false,
    festivals: false,
  })

  const [dateRange, setDateRange] = useState("all")

  const handleCategoryChange = (category: keyof typeof categories) => {
    setCategories({
      ...categories,
      [category]: !categories[category],
    })
  }

  const handleReset = () => {
    setCategories({
      garageSales: false,
      sports: false,
      classes: false,
      volunteer: false,
      exhibitions: false,
      festivals: false,
    })
    setDateRange("all")
  }

  const handleApply = () => {
    // Apply filters logic here
    console.log("Applied filters:", { categories, dateRange })
  }

  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible defaultValue="categories">
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="garage-sales"
                  checked={categories.garageSales}
                  onCheckedChange={() => handleCategoryChange("garageSales")}
                />
                <Label htmlFor="garage-sales">Garage Sales</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sports"
                  checked={categories.sports}
                  onCheckedChange={() => handleCategoryChange("sports")}
                />
                <Label htmlFor="sports">Sports Matches</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="classes"
                  checked={categories.classes}
                  onCheckedChange={() => handleCategoryChange("classes")}
                />
                <Label htmlFor="classes">Community Classes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="volunteer"
                  checked={categories.volunteer}
                  onCheckedChange={() => handleCategoryChange("volunteer")}
                />
                <Label htmlFor="volunteer">Volunteer Opportunities</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="exhibitions"
                  checked={categories.exhibitions}
                  onCheckedChange={() => handleCategoryChange("exhibitions")}
                />
                <Label htmlFor="exhibitions">Exhibitions</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="festivals"
                  checked={categories.festivals}
                  onCheckedChange={() => handleCategoryChange("festivals")}
                />
                <Label htmlFor="festivals">Festivals/Celebrations</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="date">
          <AccordionTrigger>Date Range</AccordionTrigger>
          <AccordionContent>
            <RadioGroup value={dateRange} onValueChange={setDateRange} className="space-y-3 pt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">All Events</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="today" id="today" />
                <Label htmlFor="today">Today</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="tomorrow" id="tomorrow" />
                <Label htmlFor="tomorrow">Tomorrow</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="this-week" id="this-week" />
                <Label htmlFor="this-week">This Week</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="this-weekend" id="this-weekend" />
                <Label htmlFor="this-weekend">This Weekend</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="next-week" id="next-week" />
                <Label htmlFor="next-week">Next Week</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="this-month" id="this-month" />
                <Label htmlFor="this-month">This Month</Label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Separator />

      <div className="flex gap-2">
        <Button variant="outline" onClick={handleReset} className="flex-1">
          Reset
        </Button>
        <Button onClick={handleApply} className="flex-1">
          Apply Filters
        </Button>
      </div>
    </div>
  )
}
