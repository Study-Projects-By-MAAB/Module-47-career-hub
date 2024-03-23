import { useLoaderData, useParams } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { saveJobApplicaton } from "../../utilites/localStorage"

const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    // console.log(id, jobs)
    const job = jobs.find((job) => job.id === parseInt(id))
    // console.log(job)
    const handleApplyJob = () => {
        saveJobApplicaton(parseInt(id))
        ;() => toast("You have applied successfully")
    }
    return (
        <div>
            <h2 className="text-center text-3xl font-extrabold">Job Details of: {job.job_title}</h2>
            <div className="max-w-6xl h-screen grid gap-4 md:grid-cols-4 w-[68%] mx-auto my-32">
                <div className="border md:col-span-3 font-medium">
                    <h2> {job.company_name}</h2>
                    <span className="font-extrabold">Job Description:</span> A UI/UX (User Interface/User Experience) designer is
                    responsible for designing and creating engaging and effective interfaces for software and web applications.
                    This includes designing the layout, visual design, and interactivity of the user interface.
                </div>
                <div className="border">
                    <h2 className="text-2xl">side things</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">
                        Apply Now
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default JobDetails
