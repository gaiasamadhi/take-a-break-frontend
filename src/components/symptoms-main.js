import progressBar from '../assets/Progress-bar-step-four.svg';
import paper from '../assets/Saly-saly.png';
import BrowseSymptomsContainer from '../containers/browse-symptoms';
import PrimaryButton from './primary-button';
import SecondaryButton from './secondary-button';
import { Link } from 'react-router-dom';

import './symptoms-main.css';


function SymptomsMain() {
    return (
        <div className='symptoms-main-wrapper'>
            <div className='symptoms-main-row'>
                <img className='symptoms-main-wrapper__image' src={progressBar} alt='Progress bar'/> 
            </div> 
            <div className='symptoms-main-row'>
                <div className='symptoms-main-row__content'>Select <span className='symptoms-main-row__content__underline'>one</span> symptom you are currently experiencing:</div>
            </div>
            <div className='symptoms-main-row'>
                <BrowseSymptomsContainer/>
            </div>
            <div className='symptoms-main-row'>
                <PrimaryButton text='Confirm symptom'/>
            </div>
            <div className='symptoms-main-row-custom'>
                <Link to='/step-three'><SecondaryButton text='Back to previous question'/></Link>
                <div className='symptoms-main-row-custom-wrapper'>
                    <img className='symptoms-main-row-custom-wrapper__image' src={paper} alt='Paper'/>
                </div>    
            </div>

        </div>        
    )
}

export default SymptomsMain;