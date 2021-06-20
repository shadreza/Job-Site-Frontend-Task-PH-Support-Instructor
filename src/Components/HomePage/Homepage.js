import React from 'react';
import Card from '../Card/Card';
import Navbar from '../NavBar/Navbar';
import './Homepage.css';

import image from '../Images/dummy-person.svg';

const Homepage = () => {
    let oneCard = [image , "Person", "Web Developer Internship", "This is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the description", ["Add","Remove"]]
    return (
        <div>
            <Navbar />
            <div className="hemepage-body">
                <Card data = {oneCard} />
                <Card data = {oneCard} />
                <Card data = {oneCard} />
                <Card data = {oneCard} />
                <Card data = {oneCard} />
            </div>
        </div>
    );
};

export default Homepage;