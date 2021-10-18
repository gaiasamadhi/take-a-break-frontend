import './header-light.css';
import HeaderButton from './header-button';

function HeaderLight() {
    
    return (
        <div className='header-wrapper'>
            <nav className='header-row'>
                <li className='header-team'>PEMM</li>
                <HeaderButton className='header-button'/>
            </nav>    
        </div>
    )

};

export default HeaderLight;