import React , {useContext, useState, useEffect} from 'react';
import { SearchedItemContext } from '../../App';
import AllGrantedJobs from '../AllGrantedJobs/AllGrantedJobs';
import SearchedData from '../SearchedData/SearchedData';
import './Homepage.css';

const Homepage = () => {

    const searched_Item = useContext(SearchedItemContext)
    const [itemSearched , setItemSearched] = useState([]); 
    
    const setUpSearchedItem = () => {
        if(searched_Item[0].length > 0) {
            setItemSearched(searched_Item[0])
            alert("found "+ searched_Item[0].length + " matched posts")
        }
    }

    useEffect(()=> {
        setUpSearchedItem()
    }, [searched_Item[0]])

    return (
        <div>
            <div className="hemepage-body">
                {
                    searched_Item[0].length > 0 ?
                        <SearchedData />
                        :
                        <AllGrantedJobs  />
                }
            </div>
        </div>
    );
};

export default Homepage;