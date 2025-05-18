"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { logout } from "@/app/auth/actions"
import { useRouter } from "next/navigation"

interface AuthButtonProps {
  isLoggedIn: boolean
}

export function AuthButton({ isLoggedIn }: AuthButtonProps) {
  const router = useRouter()

  const handleLogout = async () => {
    await logout()
    router.refresh()
  }

  if (isLoggedIn) {
    return (
      <Button variant="ghost" onClick={handleLogout}>
        Log out
      </Button>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" asChild>
        <Link href="/auth/login">Log in</Link>
      </Button>
      <Button asChild>
        <Link href="/auth/signup">Sign up</Link>
      </Button>
    </div>
  )
}
