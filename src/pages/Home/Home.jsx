import Feature from "../../components/Feature/Feature"
import Navbar from "../../components/Navbar/Navbar"
import List from "../../components/List/List"
import "./home.scss"


const Home = () => {
    return (
      <div className="home">
        <Navbar />
        <Feature/>
        <List/>
        <List/>
        <List/>
        <List/>
      </div>
    );
  };
  
  export default Home;