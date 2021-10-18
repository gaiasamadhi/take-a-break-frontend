import PrimaryButton from "./primary-button";
import './start-main.css';
import read from '../assets/Photo-one.png';

function StartMain() {
    return (
        <div className='main-wrapper'>
            <div className='main-row'>
                <div className='main-row__header'>Take a break & bounce back</div>
            </div>
            <div className='main-row'>
                <div className='main-row__content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div className='main-row'>
                <PrimaryButton className='main-row__button'></PrimaryButton>
            </div>
            <div className='main-row-image'>
                <div className='main-row-image'>
                    <img src={read} alt='Person reading'/>
                </div>
            </div>
        </div>
    )
};

export default StartMain;