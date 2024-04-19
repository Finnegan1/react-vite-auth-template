import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { auth } from "@/lib/auth";

export function ResetPassword() {
  const [email, setEmail] = useState("");
  const navigation = useNavigate();

  const handleSubmit = async () => {
    const authResponse = await auth.resetPassword({ email });
    if (authResponse.data) {
      navigation({ to: "/", replace: true });
    }
  };

  return (
    <div
      key="1"
      className="h-full w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]"
    >
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto w-[350px] space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Reset Password</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your email to reset your password
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button className="w-full" type="submit" onClick={handleSubmit}>
              Send Reset Link
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            {"Remembered your password? "}
            <Link className="underline" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-gray-100 dark:bg-gray-800 lg:block">
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
  );
}
