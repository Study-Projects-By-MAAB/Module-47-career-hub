import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./components/Root/Root"
import Home from "./components/Home/Home"
import AppliedJobs from "./components/AppliedJobs/AppliedJobs"
import ErrorPage from "./components/ErrorPage/ErrorPage"
import JobDetails from "./components/JobDetails/JobDetails"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/applied",
                element: <AppliedJobs></AppliedJobs>,
                loader: () => fetch("/jobs.json"), // warning: only load the data you need. do not need all the data.
            },
            {
                path: "/job/:id",
                loader: () => fetch("/jobs.json"), // don't load all data. load only what you need.
                element: <JobDetails></JobDetails>,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
