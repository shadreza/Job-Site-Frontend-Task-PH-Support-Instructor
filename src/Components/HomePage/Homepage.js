import React from 'react';
import AddingJobPost from '../AddingJobPost/AddingJobPost';
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
            <div className="this-will-not-stay-here">
                <AddingJobPost />
            </div>
        </div>
    );
};

export default Homepage;