import './header-restart.css';
import { Link } from 'react-router-dom';


function HeaderRestart() {
    return (
        <div className='header-restart-wrapper'>
            <nav className='header-restart-row'>
                <li className='header-restart-row__team'>PEMM</li>
                {/* <Link to='/'><button className='header-restart-row__button'>Restart break</button></Link> */}
            </nav>    
        </div>
    )

};

export default HeaderRestart;