import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, AlertCircle } from "lucide-react"
import Link from "next/link"

// Mock data for notifications
const notifications = [
  {
    id: "1",
    title: "Event Reminder",
    message: "Your event 'Community Cleanup at Riverside Park' is tomorrow at 9:00 AM.",
    timestamp: "May 24, 2025 - 9:00 AM",
    type: "reminder",
    read: false,
    eventId: "1",
  },
  {
    id: "2",
    title: "Event Update",
    message: "The location for 'Summer Music Festival' has been changed to 'Central Park Pavilion'.",
    timestamp: "May 20, 2025 - 2:45 PM",
    type: "update",
    read: true,
    eventId: "6",
  },
  {
    id: "3",
    title: "Event Reminder",
    message: "Your event 'Local Cricket Tournament' is in 3 days.",
    timestamp: "June 9, 2025 - 10:00 AM",
    type: "reminder",
    read: false,
    eventId: "3",
  },
  {
    id: "4",
    title: "Event Cancelled",
    message: "The event 'Yoga in the Park' has been cancelled by the organizer.",
    timestamp: "May 17, 2025 - 8:45 AM",
    type: "update",
    read: true,
    eventId: "5",
  },
  {
    id: "5",
    title: "New RSVP",
    message: "John Smith has RSVP'd to your event 'Community Cleanup at Riverside Park'.",
    timestamp: "May 15, 2025 - 11:30 AM",
    type: "update",
    read: true,
    eventId: "1",
  },
]

interface NotificationListProps {
  type: "all" | "reminders" | "updates"
}

export function NotificationList({ type }: NotificationListProps) {
  const filteredNotifications =
    type === "all" ? notifications : notifications.filter((notification) => notification.type === type.slice(0, -1))

  return (
    <div className="space-y-4">
      {filteredNotifications.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-md">
          <h3 className="text-lg font-medium mb-2">No notifications</h3>
          <p className="text-gray-600 dark:text-gray-300">
            You don't have any {type === "all" ? "" : type} notifications at this time.
          </p>
        </div>
      ) : (
        filteredNotifications.map((notification) => (
          <Card key={notification.id} className={notification.read ? "opacity-75" : ""}>
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div
                  className={`p-2 rounded-full flex-shrink-0 ${
                    notification.type === "reminder"
                      ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
                  }`}
                >
                  {notification.type === "reminder" ? (
                    <Calendar className="h-5 w-5" />
                  ) : (
                    <AlertCircle className="h-5 w-5" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{notification.title}</h3>
                      {!notification.read && <Badge className="bg-blue-600">New</Badge>}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{notification.timestamp}</span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-2">{notification.message}</p>

                  <div className="flex justify-between items-center">
                    <Link
                      href={`/events/${notification.eventId}`}
                      className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      View Event
                    </Link>

                    {!notification.read && (
                      <button className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                        Mark as Read
                      </button>
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
