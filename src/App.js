import React , {createContext , useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './Components/HomePage/Homepage';

export const AllJobsContext = createContext([]);

function App() {

  const [allJobs, setAllJobs] = useState([]);

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
