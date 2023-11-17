import { Link } from "react-router-dom";
function Home(){
    return(
        <div>
            <h1>This is Home</h1>
            <Link to="/About">Go to About Page</Link>
        </div>
    )
}
export default Home;