import progressBar from '../assets/Progress-bar.svg';
import photo from '../assets/Photo-two.png';
import calendar from '../assets/Saly.png';
import './step-one-main.css';

function StepOneMain({handleBreakDuration1, handleBreakDuration2, handleBreakDuration3}) {

    return (
        <div className='step-one-main-wrapper'>
            <div className='step-one-main-row'>
                <img className='step-one-main-row__image' src={progressBar} alt='Progress bar'/> 
            </div> 
            <div className='step-one-main-row'>
                <div className='step-one-main-row__content'>First, how <span className='step-one-main-row__content__underline'>long</span> do you have for your break? </div>
            </div>
            <div className='step-one-main-row'>
                <div className='step-one-main-row-wrapper'>
                    <img className='step-one-main-row-wrapper__image__one' src={photo} alt='Person walking'/>
                </div>    
                <div className='step-one-main-row-wrapper'>
                    <button onClick={handleBreakDuration1} className="primary-button" text='0 - 5 minutes' > 0 - 5 minutes</button>
                    <button onClick={handleBreakDuration2} className="primary-button" text='5 - 15 minutes'> 5 - 15 minutes </button>
                    <button onClick={handleBreakDuration3} className="primary-button" text='15 - 30 minutes'> 15 - 30 minutes</button> 
                </div>
                <div className='step-one-main-row-wrapper'>
                    <img className='step-one-main-row-wrapper__image__two' src={calendar} alt='Calendar'/>
                </div>
            </div>
        </div>        
    )
}

export default StepOneMain;