import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserEventsList } from "@/components/user-events-list"
import { UserRSVPList } from "@/components/user-rsvp-list"
import Link from "next/link"

export default function UserDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">Manage your events and RSVPs</p>
        </div>
        <Button asChild>
          <Link href="/events/create">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Create Event
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">5</CardTitle>
            <CardDescription>Events Created</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">12</CardTitle>
            <CardDescription>Events Attended</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">3</CardTitle>
            <CardDescription>Upcoming RSVPs</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Tabs defaultValue="my-events" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="my-events">My Events</TabsTrigger>
          <TabsTrigger value="my-rsvps">My RSVPs</TabsTrigger>
        </TabsList>
        <TabsContent value="my-events">
          <UserEventsList />
        </TabsContent>
        <TabsContent value="my-rsvps">
          <UserRSVPList />
        </TabsContent>
      </Tabs>
    </div>
  )
}
