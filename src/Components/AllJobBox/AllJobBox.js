import React , {useContext , useEffect, useState} from 'react';
import './AllJobBox.css';

import image from '../Images/dummy-person.svg';
import Card from '../Card/Card';
import { AllJobsContext } from '../../App';

const AllJobBox = () => {

    const allJobs = useContext(AllJobsContext);
    let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68];
    let oneCard = [image , "Front End Junior Web Developer", "Internship", "This is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the descriptionThis is the description", 1500.00, "1 years Experience", "Remote", ["Add","Remove"]];
    const [howManyCardsInOnePage , setHowManyCardsInOnePage] = useState(20);
    let newArray = array;
    const [totalPages , setTotalPages] = useState(Math.ceil((array.length)/howManyCardsInOnePage))
    const [pageNumber , setPageNumber] = useState(1)

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
        newArray = array;
        newArray = newArray.slice(((pageNumber-1)*howManyCardsInOnePage) , (pageNumber*howManyCardsInOnePage));
        allJobs[1](newArray)
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

        setTotalPages(Math.ceil((array.length)/howManyCardsInOnePage))
        setCards(pageNumber)
    }

    useEffect(() =>{
        allJobs[1](array)
        newArray = allJobs[0]
        setCards(pageNumber)
        setTotalPages(Math.ceil((array.length)/howManyCardsInOnePage))
        document.getElementById('input-card-per-page').value = howManyCardsInOnePage
    }, [pageNumber,howManyCardsInOnePage])

    return (
        <div className="all-job-box-main-div">
            <div className="all-job-boxes">
                {
                    allJobs[0].map(item => {
                        return(
                            <div className="div">
                                <p>{item}</p>
                                <Card data={oneCard} />
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