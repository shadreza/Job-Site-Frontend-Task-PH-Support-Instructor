import React , {useContext, useEffect, useState} from 'react';
import './Navbar.css';

import logo from '../Images/job-logo.svg';
import searchLogo from '../Images/search-job.svg';
import accountPic from '../Images/dummy-person.svg';
import { Link, useLocation } from 'react-router-dom';
import { AllGrantedJobsContext, AllJobsContext, SearchedItemContext, UserContext } from '../../App';

const Navbar = () => {

    const searched_Item = useContext(SearchedItemContext)
    const user = useContext(UserContext)
    const [loggedInUser , setLoggedInUser] = useState(user[0])

    const allPosts = useContext(AllJobsContext);
    const grantedPosts = useContext(AllGrantedJobsContext)

    const [allPostArray , setAllPostArray] = useState([])
    const [grantedPostArray , setGrantedPostArray] = useState([])

    const setAllPosts = () => {
        if(allPosts[0].length > 0) {
            setAllPostArray(allPosts[0])
        }
    }

    const setGrantedPosts = () => {
        if(grantedPosts[0].length > 0) {
            setGrantedPostArray(grantedPosts[0])
        }
    }

    useEffect(()=> {
        setAllPosts()
    }, [allPosts[0]])

    const [itemSearched , setItemSearched] = useState([]); 
    const setUpSearchedItem = () => {
        if(searched_Item[0].length > 0) {
            setItemSearched(searched_Item[0])
        } else{
            document.getElementById('search-input').value=''
        }
    }

    const [val,setVal] = useState('');

    useEffect(()=> {
        setUpSearchedItem()
    }, [searched_Item[0]])

    useEffect(()=> {
        setGrantedPosts()
    }, [grantedPosts[0]])
    const location = useLocation();
    let matches = [];
    const searchForItem = () => {
        // const typed = document.getElementById('search-input').value;
        matches = [];
        if(location.pathname === '/allPostedPosts'){
           for(let i = 0; i < allPostArray.length; i++) {
               if(allPostArray[i].post.name === val) {
                   matches.push(allPostArray[i])
               }
           }
        } else {
            for(let i = 0; i < grantedPostArray.length; i++) {
                if(grantedPostArray[i].post.name === val) {
                    matches.push(grantedPostArray[i])
                }
            }
        }
        if(matches.length === 0) {
            alert('Sorry no such job found by the name of ' + val);
            searched_Item[1]([])
        } else {
            if(typeof(matches[0].post) === null) {
                searchForItem()
            }
            searched_Item[1](matches)
        }
    }

    return (
        <div className="navbar-parent-div">
            <div className="logo-part">
                <Link to="/">
                    <img src={logo} alt="Job Site" />
                </Link>
            </div>
            <div className="links-part">
                <div className="serach">
                    <input placeholder='search your job by name' id="search-input" onChange={(e)=>{setVal(e.target.value)}}/>
                    <img src={searchLogo} onClick={()=>{searchForItem()}} alt="search" />
                </div>
                <div className="links">
                    <Link to="/" className="page-links">
                        Home
                    </Link>
                    <Link to="/postByEmployee" className="page-links">
                        Job Posters
                    </Link>
                    <Link to="/grantedPosts" className="page-links">
                        Job Seekers
                    </Link>
                </div>
                <div className="account">
                    {
                        loggedInUser.name === null 
                        ?
                            <Link to="/login" className="page-links">
                                <img src={accountPic} alt="account" />
                            </Link>
                            :loggedInUser === undefined 
                            ?
                                <Link to="/login" className="page-links">
                                    <img src={accountPic} alt="account" />
                                </Link>
                                :
                                loggedInUser.name !== null 
                                ?
                                    <Link to="/profile" className="page-links">
                                        <p>{loggedInUser.name}</p>
                                        <img src={loggedInUser.image} alt="account" />
                                    </Link>
                                    : 
                                    <Link to="/login" className="page-links">   
                                        <img src={accountPic} alt="account" />
                                    </Link>
                                


                    }
                    
                </div>
            </div>
            <div id="modal">
                {matches.map(item => <p style={{color:'red'}}>{item.post.name}</p>)}
            </div>
        </div>
    );
};

export default Navbar;