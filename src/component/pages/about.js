import React, { Component } from 'react';
import FooterNavbar from '../layout/footerNav';
class  About extends Component {
  componentDidMount(){
    document.title='about us'
  }
  render() {
    return (
        <div className="about">
          {/* start header */}
          <header>
          <h1>We’re here to make your <br/>
            project much easier </h1>
          <img src="./images/about/1.png"/>
          </header>
         {/* end header */}
         {/* start our story */}
         <div className="our-story">
           <h4>Our story </h4>
           <h2>At ProperGate, we understand
              the problems posed by complex construction projects.</h2>
              <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <p>
                  We know the thrill and the buzz of construction, but we also know the headaches
                   and frustration – because we’ve experienced it all first-hand.
               What’s different about ProperGate is that we’re also experts in digitalisation.
                So we know how to model that real-world complexity – and translate it into lines of code
                  </p>
                </div>
                <div className="col-sm-6">
                  <p>
                  We also have an in-depth understanding of the needs of different job roles. So your people can get access to
                   exactly the right information, in the right way, at the right time.
       Meaning that you can focus on the part that you’re good at.Building things. 
                  </p>
                </div>
           </div>
           </div>
         </div>
         {/* end our story */}
         {/* start our team */}
         <div className="our-team">
           <h2 className="text-center">Meet our team </h2>
           <div className="card-group">
  <div className="card">
    <img src="./images/about/2.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Rafał Grudzień 
      <a href="https://www.linkedin.com/in/aya-munadhil-9753a2191?originalSubdomain=iq">
        <i className="fa fa-linkedin"></i>
      </a>
      </h5>
      <p className="card-text">
      Chief Executive Officer, Co-Founder
Rafał is an advocate for automation and lean management, 
and a force for the modernisation of the construction industry in 
general. The younger brother of Robert, he has been working in real
 estate and construction since 2016.
2016 finalist of “Exempt from Theory” 
by Social Wolves. Certified PM. Graduate of Mechatronics 
College (2017). Student of Environmental Engineering PW and Economy,
 International Business at Vistula. 
      </p>
    </div>
  </div>
  <div className="card">
    <img src="./images/about/3.png" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Anna Walkowska
      <a href="https://www.linkedin.com/in/aya-munadhil-9753a2191?originalSubdomain=iq">
        <i className="fa fa-linkedin"></i>
      </a>
      </h5>
      <p className="card-text">
      Chief Technology Officer, Co-Founder
Anna is a serial entrepreneur and start-up 
activist who has been building innovations for 
the real estate industry since 2009. She’s CISSP
 certified and one of the founders of the Startup Poland Foundation.
Graduate of the Polish-Japanese Institute of IT (2002) and the University of Warsaw (2005)
      </p>
    </div>
  </div>
  <div className="card">
    <img src="./images/about/4.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Robert Grudzień
      <a href="https://www.linkedin.com/in/aya-munadhil-9753a2191?originalSubdomain=iq">
        <i className="fa fa-linkedin"></i>
      </a>
       </h5>
      <p className="card-text">
      Chief Product Officer, Co-Founder
     Robert brings an eye for detail to the trio with 
     his background in quality and warranty management (for HB Reavis). 
     The older brother of Rafał, he is a proponent for the digitalisation 
     of the construction industry, and is also an advisor to start-ups in general.
      Graduate of Environmental Engineering, Warsaw University of Technology (2013). 
        .</p>
    </div>
  </div>
</div>
<div className="image-line">
<img  src="./images/about/5.png" />
<p className="text-center">
But it’s not just us … we have a whole team of angels, advisers and mentors backing us up. 
</p>
<img src="./images/about/5.png" />
</div>
         </div>
         {/* end our team */}
         {/* start Business angels  */}
         <div className="business-angels ">
           <h2 className="text-center">Business angels </h2>
           <div className="card-group">
  <div className="card">
    <img src="./images/about/6.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Stanislav Frnka
      <a href="https://www.linkedin.com/in/aya-munadhil-9753a2191?originalSubdomain=iq">
        <i className="fa fa-linkedin"></i>
      </a>
      </h5>
      <p className="card-text">
      Managing Partner, Cornerstone Partners
       More than 20 years’ experience in the business, mostly in
    the field of real-estate development. Stanislav served as CEO 
    of HB Reavis Poland for ten years, playing a major role in establishing the organisation in Poland, then guiding it to the position of number-one office building developer in Warsaw, with projects such as Varso Place (with its 310-meter high tower). He left HB Reavis to work for
    investment companies of Cornerstone Partners in Warsaw. 
      </p>
    </div>
  </div>
  <div className="card">
    <img src="./images/about/4.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Grzegorz Strutyński 
      <a href="https://www.linkedin.com/in/aya-munadhil-9753a2191?originalSubdomain=iq">
        <i className="fa fa-linkedin"></i>
      </a>
      </h5>
      <p className="card-text">
      Country Manager, GTC S.A.
      Experienced Commercial Director with a demonstrated 
      history of building successful teams. Expert in office
       leasing and Commercial Real Estate Development. Endorsed 
       for delivering Feasibility Studies, Real Estate Economics,
        and Real Estate Transactions. 
      </p>
    </div>
  </div>
  <div className="card">
    <img src="./images/about/2.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Paweł Wierzbicki 
      <a href="https://www.linkedin.com/in/aya-munadhil-9753a2191?originalSubdomain=iq">
        <i className="fa fa-linkedin"></i>
      </a>
      </h5>
      <p className="card-text">
      CEO, Schindler Poland
      Leader, Manager with 20+ years’ experience. Experienced 
      to lead companies create and implement Business &amp; Marketing Strategy
      , improve Market Intelligence activity, build Service capabilities, 
      negotiate M&amp;A and big projects and focused on the appropriate Culture 
      of customer service. In VUCA world is using change management as a
       powerful tool of success. Experienced in the management of local and
        international teams on the markets: Poland, Central &amp; South 
        Eastern Europe (CEE) and EMEA. Combining technical and managerial 
        knowledge brings success for the managed teams and organizations. 
      </p>
    </div>
  </div>
</div>
         </div>
         {/* end Business angels  */}
         {/* start slide */}
         <div className="slid">
         <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./images/about/7.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-block">
        <p className="text-center">
        i love the passion of the propergate team-it's such an adventure to support them in creating thier new business , 
        i strongly belive this to be the futur of construction logistics mangmanet
        </p>
        <li className="media">
    <img src="./images/about/4.jpg" className="mr-3 rounded-circle" alt="..."/>
    <div className="media-body">
      <h5 className="mt-0 mb-1">bruno lambrech</h5>
      <span>cfe poland, general manger</span>
    </div>
  </li>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./images/about/7.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-block">
        <p className="text-center">
        I admire the focus of the propergate team solving every task in front of them with their knowledge of both the construction industry and IT they have the ability to create the perfect products for the construction
         industry -one which can help digital it and make it more efficient
        </p>
        <li className="media">
    <img src="./images/about/6.jpg" className="mr-3 rounded-circle" alt="..."/>
    <div className="media-body">
      <h5 >bruno lambrech</h5>
      <span>cfe poland, general manger</span>
    </div>
  </li>
      </div>
    </div>
  </div>
</div>
         </div>
         {/* end slide */}
        <FooterNavbar/>
        </div>
    )
  }
}
export default About;