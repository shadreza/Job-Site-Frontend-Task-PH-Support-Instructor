import React from 'react';
import AllGrantedJobs from '../AllGrantedJobs/AllGrantedJobs';
import './Homepage.css';

const Homepage = () => {
    return (
        <div>
            <div className="hemepage-body">
                <AllGrantedJobs  />
            </div>
        </div>
    );
};

export default Homepage;