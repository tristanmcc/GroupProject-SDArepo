import React from "react";

//media
import carousel1 from "../../images/carousel-1.jpg";
import carousel2 from "../../images/carousel-2-jpg.jpg";
import carousel3 from "../../images/carousel-3.jpg";
import carousel4 from "../../images/carousel-4.jpg";
import carousel5 from "../../images/carousel-5.jpg";
import carousel6 from "../../images/carousel-6.jpg";
import Artboard from "../../images/Artboard+circles+3.png";

function HomePage() {
    return (
        <div>
        <div className="card mb-4">
            <div className="card-body">
                <h4 className="card-title">Remote Learning with ESE</h4>
                <p className="card-subtitle">Meaningful learning can happen anywhere. We’re here to support students, teachers, and families with remote learning.</p>
            </div>
            </div>
            <div id="carouselExampleControls" className="carousel slide mb-4" data-ride="carousel">
            <div className="carousel-inner">
                      <div className="carousel-item active">
                              <img className="d-block w-100" src={carousel1} alt="First slide"></img>
                     </div>
                    <div className="carousel-item">
                                  <img className="d-block w-100" src={carousel2} alt="Second slide"></img>
                    </div>
                    <div className="carousel-item">
                               <img className="d-block w-100" src={carousel3} alt="Third slide"></img>
                    </div>
                    <div className="carousel-item">
                               <img className="d-block w-100" src={carousel4} alt="Fourth slide"></img>
                    </div>
                    <div className="carousel-item">
                               <img className="d-block w-100" src={carousel5} alt="Fifth slide"></img>
                    </div>
                    <div className="carousel-item">
                               <img className="d-block w-100" src={carousel6} alt="sixth slide"></img>
                    </div>
             </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  </div>
  <div>
      <img src={Artboard} alt={"artBoard"}/>
      </div>
      <div className="container mt-4 mb-5">
  <div className="row">
    <div className="col d-flex justify-content-center space-between">
    Students show learning:
Students use built-in annotation tools to capture what they know in Seesaw’s digital portfolio
    </div>
    <div className="col d-flex justify-content-center space-between">
    Teachers gain insights:
Teachers deeply understand 
student thinking and progress — enabling them to teach better
    </div>
    <div className="col d-flex justify-content-center space-between">
    Families connect:
Families gain a window into their student’s learning and engage with school happenings
    </div>
  </div>
</div>
        </div>
    );
}

export default HomePage;