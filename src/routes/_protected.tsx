import supabase from "@/supabaseClient";
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected")({
  beforeLoad: async () => {
    const user = (await supabase.auth.getUser()).data.user;

    if (!user) {
      redirect({
        to: "/landing-page",
        replace: true,
        throw: true,
      });
    }
  },
  component: () => (
    <div className="w-full h-full">
      Hello /(protected)/_layout!
      <Outlet />
    </div>
  ),
});
