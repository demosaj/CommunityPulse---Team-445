import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Clock, Users } from "lucide-react"

// Mock data for events
const events = [
  {
    id: "1",
    title: "Community Cleanup at Riverside Park",
    category: "Volunteer",
    date: "May 25, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Riverside Park, 123 River Road",
    attendees: 24,
    description:
      "Join us for our monthly community cleanup at Riverside Park. We'll be picking up litter, removing invasive plants, and beautifying our shared spaces.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "2",
    title: "Summer Neighborhood Garage Sale",
    category: "Garage Sales",
    date: "June 5, 2025",
    time: "8:00 AM - 2:00 PM",
    location: "Maple Street Community",
    attendees: 56,
    description:
      "The annual summer garage sale is back! Clean out your closets and join your neighbors for this community-wide event.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "3",
    title: "Local Cricket Tournament",
    category: "Sports",
    date: "June 12, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Community Sports Field, 456 Park Avenue",
    attendees: 32,
    description:
      "Come join or watch our local cricket tournament. All skill levels welcome! Refreshments will be provided.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "4",
    title: "Art in the Park Exhibition",
    category: "Exhibitions",
    date: "June 18, 2025",
    time: "11:00 AM - 5:00 PM",
    location: "Central Park Pavilion",
    attendees: 45,
    description:
      "Local artists will be showcasing their work in this outdoor exhibition. Come support local talent and enjoy the beautiful park setting.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "5",
    title: "Community Yoga Class",
    category: "Classes",
    date: "June 20, 2025",
    time: "7:00 AM - 8:00 AM",
    location: "Sunrise Park",
    attendees: 18,
    description:
      "Start your day with a rejuvenating yoga session in the park. All levels welcome, just bring your mat and water bottle.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "6",
    title: "Summer Music Festival",
    category: "Festivals",
    date: "July 4, 2025",
    time: "3:00 PM - 10:00 PM",
    location: "Downtown Plaza",
    attendees: 120,
    description: "Celebrate summer with live music, food trucks, and family activities at our annual music festival.",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export function EventsList() {
  return (
    <div className="space-y-6">
      {events.map((event) => (
        <Card key={event.id} className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 h-48 md:h-auto">
              <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
            </div>
            <CardContent className="flex-1 p-6">
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="secondary">{event.category}</Badge>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                <Link href={`/events/${event.id}`} className="hover:text-purple-600 transition-colors">
                  {event.title}
                </Link>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{event.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>{event.attendees} attending</span>
                </div>
              </div>

              <div className="flex justify-end">
                <Button asChild>
                  <Link href={`/events/${event.id}`}>View Details</Link>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  )
}
