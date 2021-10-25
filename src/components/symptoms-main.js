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
            <div className='symptoms-main-row-checkbox'>
                <input className='browse-symptoms-main-row__input' type='checkbox' name='Tiredness' value='Tiredness' id='0'></input>
                <label className='browse-symptoms-main-row__label' for='0'>Tiredness or lack of energy</label>
                <input className='browse-symptoms-main-row__input' type='checkbox' name='Irregular' value='Irregular' id='1'></input>
                <label className='browse-symptoms-main-row__label' for='1'>Irregular sleep</label>
                <input className='browse-symptoms-main-row__input' type='checkbox' name='Join or muscular pain' value='Join or muscular pain' id='2'></input>
                <label className='browse-symptoms-main-row__label' for='2'>Join or muscular pain</label>
            </div>
            <div className='symptoms-main-row-checkbox'>
                <input className='browse-symptoms-main-row__input' type='checkbox' name='Depression' value='Depression' id='3'></input>
                <label className='browse-symptoms-main-row__label' for='3'>Depression or sadness</label>
                <input className='browse-symptoms-main-row__input' type='checkbox' name='Change' value='Change' id='4'></input>
                <label className='browse-symptoms-main-row__label' for='4'>Change in appetite</label>
                <input className='browse-symptoms-main-row__input' type='checkbox' name='Sore or aching muscles' value='Sore or aching muscles' id='5'></input>
                <label className='browse-symptoms-main-row__label' for='5'>Sore or aching muscles</label>
            </div>
            <div className='symptoms-main-row-checkbox'>
                <input className='browse-symptoms-main-row__input' type='checkbox' name='Decreased' value='Decreased' id='6'></input>
                <label className='browse-symptoms-main-row__label' for='6'>Decreased productivity</label>
                <input className='browse-symptoms-main-row__input' type='checkbox' name='Teary' value='Teary' id='7'></input>
                <label className='browse-symptoms-main-row__label' for='7'>Teary eyes</label>
                <input className='browse-symptoms-main-row__input' type='checkbox' name='Headache or migrane' value='Headache or migrane' id='8'></input>
                <label className='browse-symptoms-main-row__label' for='8'>Headache or migrane</label>
            </div>
            <div className='symptoms-main-row-checkbox'>
                <input className='browse-symptoms-main-row__input' type='checkbox' name='Apaty' value='Apaty' id='9'></input>
                <label className='browse-symptoms-main-row__label' for='9'>Apaty</label>
                <input className='browse-symptoms-main-row__input' type='checkbox' name='Inability' value='Inability' id='10'></input>
                <label className='browse-symptoms-main-row__label' for='10'>Inability to focus</label>
                <input className='browse-symptoms-main-row__input' type='checkbox' name='Upset stomach or nausea' value='Upset stomach or nausea' id='11'></input>
                <label className='browse-symptoms-main-row__label' for='11'>Upset stomach or nausea</label>
            </div>
            <div className='symptoms-main-row-checkbox'>
                <input className='browse-symptoms-main-row__input' type='checkbox' name='No fear' value='No fear' id='12'></input>
                <label className='browse-symptoms-main-row__label' for='12'>No fear</label>
                <input className='browse-symptoms-main-row__input' type='checkbox' name='Mood swings' value='Mood swings' id='13'></input>
                <label className='browse-symptoms-main-row__label' for='13'>Mood swings</label>
                <input className='browse-symptoms-main-row__input' type='checkbox' name='Lower backpain or ache' value='Lower backpain or ache' id='14'></input>
                <label className='browse-symptoms-main-row__label' for='14'>Lower backpain or ache</label>
            </div>
            
            <div className='symptoms-main-row-custom'>
                <Link to='/step-three'><SecondaryButton text='Back to previous question'/></Link>
                <PrimaryButton text='Confirm symptom'/>
                <div className='symptoms-main-row-custom-wrapper'>
                    <img className='symptoms-main-row-custom-wrapper__image' src={paper} alt='Paper'/>
                </div>    
            </div>

        </div>        
    )
}

export default SymptomsMain;