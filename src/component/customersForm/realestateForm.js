import React, { Component } from 'react';


class Realestate extends Component {
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
            <div className="realestate">
                <div className="forms">
                 <div className="container">
            <div className="row">
              <div className="col-sm-6">
                  <h1>Real estate developer or investor? Build better, quicker and more profitably</h1>
                  <p>
                  Bring order to your construction site, making your projects run smoother and more profitably.   
                  </p>
               <ul>
                   <li>
                       <i className="fa fa-check"></i>
                       <p>Finish more projects on time and to budget.</p>
                       
                   </li>
                   <li>
                       <i className="fa fa-check"></i>
                       <p>Build with a smaller investment to a higher standard. </p>
                       
                   </li>
                   <li>
                       <i className="fa fa-check"></i>
                       <p>Raise your sustainability and enhance your reputation. </p>
                       
                   </li>
                   <li>
                   <i className="fa fa-check"></i> 
                   <p>Make better decisions with high-quality data and insights.</p>
                   </li>
               </ul>
               <p>Join these developers today in using ProperGate:  </p>
               <img src="./images/customers/7.png"/>
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
export default Realestate;