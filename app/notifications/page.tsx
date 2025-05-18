import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NotificationList } from "@/components/notification-list"

export default function NotificationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Notifications</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">Stay updated with your event notifications</p>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="reminders">Reminders</TabsTrigger>
          <TabsTrigger value="updates">Updates</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <NotificationList type="all" />
        </TabsContent>
        <TabsContent value="reminders">
          <NotificationList type="reminders" />
        </TabsContent>
        <TabsContent value="updates">
          <NotificationList type="updates" />
        </TabsContent>
      </Tabs>
    </div>
  )
}
