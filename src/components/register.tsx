import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"

export function Register() {
  return (
    <div key="1" className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto w-[350px] space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Register</h1>
            <p className="text-gray-500 dark:text-gray-400">Enter your details below to create a new account</p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="First Name" required type="text" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Last Name" required type="text" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="m@example.com" required type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" required type="password" />
            </div>
            <Button className="w-full" type="submit">
              Register
            </Button>
            <Button className="w-full" variant="outline">
              Register with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?
            <Link className="underline" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-gray-100 lg:block dark:bg-gray-800">
        <img
          alt="Cover Image"
          className="h-full w-full object-cover"
          height="1080"
          src="/placeholder.svg"
          style={{
            aspectRatio: "1920/1080",
            objectFit: "cover",
          }}
          width="1920"
        />
      </div>
    </div>
  )
}
