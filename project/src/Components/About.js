import { Link } from "react-router-dom";

function About(){
    return(
        <div>
            <h1>This is About</h1>
            <Link to="/Home">Go to Home Page</Link>
        </div>
    )
}
export default About;