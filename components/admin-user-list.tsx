import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Ban, CheckCircle, AlertCircle, Eye } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for users
const users = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@example.com",
    eventsCreated: 5,
    eventsAttended: 12,
    joinDate: "Jan 15, 2025",
    status: "active",
    verified: true,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    eventsCreated: 8,
    eventsAttended: 4,
    joinDate: "Feb 3, 2025",
    status: "active",
    verified: true,
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael.b@example.com",
    eventsCreated: 2,
    eventsAttended: 7,
    joinDate: "Mar 20, 2025",
    status: "active",
    verified: false,
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.d@example.com",
    eventsCreated: 0,
    eventsAttended: 3,
    joinDate: "Apr 5, 2025",
    status: "flagged",
    verified: false,
  },
  {
    id: "5",
    name: "Robert Wilson",
    email: "robert.w@example.com",
    eventsCreated: 1,
    eventsAttended: 0,
    joinDate: "Apr 12, 2025",
    status: "banned",
    verified: false,
  },
]

export function AdminUserList() {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Events</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium flex items-center">
                        {user.name}
                        {user.verified && <CheckCircle className="h-4 w-4 text-blue-500 ml-1" />}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>Created: {user.eventsCreated}</div>
                      <div>Attended: {user.eventsAttended}</div>
                    </div>
                  </TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell>
                    {user.status === "active" && <Badge className="bg-green-500">Active</Badge>}
                    {user.status === "flagged" && (
                      <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                        Flagged
                      </Badge>
                    )}
                    {user.status === "banned" && <Badge variant="destructive">Banned</Badge>}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/admin/users/${user.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      {!user.verified && (
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      )}
                      {user.status !== "flagged" && (
                        <Button size="sm" variant="outline" className="text-yellow-600 hover:text-yellow-700">
                          <AlertCircle className="h-4 w-4" />
                        </Button>
                      )}
                      {user.status !== "banned" && (
                        <Button size="sm" variant="destructive">
                          <Ban className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
