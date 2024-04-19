import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected")({
  beforeLoad: () => {
    redirect({
      to: "/landing-page",
      replace: true,
      throw: true,
    });
  },
  component: () => (
    <div>
      Hello /(protected)/_layout!
      <Outlet />
    </div>
  ),
});
