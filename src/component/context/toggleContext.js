import React, { Component, createContext } from 'react';

export const ToggleContext = createContext();
class ToggleContextProvider extends Component {
    state ={
        isShow:true,
        show :{class:'fa fa-chevron-up ' ,bg:'#F6F8F9',border:'0',display:'block'},
        hide:{class:'fa fa-chevron-down ' ,bg:'#fff',border:'.5px solid rgba($color: #000000, $alpha: 0.1)',
        display:'none'},
        faqs:[
            {id:1, title:'Do all subcontractors and suppliers need to be on board?',
            content:'It is highly recommended to have all subcontractors on board. This is because the system must be trusted for it to be effective – a ‘rogue’ subcontractor taking up a parking bay without first booking it, for  example, would make it unavailable for someone that had legitimately booked it.In practice this never happens, firstly because it would normally be a stipulation in their contract, and secondly because they actively benefit from using it.Suppliers however are not obliged to be on board, as the subcontractors can operate the system on their behalf. Their drivers still receive one-time delivery cards direct to their mobile device for use as an entry / exit ticket,so they become passive users of the system.'
          },
          {id :2 ,title:'How do I get subcontractors on board? ',
          content:'We’ll help you with this. We have a 100% compliance rate, so you can be sure that this won’t be an obstacle (and understandably so – subcontractors have a lot to gain). We also have a dedicated programme for educating subcontractors as users: after two hours’ training, they’re ready to use the system, and there are also online training videos to help them with individual tasks. If you’re an investor or real-estate developer, it’s a good idea to stipulate the use of ProperGate by the general contractor as a non-negotiable part of the tender. Likewise, when general contractors put individual jobs out to tender with subcontractors, it should be stipulated as an obligation.'
        },
           {id:'3' , title:'Do the subcontractors and suppliers have to pay to use software as well? ',
           content:'Typically the general contractor pays the full cost of the license. However some of our customers choose to share the cost with their subcontractors, reasoning that since all parties reap the benefits, they should also share the costs. But this is ultimately the license payer’s decision.'},
           {id:'4' , title:'Where do the demonstrations take place? ',
           content:'In normal times, we would agree on a mutually convenient location. During the current COVID-19 pandemic, however, all demonstrations are being conducted online, with the exception of those that can take place in Warsaw, Poland.'},
           {id:'5' , title:'What hardware is required to run the software? ',
           content:'The software is web-based, and the majority of the processing takes place in the ‘cloud’, meaning that technology requirements are very low. It has also been optimised for use on all manner of different devices and display sizes, from desktop computers and tablets to smartphones. The only requirement is to have an internet browser which should be either Google Chrome (the latest version) or Microsoft Edge (version 79 or later).'},
           {id:'6' , title:'Does the software work on both Windows and Mac? ',
           content:'It doesn’t matter which operating system you use as ProperGate is web-based. All that is needed is a web browser (either the latest version of Google Chrome or version 79 or later of Microsoft Edge).'},
           {id:'7' , title:'How long before construction begins do I need to implement ProperGate ',
           content:'We recommend starting 2 weeks in advance of the construction phase to achieve the best results. Processes such as joint planning of the logistics strategy and tailoring the installation and modules to the specific needs of organisation all take time, as does training and project setup. '},
           {id:'8' , title:'What happens if I need support? ',
           content:'We have a full range of support options including online training videos and support tickets and telephone-based support. In short, we’ll be there for you when you need us. In Warsaw and Dubai we also offer on-site support and training via a dedicated specialist. '},
           {id:'9' , title:'How much does it cost? ',
           content:'There is no single figure as the software is highly configurable and implementations differ from project to project. But the price will always provide great value in cost-benefit terms.Note that all software is licensed on a per-project rather than per user basis, so you don’t need to worry about buying further licences to cope with a changing project.'},
           {id:'10' , title:'Will you update the product to meet the specific needs of my company or project? ',
           content:'The software itself is modular and can be configured in a variety of ways to suit the project. Beyond that, we are always open to the idea of developing the software further, and at any given time have further modules in development'}
          ]
    }
    toggleTheme = () => {
        this.setState({
            isShow: !this.state.isShow
        })
      }
     showOne =(id)=>{
     console.log(id)
    let faqs =this.state.faqs.filter(faq => {
      return faq.id === id
    })
    this.setState({
        faqs:faqs,
        isShow: !this.state.isShow
    })
   }
    render(){
        return(
            <ToggleContext.Provider value={{...this.state ,toggleTheme:this.toggleTheme,showOne:this.showOne }}>
            {this.props.children}
          </ToggleContext.Provider>
        )
    }
}
export default ToggleContextProvider;