import Banner from "../Banner/Banner"
import CategoryList from "../CategoryList/CategoryList"
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs"

const Home = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Banner></Banner>
                <CategoryList></CategoryList>
                <FeaturedJobs></FeaturedJobs>
            </div>
        </div>
    )
}

export default Home
