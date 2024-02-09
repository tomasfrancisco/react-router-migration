"use client";
import "../app/globals.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";

export default function SPA() {
  return (
    <>
      <h1>Pages</h1>
      <RouterProvider
        router={createBrowserRouter(
          [
            {
              path: "",
              element: (
                <>
                  <h1 className="text-3xl">Home</h1>
                  <div className="flex flex-col">
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                  </div>
                </>
              ),
            },
            {
              path: "/about",
              element: <h1>About</h1>,
            },
            {
              path: "/contact",
              element: <h1>Contact</h1>,
            },
          ],
          { basename: "/spa" }
        )}
      />
    </>
  );
}
