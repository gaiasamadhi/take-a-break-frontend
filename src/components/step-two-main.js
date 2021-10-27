import progressBar from '../assets/Progress-bar-step-two.svg';
import saly from '../assets/Saly-greeting.png';
import PrimaryButton from './primary-button';
import SecondaryButton from './secondary-button';
import { Link } from 'react-router-dom';

import './step-two-main.css';


function StepTwoMain({activity, shortBreak, mediumBreak, longBreak }) {
    const randomActivity = activity[Math.floor(Math.random()*activity.length)]
    console.log(randomActivity._id)
    return (
        <div className='step-two-main-wrapper'>
            <div className='step-two-main-row'>
                <img className='step-two-main-row__image' src={progressBar} alt='Progress bar'/> 
            </div> 
            <div className='step-two-main-row'>
                <div className='step-two-main-row__content'>Next, do you want a <span className='step-two-main-row__content__underline'>random break activity</span> or a <span className='step-two-main-row__content__underline'>recommendation</span> based on answers to a short questionnaire?  </div>
            </div>
            <div className='step-two-main-row'>
                <div className='step-two-main-row__column'>
                    <Link to='/step-three'><PrimaryButton text='Recommended activity'/></Link>
                    <Link to={`/activity/${randomActivity._id}`}><PrimaryButton text='Random activity'/></Link>
                </div>
            </div>    
            <div className='step-two-main-row-image'>
                <Link to='/step-one'><SecondaryButton text='Back to previous question'/></Link>
                <div className='step-two-main-row-image-wrapper'>
                    <img className='step-two-main-row-image-wrapper__image'src={saly} alt='Calendar'/>
                </div>    
            </div>
        </div>        
    )
}

export default StepTwoMain;