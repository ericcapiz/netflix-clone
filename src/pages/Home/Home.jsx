import Feature from "../../components/Feature/Feature"
import Navbar from "../../components/Navbar/Navbar"
import "./home.scss"


export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <Feature />
        </div>
    )
}
