import progressBar from '../assets/Progress-bar-step-three.svg';
import walk from '../assets/Photo-four.png';
import PrimaryButton from './primary-button';
import SecondaryButton from './secondary-button';
import { Link } from 'react-router-dom';

import './step-three-main.css';


function StepThreeMain({activity}) {
    console.log(activity)
    return (
        <div className='step-three-main-wrapper'>
            <div className='step-three-main-row'>
                <img className='step-three-main-row__image' src={progressBar} alt='Progress bar'/> 
            </div> 
            <div className='step-three-main-row'>
                <div className='step-three-main-row__content'><p style={{textAlign:"center"}}>Do you want a break recommendation based on a <u>goal</u> or your <u>preferences</u>?</p></div>
            </div>
            <div className='step-three-main-row'>
                <div className='step-three-main-row__column'>
                    <Link to='/step-four/symptoms'><PrimaryButton text='Based on goal'/></Link>
                    <Link to='/step-four/preferences'><PrimaryButton text='Based on preferences'/></Link>
                </div>
            </div>
            <div className='step-three-main-row-custom'>
                <Link to='/step-two'><SecondaryButton text='Back to previous question'/></Link>
                {/* <div className='step-three-main-row-custom-wrapper'>
                    <img className='step-three-main-row-custom-wrapper__image'src={walk} alt='Person walking'/>
                </div>     */}
            </div>
        </div>        
    )
}

export default StepThreeMain;