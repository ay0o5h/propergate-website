import React from 'react';

const Slide = () => {
  return (
      <div className="slid">
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="./images/home/31.jpg" className="d-block w-100"/>
      <div className="carousel-caption  d-block">
        <p>we see huge potential in solutions such as propergate and went
           to use them to improve our constraction processes</p>
           <li class="media">
    <img src="./images/home/32.jpg" class="mr-3 rounded-circle" alt="..."/>
    <div class="media-body">
      <h5 class="mt-0 mb-1">jan van steirteghrm</h5>
      <span>besix group ,general manger, bu group</span>
    </div>
  </li>
      </div>
    </div>
    <div className="carousel-item">
    <img src="./images/home/31.jpg" className="d-block w-100"/>
      <div className="carousel-caption  d-block">
        <p>we need non-comformists like the inventors of propergate to challenge the
           status quo that is why i am a proud ammbassador of propergate</p>
           <li class="media">
    <img src="./images/home/33.jpg" class="mr-3 rounded-circle" alt="..."/>
    <div class="media-body">
      <h5 class="mt-0 mb-1">bruno lambrech</h5>
      <span>cfe poland, general manger</span>
    </div>
  </li>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
      </div>
  )
}
export default Slide;