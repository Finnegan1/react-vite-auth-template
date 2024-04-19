import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
    component: () => <div className="w-screen h-screen">
        <Outlet />
    </div>
})