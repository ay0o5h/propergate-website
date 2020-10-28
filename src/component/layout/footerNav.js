import React from 'react';
import { Link } from 'react-router-dom';
import BookDemo from './bookDemo';
const FooterNavbar = () => {
    return (
       <div className="footer">
           <BookDemo/>
            <div className="container">
            <div className="row">
                <div className="col-sm-3">
                <Link className="navbar-brand" to="/">
                 <img src="logo.png"/>
                   PROPERGATE</Link>
                   <address>email:aya@propergate.co</address>
                   <address>phone :+48 792 337 152 </address>
                </div>
                <div className="col-sm-3">
                    <h5>our product</h5>
                    <Link className="footer-link" to="/product">product</Link>
                    <Link className="footer-link" to="/process">process</Link>
                </div>
                <div className="col-sm-3">
                <h5>servies</h5>
                    <Link  className="footer-link" to="/customers">customers</Link>
                    <Link  className="footer-link" to="/sustainbility">sustainbility</Link>
                </div>
                <div className="col-sm-3">
                <h5>company </h5>
                    <Link  className="footer-link" to="/about">about us</Link>
                    <Link  className="footer-link" to="/contact">contact us</Link>
                </div>
            </div>
        </div>
        <hr />
        <p className="text-center">  &copy; 2020 ProperGate, Inc. All rights reserved. </p>
       </div>
    )
}
export default FooterNavbar;