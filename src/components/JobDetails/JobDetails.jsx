import { useLoaderData, useParams } from "react-router-dom"

const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    console.log(id, jobs)
    const job = jobs.find((job) => job.id === parseInt(id))
    console.log(job)
    return (
        <div>
            <h2 className="text-center">job details of: {id}</h2>
            <div className="grid gap-4 md:grid-cols-4 w-[68%] mx-auto my-32">
                <div className="border md:col-span-3 font-medium">
                    <span className="font-extrabold">Job Description:</span> A UI/UX (User Interface/User Experience) designer is
                    responsible for designing and creating engaging and effective interfaces for software and web applications.
                    This includes designing the layout, visual design, and interactivity of the user interface.
                </div>
                <div className="border"></div>
            </div>
        </div>
    )
}

export default JobDetails
