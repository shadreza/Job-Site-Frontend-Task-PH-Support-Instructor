import React from 'react';
import './Card.css';

const Card = (props) => {

    const img = props.data[0];
    const name = props.data[1];
    const category = props.data[2];
    const info = props.data[3];
    const buttonNameArray = props.data[4];

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
            <div className="card-button">
                {
                    buttonNameArray.map(btn => <button>{btn}</button>)
                }
            </div>
        </div>
    );
};

export default Card;