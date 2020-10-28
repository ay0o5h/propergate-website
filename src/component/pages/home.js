import React from 'react';
import Delivery from './delivery';
import Slide from './slide';
import { Link } from 'react-router-dom';
import FooterNavbar from '../layout/footerNav';
const Home = () => {
  return (
    // start home
      <div className="home">
        {/* start header */}
        <div className="header">
          <h1>Smart material delivery for complex <br/>
          construction sites</h1>
          <Link type="button" to="/bookForm" className="btn btn-dark">book a demo</Link>
          <Link type="button" to="/product" className="btn btn-light">learn more</Link>
 
          <img className="pic1" src="./images/home/1.png"/>
          <img src="./images/home/2.png"/>
        </div> 
        <div className="icons">
        <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <img src="./images/home/8.png"/>
                <h5>Increase efficiency </h5>
                <p>Efficient projects cost less money and finish on time more often</p>
              </div>
              <div className="col-sm-4">
              <img src="./images/home/10.png"/>
                <h5>Reduce wastage </h5>
                <p>Track your materials properly to avoid theft and damage
                   , and so they’ll still be there when they’re needed.</p>
              </div>
              <div className="col-sm-4">
              <img src="./images/home/9.png"/>
                <h5>Improve safety </h5>
                <p>Safeguard the health and well-being of the people working on your site.</p>
              </div>
              </div>
              </div>
        </div>
        {/* end header */}
        {/* start Construction */}
        <div className="Construction">
          <h1>Construction is chaos </h1>
          <p> Chaos can be an amazing creative force, pulling gleaming new buildings up out of the dust.
         Chaos causes accidents, delays and wastage. It clouds projects in stress and frustration.
         It means you aren’t really in control. </p>
     <img src="./images/home/3.png"/>
        </div>
        {/* end Construction */}
        {/* start bring order */}
        <div className="bring-order">
          <h2 className="text-center">
          It’s time to bring order to your site and take <br/>
           control of your project 
          </h2>
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h3>
                We care about construction site deliveries and
                 the people who rely on them 
                </h3>
                <p>
                We know the pride and thrill of a gleaming new building. 
                We also know the frustration of trying to complete a project on time and to budget.
                </p>
                <span> 
                  <h5>We’re here to help.</h5>
                </span>
              </div>
              <div className="col-sm-6">
              <img src="./images/home/4.png"/>
              </div>
            </div>
            </div>
        </div>
        {/* end bring order */}
        {/* start logos1 */}
        <div className="logos1">
        <img src="./images/home/logos1.png"/>
        </div>
        {/* end logos1 */}
        {/* start ProperGate */}
        <div className="properGate">
          <h2 className="text-center">What is ProperGate? </h2>
          <p className="text-center p1">
          ProperGate is a smart delivery management system providing real-time
           information and control of materials on complex construction sites. 
          </p>
          {/* start container */}
          <div className="container">
             {/* start first row */}
             <div className="row">
               <div className="col-sm-6">
                 <h4>Track deliveries all the way down the Supply Chain </h4>
                 <p>
                 From supplier to subcontractor, you always know where your materials are, making 
                 routine wastage a thing of the past and reducing on-site accidents. 
                 </p>
               </div>
               <div className="col-sm-6">
               <img src="./images/home/5.png"/>
                 </div>
             </div>
          {/* end first row */}
           {/* start second row */}
           <div className="row">
               <div className="col-sm-6">
               <img src="./images/home/7.png"/>
               </div>
               <div className="col-sm-6">
               <h4>Optimise and control your on-site arrivals</h4>
                 <p>
                 Delivery vehicles arrive in fixed time slots to pre-assigned 
                 bays where unloading equipment is ready and waiting for them.
                 </p>
                 </div>
             </div>
          {/* end second row */}
           {/* start thisr row */}
           <div className="row">
               <div className="col-sm-6">
                 <h4>Take control with real-time data </h4>
                 <p>Intelligent reporting gives you the power to make decisions based on how things are right now. No more manual concrete pouring reports or monthly check of 10.000 delivery
                    notes with invoices, it is all available online with no effort.</p>
               </div>
               <div className="col-sm-6">
               <img src="./images/home/6.png"/>
                 </div>
             </div>
          {/* end third row */}
          </div>
         {/* end container */}
        </div>
        {/* end ProperGate */}
       {/* start  Delivery*/}
       <Delivery/>
       {/* end Delivery */}
       {/* start Sustainability */}
       <div className="Sustainability">
         <h2 className="text-center">
         Sustainability
         <img className="flower" src="./images/home/21.png" />
         </h2>
         <p className="text-center p1">
         Everyone benefits from sustainable construction - Municipal bodies fulfil their duty to their citizens, investors get their projects 
         certified and general contractors gain an enhanced reputation. 
         </p>
         <div className="container">
           <div className="row">
             <div className="col-sm-4">
             <img src="./images/home/22.png" />
               <h4>Reduced Pollution</h4>
               <p>
               When logistics are optimised, fewer journeys are needed, resulting in less CO2. And the CO2 that is produced is monitored,
                allowing for goal setting and measurable improvements.
               </p>
             </div>
             <div className="col-sm-4">
             <img src="./images/home/23.png" />
               <h4>Enhanced Waste Management</h4>
               <p>
               Waste segregation is facilitated, waste removal is automated, and damaged materials are repurposed where appropriate, 
               driving down costs and driving up recycling and reuse.
               </p>
             </div>
             <div className="col-sm-4">
             <img src="./images/home/24.png" />
               <h4>Improved Impact on Society</h4>
               <p>
               Traffic issues and noise pollution are both reduced, making things better for the local community. But improved handling and
                storage means that workers are better protected, too.
               </p>
             </div>
           </div>
           </div>
           <div className="learn-more">
             <div className="row">
               <div className="col-sm-9">
                 <h5>
                 <img src="./images/home/25.png" />
                   With ProperGate sustainable construction comes as standard</h5>
               </div>
               <div className="col-sm-3">
               <Link type="button" to="/sustainbility" className="btn btn-light">learn more</Link>
               </div>
             </div>
           </div>
       </div>
       {/* end Sustainability */}
       {/* start Built for construction */}
       <div className="built-for-construction">
       <div className="container">
         <div className="row">
           <div className="col-sm-6">
             <h3>Built for construction</h3>
             <ul>
               <li>
                 <h5>Highly visible in all conditions</h5>
                 <p>Whether it's sunny or dark, there's a screen mode to suit</p>
               </li>
               <li>
                 <h5>Multi-language support</h5>
                 <p>
                 The modern construction site employs people from all over
                  the world. Language isn't an issue with ProperGate.
                 </p>
               </li>
               <li>
                 <h5>Works on any device - mobile, tablet, laptop</h5>
                 <p>
                 People in different jobs use different devices. ProperGate adjusts automatically to suit. You can
                  even project live project dashboards onto wall-mounted screens.
                 </p>
               </li>
             </ul>
             <Link type="button" to="/bookForm" className="btn btn-light">book a demo</Link>
          <Link type="button" to="/product" className="btn btn-dark">learn more</Link>
           </div>
           <div className="col-sm-6">
           <img src="./images/home/26.png" />
           </div>
         </div>
         </div>
       </div>
       {/* end Built for construction */}
       {/* start work-with-us */}
       <div className="work-with-us">
       <div className="container">
         <div className="row">
           <div className="col-sm-6">
             <h3>How to work with us</h3>
             <p className="p1">It’s easy to get started with ProperGate,
              and it all starts when you book a demo. </p>
              <img src="./images/home/7.png" />
             </div>
             <div className="col-sm-6">
               {/* start first row */}
               <div className="row">
                 <div className="col-3">
                   <span>1</span>
                 </div>
                 <div className="col-9">                
                   <h5>Book a demo</h5>
                   <p>
                   You get to see a presentation that explains in detail how 
                   ProperGate works to solve the challenges
                    of construction logistics on complex projects like yours.
                   </p>
                 </div>
               </div>
               {/* end first row */}
                 {/* start second row */}
                 <div className="row">
                 <div className="col-3">
                   <span>2</span>
                 </div>
                 <div className="col-9">
                   <h5>Agreeing a deal</h5>
                   <p>
                   We discuss your construction project and propose an
                    implementation of ProperGate that is the perfect fit
                    for your needs and will deliver outstanding value.
                   </p>
                 </div>
               </div>
               {/* end second row */}
                 {/* start third row */}
                 <div className="row">
                 <div className="col-3">
                 <span >3</span>
                 </div>
                 <div className="col-9">
                   <h5>Training</h5>
                   <p>
                   We fully train your team in how to use the system, backed up
                    by online video tutorials, and provide ongoing comprehensive support.
                   </p>
                 </div>
               </div>
               {/* end third row */}
                 {/* start fourth row */}
                 <div className="row">
                 <div className="col-3">
                   <span>4</span>
                 </div>
                 <div className="col-9">
                   <h5>Implementation and integration</h5>
                   <p>
                   We configure the software so it accurately models your
                    site then help you integrate it
                    with your Business Intelligence software for powerful new insights.
                   </p>
                 </div>
               </div>
               {/* end fourth row */}
         <Link type="button" to="/bookForm" className="btn btn-dark">book a demo</Link>
          <Link type="button" to="/process" className="btn btn-light">learn more</Link>
             </div>
             </div>
             </div>
       </div>
       {/* end work-with-us */}
       {/* start choose us */}
       <div className="choose-us">
         <h3 className="text-center">Why choose us?</h3>
         <p className="text-center p1">There’s always room for improvement in construction logistics</p>
         <div className="container">
         <div className="row">
           <div className="col-sm-6">
             {/* start first row */}
             <div className="row">
             <div className="col-3">
             <img  className="imgs" src="./images/home/27.png" />
             </div>
             <div className="col-9">
               <h5>Award-winning software</h5>
               <p>
               Internationally renowned software as recognised by 
               government institutions, innovation groups and technical bodies
               </p>
             </div>
             </div>
             {/* end first row */}
             {/* start second row */}
           <div className="row">
           <div className="col-3">
             <img  className="imgs" src="./images/home/29.png" />
             </div>
             <div className="col-9">
               <h5>Great potential</h5>
               <p>Branded as a top-25 most promising ConTech startup 
                 by Cemex Ventures, Boston Consulting Group, BuiltWorld and PwC</p>
             </div>
           </div>
             {/* end second row */}
             {/* start third row */}
             <div className="row">
             <div className="col-3">
             <img  className="imgs" src="./images/home/28.png" />
             </div>
             <div className="col-9">
               <h5>The choice of market leaders</h5>
               <p>
               A recommended technology 
               provider for 3 of the top 10 General Contractors in Europe
               </p>
             </div>
             </div>
             {/* end third row */}
             {/* start fourth row */}
            <div className="row">
            <div className="col-3">
            <img className="imgs" src="./images/home/30.png" />
            </div>
             <div className="col-9">
               <h5>Sustainability &amp; safety</h5>
               <p>
               Supports reduction of CO2 emissions and improves safety on site
               </p>
             </div>
            </div>
             {/* end fourth row */}
             </div>
             <div className="col-sm-6">
               <Slide/>
             </div>
             </div>
             </div>
       </div>
       {/* end choose us */}
      <FooterNavbar/>
      </div>
      // end home
  )
}
export default Home;