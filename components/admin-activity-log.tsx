import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for activity log
const activityLog = [
  {
    id: "1",
    action: "Event Created",
    user: "John Smith",
    details: "Created event 'Community Cleanup at Riverside Park'",
    timestamp: "May 10, 2025 - 10:23 AM",
    type: "event",
  },
  {
    id: "2",
    action: "Event Approved",
    user: "Admin (Sarah Johnson)",
    details: "Approved event 'Summer Neighborhood Garage Sale'",
    timestamp: "May 12, 2025 - 2:45 PM",
    type: "admin",
  },
  {
    id: "3",
    action: "User Flagged",
    user: "Admin (Sarah Johnson)",
    details: "Flagged user 'Emily Davis' for review",
    timestamp: "May 13, 2025 - 9:15 AM",
    type: "admin",
  },
  {
    id: "4",
    action: "Event RSVP",
    user: "Michael Brown",
    details: "RSVP'd to event 'Local Cricket Tournament' with 3 guests",
    timestamp: "May 15, 2025 - 11:30 AM",
    type: "rsvp",
  },
  {
    id: "5",
    action: "User Banned",
    user: "Admin (John Smith)",
    details: "Banned user 'Robert Wilson' for violating community guidelines",
    timestamp: "May 16, 2025 - 4:20 PM",
    type: "admin",
  },
  {
    id: "6",
    action: "Event Cancelled",
    user: "Sarah Johnson",
    details: "Cancelled event 'Yoga in the Park'",
    timestamp: "May 17, 2025 - 8:45 AM",
    type: "event",
  },
  {
    id: "7",
    action: "New User",
    user: "System",
    details: "New user 'David Lee' registered",
    timestamp: "May 18, 2025 - 3:10 PM",
    type: "system",
  },
]

export function AdminActivityLog() {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Action</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Timestamp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activityLog.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {log.type === "admin" && <Badge className="bg-purple-600">Admin</Badge>}
                      {log.type === "event" && <Badge className="bg-blue-600">Event</Badge>}
                      {log.type === "rsvp" && <Badge className="bg-green-600">RSVP</Badge>}
                      {log.type === "system" && <Badge variant="outline">System</Badge>}
                      <span>{log.action}</span>
                    </div>
                  </TableCell>
                  <TableCell>{log.user}</TableCell>
                  <TableCell>{log.details}</TableCell>
                  <TableCell className="text-gray-500 dark:text-gray-400 text-sm">{log.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
