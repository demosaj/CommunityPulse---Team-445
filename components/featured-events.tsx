import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"

// Mock data for featured events
const featuredEvents = [
  {
    id: "1",
    title: "Community Cleanup at Riverside Park",
    category: "Volunteer",
    date: "May 25, 2025",
    location: "Riverside Park",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "2",
    title: "Summer Neighborhood Garage Sale",
    category: "Garage Sales",
    date: "June 5, 2025",
    location: "Maple Street",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "3",
    title: "Local Cricket Tournament",
    category: "Sports",
    date: "June 12, 2025",
    location: "Community Sports Field",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "4",
    title: "Art in the Park Exhibition",
    category: "Exhibitions",
    date: "June 18, 2025",
    location: "Central Park",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export function FeaturedEvents() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredEvents.map((event) => (
        <Link key={event.id} href={`/events/${event.id}`} className="group">
          <Card className="overflow-hidden h-full transition-all hover:shadow-md">
            <div className="relative h-48 overflow-hidden">
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <Badge className="absolute top-3 left-3">{event.category}</Badge>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                {event.title}
              </h3>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-1">
                <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{event.location}</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
