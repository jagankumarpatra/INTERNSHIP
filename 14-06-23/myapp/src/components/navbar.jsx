import React, { useContext } from "react";
import SearchContext from "../searchContext";
import { Link, useNavigate } from "react-router-dom";

function Navbar(){
    const {search,updateSearch}=useContext(SearchContext);
    const navigate = useNavigate();
    const  handleChange=(e) =>{
        updateSearch(e.target.value);
    };

    // const handleSignin = () => {
    //     navigate('/signin');
    // };

    const handleSignup = () => {
        navigate('/signup');
    }

    return  (
        <div>
            <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(e)=>handleChange(e)}
            />
            <Link to = "/signin">
                <button>Sign In</button>
            </Link>
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
}
export default Navbar;