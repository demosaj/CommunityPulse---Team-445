import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, X, Eye } from "lucide-react"
import Link from "next/link"

// Mock data for user RSVPs
const userRSVPs = [
  {
    id: "1",
    eventId: "101",
    eventTitle: "Community Cleanup at Riverside Park",
    date: "May 25, 2025",
    location: "Riverside Park",
    status: "upcoming",
    guests: 2,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "2",
    eventId: "102",
    eventTitle: "Summer Music Festival",
    date: "July 4, 2025",
    location: "Downtown Plaza",
    status: "upcoming",
    guests: 4,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "3",
    eventId: "103",
    eventTitle: "Local Cricket Tournament",
    date: "April 12, 2025",
    location: "Community Sports Field",
    status: "past",
    guests: 1,
    image: "/placeholder.svg?height=100&width=200",
  },
]

export function UserRSVPList() {
  return (
    <div className="space-y-4">
      {userRSVPs.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">No RSVPs yet</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            You haven't RSVP'd to any events yet. Browse events to find something you'd like to attend.
          </p>
          <Button asChild>
            <Link href="/events">Browse Events</Link>
          </Button>
        </div>
      ) : (
        userRSVPs.map((rsvp) => (
          <Card key={rsvp.id}>
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/4 h-32 sm:h-auto">
                  <img
                    src={rsvp.image || "/placeholder.svg"}
                    alt={rsvp.eventTitle}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="font-semibold">{rsvp.eventTitle}</h3>
                    <div>
                      {rsvp.status === "upcoming" ? (
                        <Badge className="bg-green-500">Upcoming</Badge>
                      ) : (
                        <Badge variant="outline">Past</Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" /> {rsvp.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" /> {rsvp.location}
                    </div>
                    <div>Guests: {rsvp.guests}</div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/events/${rsvp.eventId}`}>
                        <Eye className="h-4 w-4 mr-1" /> View Event
                      </Link>
                    </Button>
                    {rsvp.status === "upcoming" && (
                      <Button size="sm" variant="outline" className="text-red-500 hover:text-red-600">
                        <X className="h-4 w-4 mr-1" /> Cancel RSVP
                      </Button>
                    )}
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
