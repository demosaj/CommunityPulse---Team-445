import Link from "next/link"
import { ShoppingBag, Trophy, BookOpen, Heart, ImageIcon, Music } from "lucide-react"

const categories = [
  {
    name: "Garage Sales",
    icon: ShoppingBag,
    href: "/events?category=garage-sales",
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  },
  {
    name: "Sports Matches",
    icon: Trophy,
    href: "/events?category=sports",
    color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  },
  {
    name: "Community Classes",
    icon: BookOpen,
    href: "/events?category=classes",
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  },
  {
    name: "Volunteer",
    icon: Heart,
    href: "/events?category=volunteer",
    color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
  },
  {
    name: "Exhibitions",
    icon: ImageIcon,
    href: "/events?category=exhibitions",
    color: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
  },
  {
    name: "Festivals",
    icon: Music,
    href: "/events?category=festivals",
    color: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",
  },
]

export function CategoryNav() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={category.href}
          className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
        >
          <div className={`p-3 rounded-full ${category.color} mb-3`}>
            <category.icon className="h-6 w-6" />
          </div>
          <span className="text-sm font-medium text-center">{category.name}</span>
        </Link>
      ))}
    </div>
  )
}
