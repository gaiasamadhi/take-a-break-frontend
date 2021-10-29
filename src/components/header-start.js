import './header-start.css';
import { Link } from 'react-router-dom'

function HeaderStart() {
    return (
        <div className='header-wrapper'>
            <nav className='header-row'>
                <li className='header-row__team'>PEMM</li>
                <Link to="/step-one"><button className='header-row__button'>Take a break</button></Link>
            </nav>    
        </div>
    )

};

export default HeaderStart;