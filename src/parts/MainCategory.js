import React from "react";
import Desc from "assets/images/icons/desc.svg";
import Check from "assets/images/icons/check.svg";
import People from "assets/images/icons/people.svg";
import Main1 from "assets/images/main1.png";
import Rectangle from "assets/images/rectangle.png";
import Background from "assets/images/background-ellipse.png";

export default function MainCategory() {
  const main = [
    {
      name: "Dedicated Desk",
      image: "images/main3.png",
      cap: "7-12 people",
      status: "New Normal",
    },
    {
      name: "Private Office",
      image: "images/main1.png",
      cap: "5-6 people",
      status: "New Normal",
    },
    {
      name: "Meeting & Events",
      image: "images/main2.png",
      cap: "10-30 people",
      status: "New Normal",
    },
  ];

  return (
    <section className="main">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <img src={Desc} alt="img" />
          </div>
          <div className="col-auto">
            <h2>
              Choose{" "}
              <span className="clr-blue">
                Space <br />
              </span>{" "}
              According to your Need
            </h2>
          </div>
        </div>
        <div className="row mt-3">
          {main.map((item, index) => {
            return (
              <div key={index} className="col-4">
                <div className="img-wrapper position-relative">
                  <img src={item.image} alt="img" width="350" height="420" />
                  <img
                    className="rectangle position-absolute"
                    src={Rectangle}
                    alt="img"
                    width="276"
                    height="102"
                  />
                  <h4 className="name position-absolute">{item.name}</h4>
                  <div className="capacity position-absolute">
                    <img src={People} alt="img" />
                    <p>
                      {item.cap} <br />
                    </p>
                    <img
                      className="ms-n5"
                      style={{ marginLeft: "-5px" }}
                      src={Check}
                      alt="img"
                    />
                    <p>{item.status}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="background position-relative">
        <img
          className="background-ellipse position-absolute"
          src={Background}
          alt="img"
          width="600"
          height="700"
        />
      </div>
    </section>
  );
}
