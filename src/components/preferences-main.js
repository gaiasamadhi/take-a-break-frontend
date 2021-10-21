import progressBar from '../assets/Progress-bar-preferences.svg';
import fingers from '../assets/Saly-hands.png';
import PrimaryButton from './primary-button';
import SecondaryButton from './secondary-button';
import { Link } from 'react-router-dom';

import './preferences-main.css';


function PreferencesMain() {
    return (
        <div className='preferences-main-wrapper'>
            <div className='preferences-main-row'>
                <img className='preferences-main-wrapper__image' src={progressBar} alt='Progress bar'/> 
            </div> 
            <div className='preferences-main-row'>
                <div className='preferences-main-row__content'>Choose a side for each prompt</div>
            </div>
            <div className='preferences-main-row'>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
            <div className='preferences-main-row'>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
            <div className='preferences-main-row'>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
            <div className='preferences-main-row'>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
            <div className='preferences-main-row'>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
            <div className='preferences-main-row'>
                <Link to='/step-three'><SecondaryButton text='Back to previous question'/></Link>
                <PrimaryButton text='Confirm symptom'/>
                <img src={fingers} alt='Fingers touching each other'/>
            </div>
        </div>        
    )
}

export default PreferencesMain;