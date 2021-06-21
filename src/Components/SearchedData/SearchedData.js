import React, { useContext, useEffect, useState } from 'react';
import { SearchedItemContext } from '../../App';
import Card from '../Card/Card';
import './SearchedData.css'

const SearchedData = () => {
    const searched_Item = useContext(SearchedItemContext)

    const [itemSearched , setItemSearched] = useState([]); 
    const setUpSearchedItem = () => {
        if(searched_Item[0].length > 0) {
            setItemSearched(searched_Item[0])
        }
    }

    const resetAll = () => {
        searched_Item[1]([]);

    }

    useEffect(()=> {
        setUpSearchedItem()
    }, [searched_Item[0]])
    return (
        <div className="diV">
            <button onClick={() =>resetAll()}>Clear Search</button>
            <div className='mainDiv'>
                {
                    itemSearched.map(item =>{
                        return(
                            <Card data={[item.post , 'not admin', item._id]} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default SearchedData;