import { EventsList } from "@/components/events-list"
import { EventFilters } from "@/components/event-filters"
import { SearchBar } from "@/components/search-bar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Community Events</h1>
          <p className="text-gray-600 dark:text-gray-300">Discover and join events happening in your area</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Search & Filter</h2>
            <div className="mb-6">
              <SearchBar />
            </div>
            <EventFilters />
          </div>
        </div>
        <div className="lg:col-span-3">
          <EventsList />
        </div>
      </div>
    </div>
  )
}
