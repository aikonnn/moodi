import React from "react";
import './NavBar.css';
import {Link} from 'react-router-dom';

function NavBar(){
    return (
        <React.Fragment>
            <div className = "bar">
                <h2 className="title">
                    MOODI
                </h2>
                
                <div className = "flex">
                    <Link to='/' className = "flex">
                    <button className = "btn">
                    Home
                    </button>
                    </Link>
                    <Link to ='/view' className = "flex">
                    <button className = "btn">
                    Records
                    </button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavBar;