import React , {useContext , useEffect, useState} from 'react';
import './AllJobBox.css';

import Card from '../Card/Card';
import { AllJobsContext } from '../../App';

const AllJobBox = () => {

    const AllJobs = useContext(AllJobsContext);

    if(AllJobs[0].length>0) {
        console.log(AllJobs[0][0].post.name)
    }
    const [howManyCardsInOnePage , setHowManyCardsInOnePage] = useState(3);
    const [newArray, setNewArray] = useState(AllJobs[0]);
    const [Array , setArray] = useState(AllJobs[0]);
    const [totalPages,setTotalPages] = useState(Math.ceil((AllJobs[0].length)/howManyCardsInOnePage))

    useEffect(() =>{
        setNewArray(AllJobs[0])
    }, [newArray])
    useEffect(() =>{
        setTotalPages((Math.ceil((AllJobs[0].length)/howManyCardsInOnePage)))
    },[totalPages])

    
    let pageNumber = 1

    const setCards = (pageNo) => {
        console.log(pageNo)
        if (isNaN(pageNo)) {

        } else if(pageNo < 1) {
            pageNumber = 1;
            document.getElementById('input-page-no').value = 1;
        } else if (pageNo > totalPages) {
            pageNumber = totalPages;
            document.getElementById('input-page-no').value = totalPages;
        } else {
            pageNumber = (pageNo);
            console.log('in')
            document.getElementById('input-page-no').value = pageNo;
        }
        var arr = [];
        for(let i=0; i<howManyCardsInOnePage; i++) {
            arr.push(AllJobs[0][((pageNumber-1)*howManyCardsInOnePage) + i])
        }
        setArray(arr)
    }

    // const setCardPerPage = (cardsCount) => {
    //     if(isNaN(cardsCount)) {

    //     } else if(cardsCount<1) {
    //         setHowManyCardsInOnePage(1);
    //         document.getElementById('input-card-per-page').value = 1;
    //     } else {
    //         setHowManyCardsInOnePage(cardsCount);
    //         document.getElementById('input-card-per-page').value = cardsCount;
    //     }

    //     setTotalPages(Math.ceil((AllJobs[0].length)/howManyCardsInOnePage))
    //     setCards(pageNumber)
    // }

    // useMemo(() =>{
    //     Array = AllJobs[0]
    // },[Array[0]])

    // setCards(pageNumber)

    return (
        <div className="all-job-box-main-div">
            <div className="all-job-boxes">
                {
                    <div> 
                    useEffect(()=>{
                        AllJobs[0].map(job => {
                            return (

                                <div className="div">
                                    {/* <Card data={[job.post, 'admin']} /> */}
                                    <p>{job.post.name}</p>
                                </div>
                            )
                        })
                    })
                    </div>
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
            {/* <div className="card-per-page">
                <span className="heading-for-cards-per-page">Jobs per page</span>
                <input type="number" id="input-card-per-page" placeholder={howManyCardsInOnePage.toString()} onChange={e => setCardPerPage(parseInt(e.target.value))}/>
            </div> */}
        </div>
    );
};

export default AllJobBox;