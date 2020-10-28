import React, { Component } from 'react';


class BookForm extends Component {
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
            <div className="bookform">
                <div className="forms">
                 <div className="container">
            <div className="row">
              <div className="col-sm-6">
                  <h1>Get started with a product tour </h1>
                  <p>
                  Book a demo and let one of our experts show 
                  you exactly how much your projects can improve when you use ProperGate.  
                  </p>
               <ul>
                   <li>
                       <i className="fa fa-check"></i>
                       <h5>See the software in action</h5>
                       <p>
                           A screenshot is worth a thousand product feature descriptions.
                        </p>
                   </li>
                   <li>
                       <i className="fa fa-check"></i>
                       <h5>Learn how it works in the real world</h5>
                       <p>
          We run through various different scenarios so you can see exactly 
          how it works in practice – and why our user base is in love with it. 
          </p>
                       
                   </li>
                   <li>
                       <i className="fa fa-check"></i>
                       <h5>Get expert answers to all your questions</h5>
                       <p>
                       Sate your curiosity with all those specific business or 
                       technical questions that a website alone can’t answer 
          </p>
                       
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
export default BookForm;