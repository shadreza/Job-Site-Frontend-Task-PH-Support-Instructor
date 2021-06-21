import axios from 'axios';
import React from 'react';
import SinglePostView from '../SinglePostView/SinglePostView';
import './Card.css';

const Card = (props) => {
    const {name , image, category, description, experience, workType, salary} = props.data[0];
    console.log(name)
    const fromWhom = props.data[1];

    const learnMore = () => {
    }
    const applyForThePost = () => {
        
    }
    const grantPost = () => {
        axios
        .post("http://localhost:5055/addJobs", {props})
        .catch(e=>{
            alert("Post Could Not be Posted");
        })
    }
    const removePost = () => {
        
    }

    

    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt="image" />
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
            <div className="card-button">
                {
                    fromWhom === 'admin' ? 
                        <div className="btn">
                            <button onClick={grantPost}>Grant Post</button>
                            <button onClick={removePost}>Remove Post</button>
                        </div>
                        :
                        <div className="btn">
                            <button onClick={applyForThePost}>Apply For The Post</button>
                            <button onClick={learnMore}>Learn More</button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Card;