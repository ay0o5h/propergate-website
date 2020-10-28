import React,{ Component } from 'react';
import FooterNavbar from '../layout/footerNav';
import {Link } from 'react-router-dom';
class Customers extends Component {
    render(){
        return(
            <div className="customes">
                {/* start header */}
                <header>
                    <h1>Everyone benefits from a project <br/>
                        that uses ProperGate</h1>
                        <img src="./images/customers/1.png"/>
                </header>
                 {/* end header */}
                {/* start navbar */}
               <div className="title">
               <h3 >Our customers benefit</h3>
                <p >
                The benefits of ProperGate go all the way down the supply chain, benefitting everyone - 
                <br/>investors, general contractors, subcontractors, and suppliers. 
                </p>
               </div>
               <ul className="nav justify-content-center">
          <li className="nav-item">
          <a className="nav-link active" href="#real" data-scroll="real">for Real Estate developers</a>
          </li>
          <li className="nav-item">
             <a className="nav-link" data-scroll="general" href="#general">for general contractors</a>
         </li>
           <li className="nav-item">
            <a className="nav-link" data-scroll="subcontractors" href="#subcontractors">for subcontractors</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-scroll="suppliers" href="#suppliers">for suppliers</a>
          </li>
        <li className="nav-item">
        <a className="nav-link" data-scroll="Individuals" href="#Individuals" > Individuals</a>
       </li>
      </ul>
                {/* end navbar */}
               {/* start content  */}
               <div className="content">
                    {/*start container  */}
          <div className="container">
                   {/* start first row */}
              <div className="row box " id="real">
           <div className="col-sm-6">
               <h4>Real Estate developers &amp; Investors </h4>
               <img src="./images/customers/2.png"/>
           </div>
           <div className="col-sm-6">
              
                   <h5>We work directly with investors and real
                        estate developers to help them </h5>
                   <ul>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>Projects are more likely to finish on time and to budget,
                            and with greater predictability.</p>
                       </li>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>A smaller investment is required to build, making more projects viable.</p>
                       </li>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>And because subcontractors aren't in a final-phase rush, the quality is 
                           higher, leading to happier residents</p>
                       </li>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>Sustainability is improved, leading to improved reputation, and making it much easier 
                           to acquire those all-important LEED and BREEAM certificates</p>
                       </li>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>And new, high-quality data flows out, which can be integrated with BIM and business
                            intelligence, helping investors stay nimble and make better decisions.</p>
                       </li>
                   </ul>
                   
<Link type="button" to="/Realestate" class="btn btn-dark">i'm Real Estate developers</Link>
           </div>
           </div>
            {/* start first row */}
              {/* start second row */}
              <div className="row box" id="general">
           <div className="col-sm-6">
               <h4>General Contractors </h4>
               <img src="./images/customers/3.png"/>
           </div>
           <div className="col-sm-6">
              
                   <h5>We help general contractors bring order to their sites,
                        making projects less stressful and more controlled. </h5>
                   <ul>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>Projects are more likely to finish on time and to budget, and with greater predictability, increasing profits and reducing 
                           the risk of penalties from investors and enhancing the company's status.</p>
                       </li>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>
                       Greater control over projects, reducing on-site chaos and stress, 
                       and enabling the use of lean construction and just-in-time deliveries.
                       </p>
                       </li>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>
                       Subcontractors aren't in a final-phase rush meaning higher build quality.
                       </p>
                       </li>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>
                       Better communication with subcontractors and suppliers, resulting in improved relationships.
                       </p>
                       </li>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>
                       Improved sustainability, reducing the risk of accidents, enhancing the company's reputation 
                       and making it easier to conform to municipal waste requirements.
                       </p>
                       </li>
                   </ul>
                   
<Link type="button" to="/Generalcontractor" class="btn btn-dark">i'm General Contractors </Link>
           </div>
           </div>
            {/* start second row */}
              {/* start third row */}
              <div className="row box" id="subcontractors">
           <div className="col-sm-6">
               <h4>Subcontractors</h4>
               <img src="./images/customers/4.png"/>
           </div>
           <div className="col-sm-6">
              
                   <h5>We help subcontractors by reducing their reliance on links in the chain,
                        enabling them to do the job, do it well, and move on to the next job. </h5>
                   <ul>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>Work is more likely to finish on time and to budget.</p>
                       </li>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>
                       Greater predictability means staff and equipment can be optimised.
                       </p>
                       </li>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>Better communication with suppliers, meaning better relationships.</p>
                       </li>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>
                       Reduced pressure at project's end leads to higher quality, meaning a 
                       greater chance of job acceptance and an enhanced reputation.
                       </p>
                       </li>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>
                       Improved materials handling protocols means fewer damaged or lost items,
                        fewer project delays and safer conditions for workers
                       </p>
                       </li>
                   </ul>
                   
<Link type="button" to="Subcontractor" class="btn btn-dark">i'm Subcontractors</Link>
           </div>
           </div>
            {/* start third row */}
              {/* start fourth row */}
              <div className="row box" id="suppliers">
           <div className="col-sm-6">
               <h4>Suppliers </h4>
               <img src="./images/customers/2.png"/>
           </div>
           <div className="col-sm-6">
              
                   <h5>
            We give suppliers all the information they need to manage their 
            deliveries more efficiently. </h5>
                   <ul>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>
                       Fewer, shorter journeys of greater predictability, facilitated with site maps, means 
                       usage of vehicles, drivers and fuel can be optimised, saving time and money.
                       </p>
                       </li>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>
                       Communication with subcontractors is simplified and more organised, leading to
                        fewer misunderstandings and better relationships.
                       </p>
                       </li>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>
                       The ability to give precise unloading information to the crew mean less 
                       waste and spoilage and fewer disagreements.
                       </p>
                       </li>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>
                       Better handling protocols leads to improved quality of installed materials.
                       </p>
                       </li>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>Optimisation of delivery reduces CO2, and reduction in wastage from damaged materials.</p>
                       </li>
                   </ul>
                   
<Link type="button" to="/suplier"  class="btn btn-dark">i'm Suppliers </Link>
           </div>
           </div>
            {/* start fourth row */}
              {/* start fifth row */}
              <div className="row box" id="Individuals">
           <div className="col-sm-6">
               <h4>Construction graduates and construction logistics professionals </h4>
               <img src="./images/customers/5.png"/>
           </div>
           <div className="col-sm-6">
              
                   <h5>
         We create new opportunities and career paths for 
         forward-thinking professionals
                   </h5>
                   <ul>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>Creates job opportunities in the role of logistics coordinator.</p>
                       </li>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>
                       Enables professionals to do their jobs better, and with more control 
                       meaning less stress and greater job satisfaction.
                       </p>
                       </li>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>
                       Enables modern working methods such as
                        just-in-time deliveries and lean construction.
                       </p>
                       </li>
                       <li>
                       <i className="fa fa-check"></i>
                       <p>
                       Coming soon: ProperGate's academy trains professionals 
                       in construction logistics, and connects them with employers.
                       </p>
                       </li>
                   </ul>
           </div>
           </div>
            {/* start fifth row */}
           </div>
            {/*end container  */}
               </div>
               {/* end content */}
                <FooterNavbar/>
            </div>
        )
    }
}
export default Customers;