import React, { Component } from 'react';
import {Link ,NavLink ,withRouter } from 'react-router-dom';
class  Navbar extends Component{
  render(){
  return (
    <div className="navbr">
      <nav className="navbar navbar-expand-lg navbar-light ">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <NavLink className="navbar-brand" to="/">
      <img src="logo.png"/>
      PROPERGATE</NavLink>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      {/* <li className="nav-item ">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li> */}
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">about us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/product" >product</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/process" >process</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/sustainbility" >sustainbility</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/customers" >customers</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact" >contact us</NavLink>
      </li>
      <form className="form-inline my-2 my-lg-0">
      <Link className="btn btn-dark pull-right" to="/bookForm">book a demo</Link>
    </form>
    </ul>
  </div>
  {this.props.children}
</nav>

    </div>
  );
    }
}
export default withRouter(Navbar);