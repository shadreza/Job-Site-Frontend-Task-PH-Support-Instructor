import React from 'react';
import axios from 'axios';
import './Card.css';

const Card = (props) => {
    const {name, category, description, experience, workType, salary, tags, image} = props.data[0];
    const fromWho = props.data[1];
    const _id = props.data[2];

    const post = {
        name : name,
        category : category,
        description : description,
        experience : experience,
        workType : workType,
        salary : salary,
        tags : tags,
        image : image
    }

    const grantToPost = (url) => {
        axios
        .post(url, {post})
        .then(() =>{
            alert('Post Allowed')
        })
        .catch(e=>{
            alert("Post Could Not be Granted To Wall");
        })
    }
    const removeFromPosting = () => {
        
    }
    const apply = () => {
        
    }
    const learnMore = () => {
            
    }

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
            <div className="card-salary">
                <h5>{tags}</h5>
            </div>
            <div className="card-button">
                {
                    fromWho !== 'admin' ? 
                        <div className="btn">
                            <button id="btn-grant" onClick={() =>{grantToPost("http://localhost:5055/addMainJobs")}}>Grant Post</button>
                            <button id="btn-remove" onClick={() =>{removeFromPosting()}}>Delete Post</button>
                        </div>
                        :
                        <div className="btn">
                            <button id="btn-apply" onClick={() =>{apply()}}>Apply</button>
                            <button id="btn-learn" onClick={() =>{learnMore()}}>Learn More</button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Card;