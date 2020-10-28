import React, { Component ,useState} from 'react';
import FooterNavbar from '../layout/footerNav';
import $ from 'jquery';

class Contact extends Component {
//   componentDidMount(){
//     $(' #yourName').blur(function(){
//       if($(' #yourName').val() == '' ){
//          $(this).addClass('err')
//         }
//   })
//   $(' #yourName').keydown(function(){
//     $(this).removeClass('err');
// }) 
// $('#yourEmail').blur(function() {
//   if($(' #yourEmail').val() == '' ){
//     $(this).addClass('err')
//    }
// });
// $(' #yourEmail').keydown(function(){
//   $(this).removeClass('err');
// }) 
// $('#companyName').blur(function() {
//   if($(' #companyName').val() == '' ){
//     $(this).addClass('err')
//    }
// });
// $(' #companyName').keydown(function(){
//   $(this).removeClass('err');
// }) 
// $('#Subject').blur(function() {
//   if($(' #Subject').val() == '' ){
//     $(this).addClass('err')
//    }
// });
// $(' #Subject').keydown(function(){
//   $(this).removeClass('err');
// }) 
// $('#Message').blur(function() {
//   if($(' #Message').val() == '' ){
//     $(this).addClass('err')
//    }
// });
// $(' #Message').keydown(function(){
//   $(this).removeClass('err');
// }) 
// $('.contact .btn').on('click',function(e){
//   if($('input[type="checkbox"]').is(":not(:checked)") || $(' #yourName').val() == ''
//   || $(' #yourEmail').val() == '' || $(' #companyName').val() == '' || 
//   $(' #Subject').val() == ''||(' #Message').val() == ''){
//     e.preventDefault();
   
// }else{
//   alert('your message is send')
// }

// })
//   }
  state= {
    yourName:null,
    yourEmail:null,
    companyName:null,
    Subject:null,
    Message:null
}
handleChange = (e) => {
    this.setState({
        [e.target.id]:e.target.value
    })
}
// handleSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.yourName === ''){
//       alert('you shoud right')
//     }
   
// }
    render(){
        return(
            <div className="contact">
                <div className="forms">
                 <div className="container">
            <div className="row">
              <div className="col-sm-6">
                  <h1>contact us</h1>
                  <p>
                  We’re here to help, with 24/7 outstanding 
                  support. Ask us about the product, the free demo, 
                  our resources or features. Whatever you need help with. 
                  </p>
                  <div className="yellow">
               <h5>We’re here to help. </h5>
               </div>
               <ul>
                   <li>
                       <i className="fa fa-building"></i>
                       <address>ProperGate office</address>
                       <p>Targowa 56, <br/>
                       03-733 Warsaw, Poland <br/>
                       Mon - Fri (8am – 7pm CET) 
                        </p>
                   </li>
                   <li>
                       <i className="fa fa-phone"></i>
                       <address>Call Us </address>
                       <p>+ 48 792 337 152 </p>
                       
                   </li>
               </ul>
              </div>
              <div className="col-sm-6">
              <form onSubmit={this.handleSubmit}>
              <div className="form-group ">
      <label for="yourName">your name <span>*</span></label>
      <input type="text" className="form-control" required onChange={this.handleChange} id="yourName"/>
    </div>
    <div className="form-group ">
      <label for="companyName">company name <span>*</span></label>
      <input type="text" required className="form-control" onChange={this.handleChange} id="companyName"/>
    </div>

    <div className="form-group ">
      <label for="yourEmail">company email <span>*</span></label>
      <input type="text" required className="form-control" onChange={this.handleChange} id="yourEmail"/>
    </div>
  <div className="form-group">
    <label for="subject">Subject <span>*</span></label>
    <input type="text" required className="form-control" onChange={this.handleChange} id="Subject "/>
  </div>
 
  <div class="form-group">
    <label for="Message">Message <span>*</span></label>
    <textarea class="form-control" required id="Message" onChange={this.handleChange} rows="5"></textarea>
  </div>
  
  <button type="submit" className="btn btn-dark btn-block">send Message</button>
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
                <FooterNavbar/>
            </div>
        )
    }
}
export default Contact;