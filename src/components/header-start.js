import './header-start.css';
import logo from '../assets/logo6.png'
import { Link } from 'react-router-dom'

function HeaderStart() {
    return (
        <div className='header-wrapper'>
            <nav className='header-row'>
                <div>
                <img src={logo} className="logo"/><li className='header-row__team'>Recharge</li>
                </div>
                <Link to="/step-one"><button className='header-row__button'>Take a break</button></Link>
            </nav>    
        </div>
    )

};

export default HeaderStart;