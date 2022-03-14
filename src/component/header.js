import React from 'react';
// import {Link} from 'react-router-dom';
import './header.css';

const Header = () => {
    return(
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <img src="/images/yehilogo.png"  alt="logo" className="d-inline-block align-text-top"/>
                    </a>
                    <form className="d-flex">
                        <button id="help" className="btn btn-outline-primary" type="submit">How Can we Help</button>
                        <button id="login" className="btn btn-outline-primary" type="submit">Log In</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Header;