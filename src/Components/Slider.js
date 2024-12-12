import React from 'react'

export const Slider = () => {
  return (
    <React.Fragment>
    <section id="home-section" className="hero">
		  <div className="home-slider">
	      <div className="slider-item" style={{backgroundImage: "url(" + "images/bg_1.png" + ")",height: "520px", backgroundSize: "cover", backgroundPosition: "center"}}>
	      	<div className="overlay"></div>
	        <div className="container">
	          <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
	            <div className="col-md-12 ftco-animate text-center">
	              <h1 className="mb-2">We serve Fresh Vegestables &amp; Fruits</h1>
	              <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
	              <p><a href="#" className="btn btn-primary">View Details</a></p>
	            </div>

	          </div>
	        </div>
	      </div>

	    </div>
    </section>
    </React.Fragment>
  )
}

export default Slider