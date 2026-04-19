import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className="container-fluid px-0">
      <div id="heroCarousel" className="carousel slide carousel-fade shadow" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://media.assettype.com/hollywoodreporterindia/2026-04-13/ckgxy2f6/Asha-Bhosle.png?w=1200&auto=format%2Ccompress&fit=max" className="d-block w-100 customImg" alt="Asha Bhosle 1" />
          </div>
          <div className="carousel-item">
            <img src="https://english.cdn.zeenews.com/sites/default/files/2026/04/13/1930930-asha-bhosle.jpg.jpeg" className="d-block w-100 customImg" alt="Asha Bhosle 2" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  )
}

export default HeroSection