import React from 'react';
import './Navbar.css';

import logo from '../Images/job-logo.svg';
import searchLogo from '../Images/search-job.svg';
import accountPic from '../Images/dummy-person.svg';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar-parent-div">
            <div className="logo-part">
                <Link to="/">
                    <img src={logo} alt="Job Site" />
                </Link>
            </div>
            <div className="links-part">
                <div className="serach">
                    <input placeholder='search your job' />
                    <img src={searchLogo} alt="search" />
                </div>
                <div className="links">
                    <Link to="/" className="page-links">
                        Home
                    </Link>
                    <Link to="/" className="page-links">
                        Job Posters
                    </Link>
                    <Link to="/" className="page-links">
                        Job Seekers
                    </Link>
                </div>
                <div className="account">
                    <Link to="/" className="page-links">
                        <img src={accountPic} alt="account" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;