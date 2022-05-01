import React from 'react'
import './Home2.css'
import pic1 from './assets/Multitasking-rafiki.png'
import pic2 from './assets/Multitasking-amico.png'
import pic3 from './assets/Multitasking-bro.png'

function Home2() {
  return (
    <div>
        <h1 className='text-info'>MINDBARE</h1>
        <div className="icons">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active bg-info">
                <img className="d-block w-100 img-fluid" src={pic1} alt="First slide"/>
              </div>
              <div className="carousel-item bg-info">
                <img className="d-block w-100 img-fluid" src={pic2} alt="Second slide"/>
              </div>
              <div className="carousel-item bg-info">
                <img className="d-block w-100 img-fluid" src={pic3} alt="Third slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Home2