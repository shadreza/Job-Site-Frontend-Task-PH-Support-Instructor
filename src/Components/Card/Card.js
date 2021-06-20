import React from 'react';
import './Card.css';

const Card = (props) => {

    const img = props.data[0];
    const name = props.data[1];
    const category = props.data[2];
    const info = props.data[3];
    const salary = props.data[4];
    const experience = props.data[5];
    const jobType = props.data[6];
    const buttonNameArray = props.data[7];

    return (
        <div className="card">
            <div className="card-image">
                <img src={img} alt="" />
            </div>
            <div className="card-header">
                <h3>{name}</h3>
            </div>
            <div className="card-category">
                <h5>{category}</h5>
            </div>
            <div className="card-description">
                <p>{info}</p>
            </div>
            <div className="card-experience">
                <h4>{experience}</h4>
            </div>
            <div className="card-job-type-location">
                <h4>{jobType}</h4>
            </div>
            <div className="card-salary">
                <h4>${salary}</h4>
            </div>
            <div className="card-button">
                {
                    buttonNameArray.map(btn => <button>{btn}</button>)
                }
            </div>
        </div>
    );
};

export default Card;