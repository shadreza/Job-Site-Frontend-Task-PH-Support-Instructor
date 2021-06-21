import React , {createContext , useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './Components/HomePage/Homepage';
import AddingJobPost from './Components/AddingJobPost/AddingJobPost';
import AllGrantedJobs from './Components/AllGrantedJobs/AllGrantedJobs';
import AllJobBox from './Components/AllJobBox/AllJobBox';
import Navbar from './Components/NavBar/Navbar';
import LogIn from './Components/LogIn/LogIn';
// import SignUp from './Components/SignUp/SignUp';
import User from './Components/User/User';

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./Components/FireBaseConfig/firebase.config";

firebase.initializeApp(firebaseConfig);

export const AllJobsContext = createContext([]);
export const AllGrantedJobsContext = createContext([]);
export const SearchedItemContext = createContext([]);
export const UserContext = createContext([]);
export const AllUserContext = createContext([]);

function App() {
  
  const [user, setUser] = useState([
    null,
    null,
    null,
    null,
    null
  ]);
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5055/users')
    .then(res=>res.json())
    .then(data => {
      setAllUser(data);
    })
  }, [allUser]);

  const [allGrantedJobs, setAllGrantedJobs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5055/main-jobs')
    .then(res=>res.json())
    .then(data => {
      setAllGrantedJobs(data);
    })
  }, [allGrantedJobs]);

  const [allJobs, setAllJobs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5055/jobs')
    .then(res=>res.json())
    .then(data => {
      setAllJobs(data);
    })
  }, [allJobs]);

  const [searchedItem, setSearchedItem] = useState([]);

  return (
    <Router>
      <AllGrantedJobsContext.Provider value={[allGrantedJobs, setAllGrantedJobs]}>
        <AllJobsContext.Provider value={[allJobs, setAllJobs]}>
        <SearchedItemContext.Provider value={[searchedItem, setSearchedItem]}>
        <UserContext.Provider value={[user, setUser]}>
        <AllUserContext.Provider value={[allUser, setAllUser]}>
          <Navbar />
          <Switch>
            <Route path="/grantedPosts" component={AllGrantedJobs} />
            <Route path="/allPostedPosts" component={AllJobBox} />
            <Route path="/postByEmployee" component={AddingJobPost} />
            <Route path="/login" component={LogIn} />
            <Route path="/profile" component={User} />
            {/* <Route path="/signup" component={SignUp} /> */}
            <Route path="/" component={Homepage} />
          </Switch>
          </AllUserContext.Provider>
          </UserContext.Provider>
          </SearchedItemContext.Provider>
        </AllJobsContext.Provider>
      </AllGrantedJobsContext.Provider>
    </Router>
  );
}

export default App;
