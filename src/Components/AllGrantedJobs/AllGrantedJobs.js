import React , {useContext, useEffect, useState} from 'react';
import './AllGrantedJobs.css';
import Card from '../Card/Card';
import { AllGrantedJobsContext } from '../../App';

const AllGrantedJobs = () => {

    const allMainJobs = useContext(AllGrantedJobsContext);
    // console.log(allMainJobs[0].length)
        
    const [howManyCardsInOnePages , setHowManyCardsInOnePages] = useState(20);
    const [newArrays, setNewArrays] = useState(allMainJobs[0]);
    const [totalPagess , setTotalPagess] = useState(Math.ceil((allMainJobs[0].length)/howManyCardsInOnePages))
    const [pageNumbers , setPageNumbers] = useState(1)

    const settingTotalPages = () => {
        if(allMainJobs[0].length > 0) {
            setTotalPagess(Math.ceil((allMainJobs[0].length)/howManyCardsInOnePages))
        }        
    }

    const settingNewArrays = () => {
            setNewArrays(allMainJobs[0])
            const arrs = allMainJobs[0]
            setNewArrays(arrs.slice(((pageNumbers-1)*howManyCardsInOnePages) , (pageNumbers*howManyCardsInOnePages)))
    }

    const setCardss = (pageNo) => {
        if (isNaN(pageNo)) {

        } else if(pageNo < 1) {
            setPageNumbers(1);
            document.getElementById('allowed-input-page-no').value = 1;
        } else if (pageNo > totalPagess) {
            setPageNumbers(totalPagess);
            document.getElementById('allowed-input-page-no').value = totalPagess;
        } else {
            setPageNumbers(pageNo);
            document.getElementById('allowed-input-page-no').value = pageNo;
        }
        if(allMainJobs[0].length > 0) {
            settingNewArrays()   
        }     
    }

    

    const setCardPerPages = (cardsCount) => {
        if(isNaN(cardsCount)) {

        } else if(cardsCount<1) {
            setHowManyCardsInOnePages(1);
            document.getElementById('allowed-input-card-per-page').value = 1;
        } else {
            setHowManyCardsInOnePages(cardsCount);
            document.getElementById('allowed-input-card-per-page').value = cardsCount;
        }
        settingTotalPages()
        setCardss(pageNumbers)
    }

    useEffect(()=> {
        settingNewArrays()
    }, [allMainJobs[0]])

    useEffect(()=>{
        if(pageNumbers>=totalPagess){
            setCardss(pageNumbers)
        }
    }, [pageNumbers])

    useEffect(() =>{
        settingNewArrays()
        setCardss(pageNumbers)
        settingTotalPages()
        settingNewArrays()
        document.getElementById('allowed-input-card-per-page').value = howManyCardsInOnePages
    }, [pageNumbers,howManyCardsInOnePages,allMainJobs[0]])

    return (
        <div className="allowed-1all-job-box-main-div">
            <h2>All Jobs Granted By Admin</h2>
            <div className="allowed-1all-job-boxes">
                {
                    newArrays.length >0 &&
                        newArrays.map(item => {
                            return(
                                <div className="allowed-1div">
                                    {
                                        item.post !== undefined &&
                                                <Card data={[item.post , 'admin']} />
                                    }                                    
                                </div>
                            )
                        })
                }
            </div>
            <div className="allowed-1underline" />
            <div className="allowed-1pagination">
                <span className="allowed-1page-action-switches" id="allowed-got-to-first-page" onClick={() => setCardss(1)}>&#8810;</span>
                <span className="allowed-1page-action-switches" id="allowed-got-one-page-back" onClick={() => setCardss(pageNumbers-1)}>&#60;</span>
                <div className="allowed-1pages">
                    <input type="number" id="allowed-input-page-no" placeholder={pageNumbers.toString()} onChange={e => setCardss(parseInt(e.target.value))}/>
                    <span>/ {totalPagess}</span>
                </div>
                <span className="allowed-1page-action-switches" id="allowed-got-one-page-forward" onClick={() => setCardss(pageNumbers+1)}>&#62;</span>
                <span className="allowed-1page-action-switches" id="allowed-got-to-last-page" onClick={() => setCardss(totalPagess)}>&#8811;</span>
            </div>
            <div className="allowed-1card-per-page">
                <span className="allowed-1heading-for-cards-per-page">Jobs per page</span>
                <input type="number" id="allowed-input-card-per-page" placeholder={howManyCardsInOnePages.toString()} onChange={e => setCardPerPages(parseInt(e.target.value))}/>
            </div>
        </div>
    );
};

export default AllGrantedJobs;