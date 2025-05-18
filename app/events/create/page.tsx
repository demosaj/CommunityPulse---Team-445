import { EventForm } from "@/components/event-form"
import Link from "next/link"

export default function CreateEventPage() {
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

      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Create a New Event</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Share your event with the community. Fill out the form below to get started.
          </p>

          <EventForm />
        </div>
      </div>
    </div>
  )
}
