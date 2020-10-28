import React,{useContext} from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import {ToggleContext} from '../context/toggleContext';
import $ from 'jquery';
class Faq extends Component{
  componentDidMount(){
    let x=true;
     $('.process .faq li').click(function(){
        
         if (x === true){
        $('.process .faq .content').css({display:'block'})
        $(this).siblings().children('.content').css({display:'none'})
        x = !x
         }
        
         else {
            $('.process .faq .content').css({display:'none'})
            x = !x
         }
    })
  }
  static contextType = ToggleContext;
  render(){
  const {isShow,show,hide,faqs ,toggleTheme,showOne}=this.context;
  const theme = isShow ? hide :show;
  return ( 
      <div className="faq">
        <h3>FAQ</h3>
        <p>
        See what our clients are asking about. If you can’t find the answer you 
        are looking<br/>
         for, feel free to <Link to="/contact">contact us</Link>
         </p>
         <br/>

         { faqs.map((faq) => {
           return(
            <li   key={faq.id}>
              <div className="title"   style={{ background: theme.bg, border: theme.border }}>
             <h5> {faq.title}</h5>
             <i className={theme.class}></i>
              </div>
              <div className="content" style={{display:theme.display}}>
           <p>{faq.content}</p>
              </div>
            </li>
              
           )
         })}
       <span onClick={toggleTheme}> 
       {isShow ? 'show all' : 'hide all'}
       <i className="fa fa-arrow-right"></i>
       </span>
      </div>
  )
        }
}
export default Faq;