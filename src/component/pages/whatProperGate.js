import React from 'react';

const WhatProperGate = () => {
  return ( 
      <div className="WhatProperGate">
          <h2 className="text-center">What is ProperGate? </h2>
          <p className="text-center p1">
    ProperGate is a smart delivery management system providing real-time information<br/>
           and control of materials on complex construction sites. </p>
              {/* start container */}
              <div className="container">
                  <ul>
                      {/* start first  Book & schedule delivery */}
                      <li className="activeLi"> 
                       <h4> 
                           <span className="num" >1</span>
                            Book &amp; schedule delivery
                       </h4>
                       {/* start content */}
                       <div className="content">
                           {/* start row */}
                       <div className="row">
                   <div className="col-sm-6">
               <p> 
              The subcontractor needs some materials to do 
              their work, so they order them from a supplier 
              and update the system. The logistics coordinator 
              is notified of the order - they book a time slot and 
               an unloading bay, and assign the relevant unloading 
                 crew and equipment
                 </p>
         <div className="note">
        <h5>
            <i className="fa fa-male fa-1.5x"></i>
            Subcontractor 
            </h5>
        <i className="fa fa-mobile fa-2x"></i>
       <span>Orders for required materials sent</span>
         </div>
         <div className="note">
        <h5>
            <i className="fa fa-car fa-1.5x"></i>
        Logistics coordinator  
        </h5>
        <i className="fa fa-mobile fa-2x"></i>
       <span>Delivery will arrive tomorrow at 11:30</span>
         </div>
               </div>
               <div className="col-sm-6">
                   <img src="./images/product/8.png"/>
                   </div>
               </div>
               {/* end row */}
            </div>
            {/* end content */}
                   </li>
            {/* end first  Book & schedule delivery */}
            {/* start  Logistics coordinator*/}
                   <li> 
                       <h4> 
                           <span className="num" >2</span>
                           Logistics coordinator
                       </h4>
                       {/* start content  */}
                       <div className="content">
                           {/* start row */}
                       <div className="row">
                      <div className="col-sm-6">
               <p> 
        The supplier's driver receives instructions 
       including which gate to enter by and at what time.
      This eliminates the need for multiple phone calls
       and allows the supplier to optimise their human and vehicular resources. 
       </p>
            <div className="note">
           <h5>
            <i className="fa fa-male fa-1.5x"></i>
            Supplier’s driver 
            </h5>
        <i className="fa fa-mobile fa-2x"></i>
       <span>Orders for required materials sent</span>
         </div>
         <div className="note">
        <h5>
            <i className="fa fa-car fa-1.5x"></i>
        Logistics coordinator  
        </h5>
        <i className="fa fa-mobile fa-2x"></i>
       <span>Delivery will arrive tomorrow at 11:30</span>
         </div>
             </div>
               <div className="col-sm-6">
                   <img src="./images/product/9.png"/>
                   </div>
               </div>
               {/* end row */}
                       </div>
                       {/* end content */}
                   </li>
                   {/* end Logistics coordinator */}
                   {/* start  Transport check-in */}
                   <li>
                       <h4>
                       <span className="num" >3</span> 
                       Transport check-in
                       </h4>
                       {/* start content */}
                       <div className="content">
                           {/* start row */}
                           <div className="row">
                               <div className="col-sm-6">
                                   <p>
                                  The supplier’s driver arrives at the
                                   designated time with the materials.
                                    The gatekeeper or security guard 
                                    scans the arrival and allows it onsite,
                                     before the traffic marshal guides it to 
                                     the right bay. 
                                   </p>
                 <div className="note">
              <h5>
            <i className="fa fa-male fa-1.5x"></i>
            Supplier’s driver 
            </h5>
        <i className="fa fa-mobile fa-2x"></i>
       <span>Arrive at 11:30 gate A </span>
         </div>
         <div className="note">
        <h5>
            <i className="fa fa-car fa-1.5x"></i>
            Sequrity guard  
        </h5>
        <i className="fa fa-mobile fa-2x"></i>
       <span>Vehicle XYZ29123, ID 321 has arrived</span>
         </div>
         <div className="note">
        <h5>
            <i className="fa fa-car fa-1.5x"></i>
            Traffic marshall  
        </h5>
        <i className="fa fa-mobile fa-2x"></i>
       <span>Arrive at 11:30 gate A </span>
         </div>
         
                               </div>
                               <div className="col-sm-6">
                               <img src="./images/product/10.png"/>
                               </div>
                               
                           </div>
                           {/* end row */}
                       </div>
                       {/* end content */}
                   </li>
                   {/* end   Transport check-in*/}
                    {/* start   Laying down*/}
                    <li>
                       <h4>
                       <span className="num" >4</span> 
                       Laying down
                       </h4>
                       {/* start content */}
                       <div className="content">
                           {/* start row */}
                           <div className="row">
                               <div className="col-sm-6">
                                   <p>
                                  The equipment operators are expecting
                                   the vehicle as their time - and that of 
                                   the appropriate equipment - was booked in 
                                   advance. They quickly and safely unload the 
                                   materials in accordance with the on-screen 
                                   instructions. 
                                   </p>
                                   <div className="note">
        <h5>
            <i className="fa fa-male fa-1.5x"></i>
            Supplier’s driver  
        </h5>
        <i className="fa fa-mobile fa-2x"></i>
       <span>Vehicle XYZ29123, ID 321 has arrived</span>
         </div>
         <div className="note">
        <h5>
            <i className="fa fa-car fa-1.5x"></i>
            Equipment operator 
        </h5>
        <i className="fa fa-mobile fa-2x"></i>
       <span>Today 5 deliveries to unload </span>
         </div>
                               </div>
                               <div className="col-sm-6">
                               <img src="./images/product/11.png"/>
                               </div>
                               
                           </div>
                           {/* end row */}
                       </div>
                       {/* end content */}
                   </li>
                   {/* end   Laying down*/}
                    {/* start Quantity / quality check */}
                    <li>
                       <h4>
                       <span className="num" >5</span> 
                       Quantity / quality check
                       </h4>
                       {/* start content */}
                       <div className="content">
                           {/* start row */}
                           <div className="row">
                               <div className="col-sm-6">
                                   <p>
                                    The subcontractor and logistics
                                     coordinator check that the delivery
                                      matches the description, and that the 
                                      materials are of the required quantity 
                                      and quality to be accepted. 
                                   </p>
                                   <div className="note">
        <h5>
            <i className="fa fa-male fa-1.5x"></i>
            Subcontractor  
        </h5>
        <i className="fa fa-mobile fa-2x"></i>
       <span>Vehicle XYZ29123, ID 321 has arrived </span>
         </div>
         <div className="note">
        <h5>
            <i className="fa fa-car fa-1.5x"></i>
            Logistics coordinator
        </h5>
        <i className="fa fa-mobile fa-2x"></i>
       <span>50 deliveres in next hour</span>
         </div>
                               </div>
                               <div className="col-sm-6">
                               <img src="./images/product/12.png"/>
                               </div>
                               
                           </div>
                           {/* end row */}
                       </div>
                       {/* end content */}
                   </li>
                   {/* end  Quantity / quality check*/}
                    {/* start   Storage*/}
                    <li>
                       <h4>
                       <span className="num" >6</span> 
                       Storage
                       </h4>
                       {/* start content */}
                       <div className="content">
                           {/* start row */}
                           <div className="row">
                               <div className="col-sm-6">
                                   <p>
                    The logistics coordinator designates an appropriate 
                    storage space, ensuring that the materials will be 
                    protected from damage and guarantee that they can be easily located when needed, as well as avoiding the need for double-handling. 
                                   </p>
                                   <div className="note">
        <h5>
            <i className="fa fa-car fa-1.5x"></i>
            Logistics coordinator
        </h5>
        <i className="fa fa-mobile fa-2x"></i>
       <span>Unload matrials at storage ST02</span>
         </div>
                               </div>
                               <div className="col-sm-6">
                               <img src="./images/product/13.png"/>
                               </div>
                               
                           </div>
                           {/* end row */}
                       </div>
                       {/* end content */}
                   </li>
                   {/* end    Storage*/}
                    {/* start    Book &amp; plan site handling*/}
                    <li>
                       <h4>
                       <span className="num" >7</span> 
                       Book &amp; plan site handling
                       </h4>
                       {/* start content */}
                       <div className="content">
                           {/* start row */}
                           <div className="row">
                               <div className="col-sm-6">
                                   <p>
                    As the construction site evolves, so does the layout 
                    location of storage areas necessarily change. ProperGate 
                    allows drag-and-drop changes to your site plan, so it 
                    always reflects the current situation. And so that when
                     materials are moved to a new location, subcontractors 
                     still know exactly where to find them. 
                                   </p>
         <div className="note">
        <h5>
            <i className="fa fa-car fa-1.5x"></i>
            Logistics coordinator
        </h5>
        <i className="fa fa-mobile fa-2x"></i>
       <span>Status: 3 deliveries delayed</span>
         </div>
         <div className="note">
        <h5>
            <i className="fa fa-male fa-1.5x"></i>
            Subcontractor 
        </h5>
        <i className="fa fa-mobile fa-2x"></i>
       <span>2 of 5 delivery requests were rejected </span>
         </div>
                               </div>
                               <div className="col-sm-6">
                               <img src="./images/product/15.png"/>
                               </div>
                               
                           </div>
                           {/* end row */}
                       </div>
                       {/* end content */}
                   </li>
                   {/* end    Book &amp; plan site handling */}
                    {/* start Internal &amp; vertical transport*/}
                    <li>
                       <h4>
                       <span className="num" >8</span> 
                       Internal &amp; vertical transport
                       </h4>
                       {/* start content */}
                       <div className="content">
                           {/* start row */}
                           <div className="row">
                               <div className="col-sm-6">
                                   <p>
               Vehicle operators, equipment operators and traffic marshals 
               work together, supported by the system, to deliver the materials to the place they’re needed at the exact appropriate time.
          All the required equpiment is booked in advance, and everyone 
          is kept fully informed. 
                                   </p>
         <div className="note">
        <h5>
            <i className="fa fa-male fa-1.5x"></i>
            Supplier’s driver 
        </h5>
        <i className="fa fa-mobile fa-2x"></i>
       <span>Arrive at 11:30 gate A </span>
         </div>
         <div className="note">
        <h5>
            <i className="fa fa-car fa-1.5x"></i>
            Equipment operator 
        </h5>
        <i className="fa fa-mobile fa-2x"></i>
       <span>Unload materials at 11:30 from gate A </span>
         </div>
         <div className="note">
        <h5>
            <i className="fa fa-male fa-1.5x"></i>
            Traffic marshall 
        </h5>
        <i className="fa fa-mobile fa-2x"></i>
       <span>ID 342 should leave the site 10min ago </span>
         </div>
                               </div>
                               <div className="col-sm-6">
                               <img src="./images/product/16.png"/>
                               </div>
                               
                           </div>
                           {/* end row */}
                       </div>
                       {/* end content */}
                   </li>
                   {/* end  Internal &amp; vertical transport*/}
                    {/* start  Reporting*/}
                    <li>
                       <h4>
                       <span className="num" >9</span> 
                       Reporting
                       </h4>
                       {/* start content */}
                       <div className="content">
                           {/* start row */}
                           <div className="row">
                               <div className="col-sm-6">
                                   <p>
                    All these activities are tracked and monitored, feeding
                     into tailored reports that give people ‘eyes and ears’
                      on the job’s progress.
              Logistics coordinators are able to identify operational level 
              bottlenecks, management layers get at-a-glance budgetary and 
              timeliness updates, and investors have access to world-class 
              business intelligence. 
                                   </p>
           <div className="note">
        <h5>
            <i className="fa fa-male fa-1.5x"></i>
            Subcontractor 
        </h5>
        <i className="fa fa-mobile fa-2x"></i>
       <span>Your new report is available on @  </span>
         </div>
         <div className="note">
        <h5>
            <i className="fa fa-car fa-1.5x"></i>
            Logistics coordinator 
        </h5>
        <i className="fa fa-mobile fa-2x"></i>
       <span>Your new report is available on @ </span>
         </div>
                               </div>
                               <div className="col-sm-6">
                               <img src="./images/product/14.png"/>
                               </div>
                               
                           </div>
                           {/* end row */}
                       </div>
                       {/* end content */}
                   </li>
                   {/* end   Reporting*/}
                  </ul>
               </div>
                {/* end container */}
      </div>
  )
}
export default WhatProperGate;