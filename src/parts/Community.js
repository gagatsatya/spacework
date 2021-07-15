import React from "react";
import Com from "assets/images/community.png";

export default function Community() {
  return (
    <section className="community">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto text-center">
            <h3>Our community</h3>
            <p>
              Take more insight from other professional on your <br /> related
              field and gain more relationship
            </p>
            <img src={Com} alt="img" width="1050" />
          </div>
        </div>
      </div>
    </section>
  );
}
