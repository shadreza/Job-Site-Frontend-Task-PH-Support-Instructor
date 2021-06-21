import React , {createContext , useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './Components/HomePage/Homepage';
import AddingJobPost from './Components/AddingJobPost/AddingJobPost';
import AllGrantedJobs from './Components/AllGrantedJobs/AllGrantedJobs';
import AllJobBox from './Components/AllJobBox/AllJobBox';
import Navbar from './Components/NavBar/Navbar';

export const AllJobsContext = createContext([]);
export const AllGrantedJobsContext = createContext([]);

function App() {
  
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

  return (
    <Router>
      <Navbar />
      <AllGrantedJobsContext.Provider value={[allGrantedJobs, setAllGrantedJobs]}>
        <AllJobsContext.Provider value={[allJobs, setAllJobs]}>
          <Switch>
            <Route path="/grantedPosts" component={AllGrantedJobs} />
            <Route path="/allPostedPosts" component={AllJobBox} />
            <Route path="/postByEmployee" component={AddingJobPost} />
            <Route path="/" component={Homepage} />
          </Switch>
        </AllJobsContext.Provider>
      </AllGrantedJobsContext.Provider>
    </Router>
  );
}

export default App;
