import { useState } from "react";
import { NavLink } from "react-router-dom";
import {FaBars} from "react-icons/fa";
import "../App.css";
import React from 'react';


//React navigation bar, divided into 2 sections, leftside with a logo & rightside with nagivation links

function Nav() {
    const [showLinks, setShowLinks] = useState(false);
    return (
    
    <div className="Navbar" id="Navigation">
        <div className="leftSide"> 
            <NavLink to="/ end">THE NATURE <br />PHOTOGRAPHER</NavLink>
        </div>  
            <div className="rightSide">
                <div className="links"id={showLinks ? "hidden" : ""}> 
                <NavLink to="/ end">Homepage</NavLink>
                <NavLink to="/create">Create</NavLink>
                <NavLink to="/about ">About</NavLink></div>  
                    <button onClick={() => setShowLinks(!showLinks)}><FaBars /></button>
            </div>      
     </div> 
    );
}
export default Nav;