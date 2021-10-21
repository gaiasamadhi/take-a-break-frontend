import progressBar from '../assets/Progress-bar-step-three.svg';
import walk from '../assets/Photo-four.png';
import PrimaryButton from './primary-button';
import SecondaryButton from './secondary-button';
import { Link } from 'react-router-dom';

import './step-three-main.css';


function StepThreeMain() {
    return (
        <div className='step-three-main-wrapper'>
            <div className='step-three-main-row'>
                <img className='step-three-main-row__image' src={progressBar} alt='Progress bar'/> 
            </div> 
            <div className='step-three-main-row'>
                <div className='step-three-main-row__content'>Do you want a break recommendation based on your <span className='step-three-main-row__content__underline'>preferences</span> or <span className='step-three-main-row__content__underline'>current symptoms</span> you might be experiencing?</div>
            </div>
            <div className='step-three-main-row'>
                <div className='step-three-main-row__column'>
                    <Link to='/step-four/preferences'><PrimaryButton text='Based on preferences'/></Link>
                    <Link to='/step-four/symptoms'><PrimaryButton text='Based on symptoms'/></Link>
                </div>
            </div>
            <div className='step-three-main-row-custom'>
                <Link to='/step-two'><SecondaryButton text='Back to previous question'/></Link>
                <div className='step-three-main-row-custom-wrapper'>
                    <img className='step-three-main-row-custom-wrapper__image'src={walk} alt='Person walking'/>
                </div>    
            </div>
        </div>        
    )
}

export default StepThreeMain;