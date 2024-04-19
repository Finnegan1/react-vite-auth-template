import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";

import { routeTree } from "./routeTree.gen";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Create a new router instance
const router = createRouter({ 
  routeTree,
  defaultPendingComponent: () => (
    <div>
      Loading...
    </div>
  ),
  defaultErrorComponent: ( {error} ) => (
    <div>
      Error: {error as string}
    </div>
  ),
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
