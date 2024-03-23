import { HiOutlineCurrencyDollar } from "react-icons/hi2"
import { GoLocation } from "react-icons/go"
import { Link } from "react-router-dom"

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="p-5">
                <img className="h-10" src={logo} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <span className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-6">
                        {remote_or_onsite}
                    </span>
                    <span className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-6">
                        {job_type}
                    </span>
                </div>
                <div className="mt-4 flex">
                    <h2 className="flex gap-2 items-center">
                        <GoLocation className="text-2xl" /> <span>{location}</span>
                    </h2>
                    <h2 className="flex gap-2 items-center">
                        Salary :
                        <HiOutlineCurrencyDollar className="text-2xl" /> <span>{salary}</span>
                    </h2>
                </div>
                <div className="card-actions ">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Job
