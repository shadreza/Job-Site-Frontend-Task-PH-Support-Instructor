import React from 'react';
import './Card.css';

const Card = (props) => {
    const {name, category, description, experience, workType, salary, tags, image} = props.data;

    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt="" />
            </div>
            <div className="card-header">
                <h3>{name}</h3>
            </div>
            <div className="card-category">
                <h5>{category}</h5>
            </div>
            <div className="card-description">
                <p>{description}</p>
            </div>
            <div className="card-experience">
                <h4>{experience}</h4>
            </div>
            <div className="card-job-type-location">
                <h4>{workType}</h4>
            </div>
            <div className="card-salary">
                <h4>${salary}</h4>
            </div>
            {/* <div className="card-button">
                {
                    buttonNameArray.map(btn => <button>{btn}</button>)
                }
            </div> */}
        </div>
    );
};

export default Card;