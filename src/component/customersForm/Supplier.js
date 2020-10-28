import React, { Component } from 'react';


class Suplier extends Component {
  state= {
    yourName:null,
    yourEmail:null,
    companyName:null,
    phone:null,
    country:null
}
handleChange = (e) => {
  this.setState({
      [e.target.id]:e.target.value
  })
}
    render(){
        return(
            <div className="suplier">
                <div className="forms">
                 <div className="container">
            <div className="row">
              <div className="col-sm-6">
                  <h1>Supplier? <br/>
                      You no longer need be held hostage by chaotic construction site </h1>
                  <p>
                  Reduce your reliance on links in the chain, so you can do
                   your job, do it well them move on to the next.   
                  </p>
               <ul>
                   <li>
                       <i className="fa fa-check"></i>
                       <p>Make fewer journeys using less fule, saving time and money.</p>
                       
                   </li>
                   <li>
                       <i className="fa fa-check"></i>
                       <p>
                       Optimise availability of drivers and vehicles. </p>
                       
                   </li>
                   <li>
                       <i className="fa fa-check"></i>
                       <p>
                       Relay precise unloading information that people will 
                       actually use, and enjoy better communication with you 
                       clients.
          </p>
                       
                   </li>
                   <li>
                   <i className="fa fa-check"></i> 
                   <p>Be associated with higher quality work.</p>
                   </li>
                   <li>
                   <i className="fa fa-check"></i> 
                   <p>Reduce your CO2 emission and materials spoilage.</p>
                   </li>
               </ul>
              </div>
              <div className="col-sm-6">
              <form>
 
              <div className="form-group ">
      <label for="yourName">your name <span>*</span></label>
      <input type="text" className="form-control" required onChange={this.handleChange} id="yourName"/>
    </div>
    <div className="form-group ">
      <label for="companyName">company name <span>*</span></label>
      <input required type="text" className="form-control"  onChange={this.handleChange} id="companyName"/>
    </div>

    <div className="form-group ">
      <label for="yourEmail">company email <span>*</span></label>
      <input type="text" required className="form-control" onChange={this.handleChange} id="yourEmail"/>
    </div>
  <div className="form-group">
    <label for="phone">phone number <span>*</span></label>
    <input required type="text" className="form-control"  onChange={this.handleChange} id="phone"/>
  </div>
 
  <div class="form-group ">
      <label for="country">country</label>
      <select required id="country"class="form-control"  onChange={this.handleChange} class="country">
        <option selected></option>
        <option>iraq</option>
        <option>turkey</option>
        <option>egept</option>
        <option>labenon</option>
      </select>
    </div>
  
  <button type="submit" className="btn btn-dark btn-block">book a demo</button>
  <div class="form-group form-check">
    <input required type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">
    By submitting this form you agree to our terms. View our
     privacy policy to learn about how we use your information. 
    </label>
  </div>
</form>
              </div>
              </div>
              </div>
              </div>
             
            </div>
        )
    }
}
export default Suplier;