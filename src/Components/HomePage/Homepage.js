import React from 'react';
import AllJobBox from '../AllJobBox/AllJobBox';
import Navbar from '../NavBar/Navbar';
import './Homepage.css';

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <div className="hemepage-body">
                <AllJobBox />
            </div>
        </div>
    );
};

export default Homepage;