import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Pencil, Trash2, Eye } from "lucide-react"
import Link from "next/link"

// Mock data for user events
const userEvents = [
  {
    id: "1",
    title: "Community Cleanup at Riverside Park",
    category: "Volunteer",
    date: "May 25, 2025",
    status: "approved",
    attendees: 24,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "2",
    title: "Summer Neighborhood Garage Sale",
    category: "Garage Sales",
    date: "June 5, 2025",
    status: "pending",
    attendees: 12,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "3",
    title: "Local Cricket Tournament",
    category: "Sports",
    date: "June 12, 2025",
    status: "approved",
    attendees: 32,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "4",
    title: "Yoga in the Park",
    category: "Classes",
    date: "June 20, 2025",
    status: "draft",
    attendees: 0,
    image: "/placeholder.svg?height=100&width=200",
  },
]

export function UserEventsList() {
  return (
    <div className="space-y-4">
      {userEvents.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">No events created yet</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            You haven't created any events yet. Create your first event to get started.
          </p>
          <Button asChild>
            <Link href="/events/create">Create Event</Link>
          </Button>
        </div>
      ) : (
        userEvents.map((event) => (
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
                    <div className="flex items-center gap-2">
                      {event.status === "approved" && <Badge className="bg-green-500">Approved</Badge>}
                      {event.status === "pending" && (
                        <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                          Pending Approval
                        </Badge>
                      )}
                      {event.status === "draft" && (
                        <Badge variant="outline" className="text-gray-500 border-gray-500">
                          Draft
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                    <div>Category: {event.category}</div>
                    <div>Date: {event.date}</div>
                    <div>Attendees: {event.attendees}</div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/events/${event.id}`}>
                        <Eye className="h-4 w-4 mr-1" /> View
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/events/edit/${event.id}`}>
                        <Pencil className="h-4 w-4 mr-1" /> Edit
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-500 hover:text-red-600">
                      <Trash2 className="h-4 w-4 mr-1" /> Delete
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
