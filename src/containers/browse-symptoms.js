import React, {useState, useEffect} from 'react';


const BrowseSymptomsContainer = () => {
    const [symptoms, updateSymptoms] = useState ([]);
    const [listSymptoms, setListSymptoms] = useState([]);
  
    const [fetchStatus, setFetchStatus] = useState('IDLE'); // STARTED, SUCCEED, FAILED
    const [errMessage, setErrMessage] = useState(null);
    
    
    useEffect(() => { 
        setFetchStatus('STARTED')
        fetch('https://recharge-backend1.herokuapp.com/symptoms') 
                .then(response => response.json())
                .then(data => {
                    setListSymptoms(data);
                    updateSymptoms(data);
                    setFetchStatus('SUCCEED');


                })
                .catch(err => {
                    setErrMessage(err.message);
                    setFetchStatus('FAILED');
                })
        setListSymptoms(symptoms.map((entry, idx) => [entry.name]));
        console.log('listSymptoms',listSymptoms)
   
               
        }, []);
        
        
        const renderSymptoms = () => {
            let tempOne =[]
            let tempTwo =[]
            let tempThree = []
            let tempFour = []
            let tempFive =[]
            let tempSix =[]
            const temp = symptoms.forEach((entry, idx) => {    
                    if(idx<3) {
                        tempOne.push(entry.name)
                    }
                    if(3<=idx<6) {
                        tempTwo.push(entry.name)
                    }
                    if(6<=idx<8) {
                        tempThree.push(entry.name)
                    }
                    if(8<=idx<10) {
                        tempFour.push(entry.name)
                    }
                    if(10<=idx<12) {
                        tempFive.push(entry.name)
                    }
                return tempOne.concat(tempTwo)     
                });
            console.log('tempOne', tempOne)
            console.log('tempTwo', tempTwo)
            console.log('temp',temp)  
            console.log('symptoms', symptoms) 
            return (
               temp.map((ele) => (
                <div className='browse-symptoms-main-row'>
                    {ele.map((entry,idx) => <div className='browse-symptoms-main-row__checkbox'><input className='browse-symptoms-main-row__input' type='checkbox' name={entry.name} value={entry} id={idx}></input><label className='browse-symptoms-main-row__label' for={entry}>{entry}</label></div>)}
                </div>    
               ))     
            )
        };
  return (
    <>     
        {renderSymptoms()}
    </>
  )
};

export default BrowseSymptomsContainer;