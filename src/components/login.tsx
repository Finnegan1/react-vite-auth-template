import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { auth } from "@/lib/auth";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const authResponse = await auth.loginEmail({email, password})
    if (authResponse.data.user) {
      navigate({to: "/", replace: true})
    }
  };

  return (
    <div className="w-full h-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  required
                  type="email"
                  value={email} 
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    className="ml-auto inline-block text-sm underline"
                    to="/reset-password"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  required 
                  type="password" 
                  value={password} 
                  onChange={(e)=>setPassword(e.target.value)} 
                />
              </div>
              <Button className="w-full" type="submit" onClick={handleSubmit}>
                Login
              </Button>
              <Button className="w-full" variant="outline">
                Login with Google
              </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            {"Don't have an account? "}
            <Link className="underline" to="/register">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          alt="Image"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
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
  );
}
