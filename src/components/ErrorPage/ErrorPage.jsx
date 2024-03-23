import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops</h2>
            <Link to={-1}>
                <button className="btn">go back</button>
            </Link>
        </div>
    )
}

export default ErrorPage
