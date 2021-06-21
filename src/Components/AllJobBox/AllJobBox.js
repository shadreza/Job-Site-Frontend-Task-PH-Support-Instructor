import React , {useContext, useEffect, useState} from 'react';
import Card from '../Card/Card';
import { AllJobsContext } from '../../App';
import './AllJobBox.css'

const AllJobBox = () => {

    const allJobs = useContext(AllJobsContext);
        
    const [howManyCardsInOnePage , setHowManyCardsInOnePage] = useState(20);
    const [newArray, setNewArray] = useState(allJobs[0]);
    const [totalPages , setTotalPages] = useState(Math.ceil((allJobs[0].length)/howManyCardsInOnePage))
    const [pageNumber , setPageNumber] = useState(1)

    const settingTotalPage = () => {
        if(allJobs[0].length > 0) {
            setTotalPages(Math.ceil((allJobs[0].length)/howManyCardsInOnePage))
        }        
    }

    const settingNewArray = () => {
            setNewArray(allJobs[0])
            const arr = allJobs[0]
            setNewArray(arr.slice(((pageNumber-1)*howManyCardsInOnePage) , (pageNumber*howManyCardsInOnePage)))
    }

    const setCards = (pageNo) => {
        if (isNaN(pageNo)) {

        } else if(pageNo < 1) {
            setPageNumber(1);
            document.getElementById('input-page-no').value = 1;
        } else if (pageNo > totalPages) {
            setPageNumber(totalPages);
            document.getElementById('input-page-no').value = totalPages;
        } else {
            setPageNumber(pageNo);
            document.getElementById('input-page-no').value = pageNo;
        }
        if(allJobs[0].length > 0) {
            settingNewArray()   
        }     
    }

    

    const setCardPerPage = (cardsCount) => {
        if(isNaN(cardsCount)) {

        } else if(cardsCount<1) {
            setHowManyCardsInOnePage(1);
            document.getElementById('input-card-per-page').value = 1;
        } else {
            setHowManyCardsInOnePage(cardsCount);
            document.getElementById('input-card-per-page').value = cardsCount;
        }
        settingTotalPage()
        setCards(pageNumber)
    }

    useEffect(()=> {
        settingNewArray()
    }, [allJobs[0]])

    useEffect(()=>{
        if(pageNumber>=totalPages){
            setCards(pageNumber)
        }
    }, [pageNumber])

    useEffect(() =>{
        settingNewArray()
        setCards(pageNumber)
        settingTotalPage()
        settingNewArray()
        document.getElementById('input-card-per-page').value = howManyCardsInOnePage
    }, [pageNumber,howManyCardsInOnePage,allJobs[0]])

    return (
        <div className="all-job-box-main-div">
            <h2>All Jobs Posted By Employees</h2>
            <div className="all-job-boxes">
                {
                    newArray.length >0 &&
                        newArray.map(item => {
                            return(
                                <div className="div">
                                    {
                                        item.post !== undefined &&
                                            <Card data={[item.post , 'not admin', item._id]} />
                                    }                                    
                                </div>
                            )
                        })
                }
            </div>
            <div className="underline" />
            <div className="pagination">
                <span className="page-action-switches" id="got-to-first-page" onClick={() => setCards(1)}>&#8810;</span>
                <span className="page-action-switches" id="got-one-page-back" onClick={() => setCards(pageNumber-1)}>&#60;</span>
                <div className="pages">
                    <input type="number" id="input-page-no" placeholder={pageNumber.toString()} onChange={e => setCards(parseInt(e.target.value))}/>
                    <span>/ {totalPages}</span>
                </div>
                <span className="page-action-switches" id="got-one-page-forward" onClick={() => setCards(pageNumber+1)}>&#62;</span>
                <span className="page-action-switches" id="got-to-last-page" onClick={() => setCards(totalPages)}>&#8811;</span>
            </div>
            <div className="card-per-page">
                <span className="heading-for-cards-per-page">Jobs per page</span>
                <input type="number" id="input-card-per-page" placeholder={howManyCardsInOnePage.toString()} onChange={e => setCardPerPage(parseInt(e.target.value))}/>
            </div>
        </div>
    );
};

export default AllJobBox;