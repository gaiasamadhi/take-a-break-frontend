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
        }, []);

  return (
    <div className='browse-symptoms-main-row'>      
        {symptoms.map((entry, idx) => <div className='browse-symptoms-main-row__checkbox'><input className='browse-symptoms-main-row__input' type='checkbox' name={entry.name} value={entry._id} id={entry.name}></input><label className='browse-symptoms-main-row__label' for={entry.name}>{entry.name}</label></div>)}
    </div>
  )
};

export default BrowseSymptomsContainer;