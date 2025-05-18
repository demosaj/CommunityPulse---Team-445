import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Eye, Flag } from "lucide-react"
import Link from "next/link"

// Mock data for pending events
const pendingEvents = [
  {
    id: "1",
    title: "Community Cleanup at Riverside Park",
    category: "Volunteer",
    date: "May 25, 2025",
    organizer: "John Smith",
    submittedAt: "May 10, 2025",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "2",
    title: "Summer Neighborhood Garage Sale",
    category: "Garage Sales",
    date: "June 5, 2025",
    organizer: "Sarah Johnson",
    submittedAt: "May 12, 2025",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "3",
    title: "Local Cricket Tournament",
    category: "Sports",
    date: "June 12, 2025",
    organizer: "Michael Brown",
    submittedAt: "May 15, 2025",
    image: "/placeholder.svg?height=100&width=200",
  },
]

export function AdminEventApproval() {
  return (
    <div className="space-y-4">
      {pendingEvents.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-md">
          <h3 className="text-lg font-medium mb-2">No pending events</h3>
          <p className="text-gray-600 dark:text-gray-300">There are no events waiting for approval at this time.</p>
        </div>
      ) : (
        pendingEvents.map((event) => (
          <Card key={event.id}>
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/4 h-32 sm:h-auto">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="font-semibold">{event.title}</h3>
                    <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                      Pending Approval
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                    <div>Category: {event.category}</div>
                    <div>Date: {event.date}</div>
                    <div>Organizer: {event.organizer}</div>
                    <div>Submitted: {event.submittedAt}</div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/events/${event.id}`}>
                        <Eye className="h-4 w-4 mr-1" /> Preview
                      </Link>
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <Check className="h-4 w-4 mr-1" /> Approve
                    </Button>
                    <Button size="sm" variant="destructive">
                      <X className="h-4 w-4 mr-1" /> Reject
                    </Button>
                    <Button size="sm" variant="outline" className="text-yellow-600 hover:text-yellow-700">
                      <Flag className="h-4 w-4 mr-1" /> Flag for Review
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}
