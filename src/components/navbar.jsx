import { Link } from "react-router-dom";
import "../styles/navbar.css"

const   Navbar = () => {
    return (  
        <div className="navbar">
            <Link to="/"><div>
                <div className="img"><img id="img" height={20} width="20" src="images/hemgar.png" alt="" /></div>
                <div className="logo"><img width="100" src="images/youtube.png" alt="" /><span>IN</span></div>
            </div></Link>

            <Link to="/search">
            <div className="search">
                <input type="search" name="" id="" placeholder="search" />
                    <div><img  width={20} height={20} src="images/search.png" alt="" /></div>
            </div>
            </Link>
            
            <div className="mic">  <img width={20} height={20} src="images/mic.png" alt="" /></div>
            <div className="options">
                <Link to="/addvideo"><button className="btn btn-outline-primary">Add Video</button></Link>
                <Link to="/signin"><button className="btn btn-outline-primary">Sign In</button></Link>
            </div>    
        </div>
    );
}
 
export default Navbar;