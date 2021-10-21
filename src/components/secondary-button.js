import './secondary-button.css';
import arrow from '../assets/Arrow-left.svg';

function SecondaryButton(props) {
    return (
       <>
            <button className='secondary-button'><img src={arrow} alt='Arrow back'/> {props.text}</button>
       </> 
    )
};

export default SecondaryButton;