import React from "react";
import Testi1 from "assets/images/testimoni1.jpg";
import Testi2 from "assets/images/testimoni2.jpg";
import Testi3 from "assets/images/testimoni3.jpg";

export default function Testimoni() {
  return (
    <section className="testimoni">
      <div className="container">
        <div className="row" style={{ height: 550 }}>
          <div className="col">
            <div className="box-wrapper position-relative">
              <div className="testi1 text-center position-absolute">
                <div className="testi-img mt-5">
                  <img src={Testi1} alt="img" width="100" height="100" />
                </div>
                <h4>Jim rendar</h4>
                <p>Product Manager</p>
                <p className="opinion mx-5">
                  Great and Recommend working space with good vibes and you can
                  choose the space which suit for you
                </p>
              </div>
              <div className="testi2 text-center position-absolute">
                <div className="testi-img mt-5">
                  <img src={Testi2} alt="img" width="100" height="100" />
                </div>
                <h4>Jim rendar</h4>
                <p>Product Manager</p>
                <p className="opinion mx-5">
                  Great and Recommend working space with good vibes and you can
                  choose the space which suit for you
                </p>
              </div>
              <div className="testi3 text-center position-absolute">
                <div className="ms-4">
                  <div className="testi-img mt-5">
                    <img src={Testi3} alt="img" width="100" height="100" />
                  </div>
                  <h4>Jim rendar</h4>
                  <p>Product Manager</p>
                  <p className="opinion mx-5">
                    Great and Recommend working space with good vibes and you
                    can choose the space which suit for you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <a className="btn" href="">
              Book a tour
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
