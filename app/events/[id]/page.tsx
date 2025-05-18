import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { RSVPForm } from "@/components/rsvp-form"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { MapPin, Calendar, Clock, Users, Share2 } from "lucide-react"

export default function EventDetailPage({ params }: { params: { id: string } }) {
  // This would be a server component fetching event data
  const event = {
    id: params.id,
    title: "Community Cleanup at Riverside Park",
    category: "Volunteer Opportunities",
    date: "May 25, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Riverside Park, 123 River Road",
    description:
      "Join us for our monthly community cleanup at Riverside Park. We'll be picking up litter, removing invasive plants, and beautifying our shared spaces. All equipment will be provided, just bring your enthusiasm and a water bottle! This is a family-friendly event suitable for all ages.",
    image: "/placeholder.svg?height=400&width=800",
    organizer: {
      name: "Green Community Initiative",
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
    },
    attendees: 24,
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/events" className="text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Events
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">{event.category}</Badge>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4">{event.title}</h1>

              <div className="flex items-center gap-2 mb-6">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={event.organizer.avatar || "/placeholder.svg"} alt={event.organizer.name} />
                  <AvatarFallback>{event.organizer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Organized by</span>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">{event.organizer.name}</span>
                    {event.organizer.verified && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Date</div>
                    <div>{event.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Time</div>
                    <div>{event.time}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Location</div>
                    <div>{event.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                    <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Attendees</div>
                    <div>{event.attendees} people going</div>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div>
                <h2 className="text-xl font-semibold mb-4">About This Event</h2>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{event.description}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Share Event
                </Button>
                <Button variant="outline" asChild>
                  <Link href={`https://maps.google.com/?q=${encodeURIComponent(event.location)}`} target="_blank">
                    View on Map
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">RSVP to this Event</h2>
              <RSVPForm eventId={params.id} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
