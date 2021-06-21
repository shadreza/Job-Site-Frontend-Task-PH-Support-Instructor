import React , {createContext , useState , useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './Components/HomePage/Homepage';

export const AllJobsContext = createContext();

function App() {

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
      <AllJobsContext.Provider value={[allJobs, setAllJobs]}>
        <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
      </AllJobsContext.Provider>
    </Router>
  );
}

export default App;
