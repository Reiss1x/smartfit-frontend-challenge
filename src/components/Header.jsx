import React from 'react'
import SmartLogo from "../_material/images/logo.svg"

const Header = () => {
    return (
        <div className='header'>
            <img src={SmartLogo} alt="Logo" className='smart-logo' />
        </div>
    );
};  export default Header;