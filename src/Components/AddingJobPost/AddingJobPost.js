import axios from 'axios';
import React , {useState} from 'react';
import './AddingJobPost.css';

const AddingJobPost = () => {

    // const [tagArray, setTagArray] = useState([]);

    const onFileChange = event => {

        console.log(event.target.files);
      
      };

    const handleSubmit = () => {
        const post = {
           name : document.getElementById('name-of-the-job').value,
           category : document.getElementById('category-of-the-job').value,
           description : document.getElementById('description-of-the-job').value,
           experience : document.getElementById('experience-required-for-the-job').value,
           workType : document.getElementById('work-type-of-the-job').value,
           salary : document.getElementById('salary-of-the-job').value,
           tags : document.getElementById('tags-for-the-job').value,
           image : document.getElementById('image-of-the-job').files
        }
        if(post.name.trim().length <=0 ) {
            alert('Enter Name First');
        } else if (post.category.trim().length <=0) {
            alert('Enter Category First');
        } else if (post.description.trim().length <=0) {
            alert('Enter Description First');
        } else if (post.experience.trim().length <=0) {
            alert('Enter Valid Experience');
        } else if (post.workType.trim().length <=0) {
            alert('Enter Work Type First');
        } else if (isNaN(post.salary) || post.salary<0) {
            alert('Enter A Valid Salary');
        } else if (post.tags.length <=0) {
            alert('Enter Tag First');
        } else if (post.image.length <=0) {
            alert('Upload Image First');
        } else {
            let IMAGE = "";
            const img = post.image[0];
            const imgData = new FormData();
            imgData.set("key", "45993c2fa3b2590d51cee87d8ff551a6");
            imgData.append("image", img);
            axios
            .post("https://api.imgbb.com/1/upload", imgData)
            .then ( response => {
                IMAGE = response.data.data.display_url;
                post.image = IMAGE;
                console.log(post);
                //   const url = "https://fierce-lowlands-85167.herokuapp.com/addCourse";
                axios
                .post("http://localhost:5055/addJobs", {post})
                .catch(e=>{
                    alert("Post Could Not be Postd");
                })
            })
            .catch(e=>{
                alert("Image Could Not be Uploaded");
            })         
        }
    }

    return (
        <div className="adding-job-post-main-div">
            <div className="header">
                <h2> Post A Job</h2>
            </div>
            <div className="inputs">
                <h4>Name Of The Job</h4>
                <input id="name-of-the-job" type="text" placeholder="enter the name"/>
            </div>
            <div className="inputs">
                <h4>What Will Be The Category</h4>
                <input id="category-of-the-job" type="text" placeholder="enter the category"/>
            </div>
            <div className="inputs">
                <h4>What Will Be The Description</h4>
                <input id="description-of-the-job" type="text" placeholder="enter the description"/>
            </div>
            <div className="inputs">
                <h4>Experience Required</h4>
                <input id="experience-required-for-the-job" type="text" placeholder="amount of experience"/>
            </div>
            <div className="inputs">
                <h4>What Will Be The Work Type</h4>
                <input id="work-type-of-the-job" type="text" placeholder="enter the work type"/>
            </div>
            <div className="inputs">
                <h4>What Will Be The Salary</h4>
                <input id="salary-of-the-job" type="number" placeholder="enter the salary"/>
            </div>
            <div className="inputs">
                <h4>What are the tags</h4>
                <input id="tags-for-the-job" type="text" placeholder="enter the tags"/>
            </div>
            <div className="inputs">
                <h4>Upload an image for the post</h4>
                <input id="image-of-the-job" type="file" onChange={onFileChange} />
            </div>
            <button className="btn"onClick={()=>handleSubmit()}>Submit Post</button>
        </div>
    );
};

export default AddingJobPost;