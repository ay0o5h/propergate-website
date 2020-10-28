import React, { Component } from 'react';
import WhatProperGate from './whatProperGate';
import FooterNavbar from '../layout/footerNav';
import $ from 'jquery';
class Product extends Component {
    componentDidMount(){
      
        document.title='product';
        $('.product .WhatProperGate li ').click(function(){
            $(this).addClass('activeLi').siblings().removeClass('activeLi')
        })
    }
 render(){
  return ( 
      <div className="product">
          {/* start header */}
          <header>
              <h1>
              Bring order to the chaos of your <br/>
               complex construction projects
              </h1>
              <img src="./images/product/1.png"/>
          </header>
          {/* end header */}
          <WhatProperGate/>

          {/* start  benefits */}
          <div className=" benefits">
              <h2 className="text-center">What are your benefits? </h2>
              <p className="text-center">
                   By using our management system there’s always room for<br/>
               improvement in construction logistics. </p>
               {/* start container */}
               <div className="container">
                   {/* start first row */}
              <div className="row">
           <div className="col-sm-4">
               <div className="row">
                   <div className="col-3">
                   <img src="./images/product/2.png"/>
                   </div>
                   <div className="col-9">
                       <h5>Time saving</h5>
                       <p>
                       are precision scheduled and its condition monitored,
                        ensuring the longest possible window for installation
                       </p>
                   </div>
               </div>
           </div>
           <div className="col-sm-4">
               <div className="row">
                   <div className="col-3">
                   <img src="./images/product/5.png"/>
                   </div>
                   <div className="col-9">
                       <h5>Trafic optimization</h5>
                       <p>
                       monitored and segregated, and container levels digitally
                        monitored, meaning a big win for sustainability.
                       </p>
                   </div>
               </div>
           </div>
           <div className="col-sm-4">
               <div className="row">
                   <div className="col-3">
                   <img src="./images/product/6.png"/>
                   </div>
                   <div className="col-9">
                       <h5>Efective scheduling</h5>
                       <p>
                       is tracked from arrival through to departure, and its
                        condition monitored, minimising loss and damage.
                       </p>
                   </div>
               </div>
           </div>
           </div>
           {/* end first row */}
             {/* start second row */}
             <div className="row">
           <div className="col-sm-4">
               <div className="row">
                   <div className="col-3">
                   <img src="./images/product/3.png"/>
                   </div>
                   <div className="col-9">
                       <h5>Better comunication</h5>
                       <p>
                       in sequence, their on-site storage is tracked, 
                       and their installation is scheduled and monitored.
                       </p>
                   </div>
               </div>
           </div>
           <div className="col-sm-4">
               <div className="row">
                   <div className="col-3">
                   <img src="./images/product/4.png"/>
                   </div>
                   <div className="col-9">
                       <h5>Smart entry permits</h5>
                       <p>
                       elements arrive in sequence, their assembly 
                       is monitored and their movement tracked.
                       </p>
                   </div>
               </div>
           </div>
           <div className="col-sm-4">
               <div className="row">
                   <div className="col-3">
                   <img src="./images/product/7.png"/>
                   </div>
                   <div className="col-9">
                       <h5>Reall time reports</h5>
                       <p>
                       just-in-time, and are tagged and tracked with a high level
                        of granularityto specific building-in destinations.
                       </p>
                   </div>
               </div>
           </div>
           </div>
           {/* end second row */}
           </div>
           {/* end container */}
          </div>
          {/* end  benefits */}
          <FooterNavbar/>
      </div>
  )
 }
}
export default Product; 