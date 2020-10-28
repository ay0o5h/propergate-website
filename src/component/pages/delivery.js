import React from 'react';

const Delivery = () => {
    return( 
         <div className="delivery">
         <h2 className="text-center">Delivery made easy</h2>
         <p className="text-center p1">
         We take care of all your different
          deliveries and their many specialist unloading requirements 
         </p>
          {/* start container */}
          <div className="container">
            {/* start first row */}
            <div className="row">
              {/* start first col */}
              <div className ="col-sm-4">
                <div className="row">
                  <div className="col-sm-3">
                  <img src="./images/home/12.png"/>
                  </div>
                  <div className="col-sm-9">
                  <h4>Concrete</h4>
                  <p>
                  Concrete deliveries are precision scheduled and its condition
                   monitored, ensuring the longest possible window for installation.
                  </p>
                  </div>
                </div>
              </div>
             {/* end first col */}
              {/* start second col */}
              <div className ="col-sm-4">
                <div className="row">
                  <div className="col-sm-3">
                  <img src="./images/home/15.png"/>
                  </div>
                  <div className="col-sm-9">
                  <h4>Waste removal</h4>
                <p>
                Waste is controlled, monitored and segregated, and container
                 levels digitally monitored, meaning a big win for sustainability
                </p>
                  </div>
                </div>
              </div>
             {/* end second col */}
              {/* start third col */}
              <div className ="col-sm-4">
                <div className="row">
                  <div className="col-sm-3">
                  <img src="./images/home/18.png"/>
                  </div>
                  <div className="col-sm-9">
                  <h4>Formwork</h4>
                   <p>All formwork is tracked from arrival through to departure,
                        and its condition monitored, minimising loss and damage.</p>
                  </div>
                </div>
              </div>
             {/* end thisrd col */}
              </div>
               {/* end first row */}
                {/* start second row */}
            <div className="row">
              {/* start first col */}
              <div className ="col-sm-4">
                <div className="row">
                  <div className="col-sm-3">
                  <img src="./images/home/13.png"/>
                  </div>
                  <div className="col-sm-9">
                  <h4>Precasts</h4>
                <p>
                Elements arrive in sequence, their on-site storage is 
                tracked, and their installation is scheduled and monitored.
                </p>
                  </div>
                </div>
              </div>
             {/* end first col */}
              {/* start second col */}
              <div className ="col-sm-4">
                <div className="row">
                  <div className="col-sm-3">
                  <img src="./images/home/16.png"/>
                  </div>
                  <div className="col-sm-9">
                  <h4>Facades</h4>
                <p>
                Facade elements arrive in sequence,
                 their assembly is monitored and their movement tracked.
                </p>
                  </div>
                </div>
              </div>
             {/* end second col */}
              {/* start third col */}
              <div className ="col-sm-4">
                <div className="row">
                  <div className="col-sm-3">
                  <img src="./images/home/19.png"/>
                  </div>
                  <div className="col-sm-9">
                  <h4>Fit-out</h4>
                <p>
                Materials arrive just-in-time, and are tagged and tracked with
                 a high level of granularityto specific building-in destinations
                </p>
                  </div>
                </div>
              </div>
             {/* end thisrd col */}
              </div>
               {/* end second row */}
               {/* start third row */}
            <div className="row">
              {/* start first col */}
              <div className ="col-sm-4">
                <div className="row">
                  <div className="col-sm-3">
                  <img src="./images/home/14.png"/>
                  </div>
                  <div className="col-sm-9">
                  <h4>Scaffolding</h4>
                <p>
                    Scaffolding is tracked from receipt, to storage, to usage,
                     to return, so it’s always clear what’s on site and where.
                     </p>
                  </div>
                </div>
              </div>
             {/* end first col */}
              {/* start second col */}
              <div className ="col-sm-4">
                <div className="row">
                  <div className="col-sm-3">
                  <img src="./images/home/17.png"/>
                  </div>
                  <div className="col-sm-9">
                  <h4>Equipment</h4>
                  <p>
                  Equipment and operators are guaranteed available 
                  when needed, and their service condition monitored.
                  </p>
                  </div>
                </div>
              </div>
             {/* end second col */}
              {/* start third col */}
              <div className ="col-sm-4">
                <div className="row">
                  <div className="col-sm-3">
                  <img src="./images/home/20.png"/>
                  </div>
                  <div className="col-sm-9">
                  <h4>MEP</h4>
                <p>
                Deliveries arrive in exactly the tight sequence for the complex
                 installation, reducing or eliminating the need for storage
                </p>
                  </div>
                </div>
              </div>
             {/* end thisrd col */}
              </div>
               {/* end third row */}
              </div>
               {/* end container */}
       </div>
    )
}
export default Delivery;