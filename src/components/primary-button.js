import './primary-button.css';

function PrimaryButton(props) {
    return (
       <div>
            <button className='primary-button'>{props.text}</button>
       </div> 
    )
};

export default PrimaryButton;