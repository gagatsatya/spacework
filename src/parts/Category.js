import React from "react";
import ImgCategory from "assets/images/category1.png";
import Badge from "assets/images/badge.png";
import Stars from "assets/images/icons/stars.svg";

export default function Category() {
  const items = [
    {
      image: "images/category1.png",
      name: "Alam Sutera",
      loc: "Tangerang, Indonesia",
    },
    {
      image: "images/category2.png",
      name: "Alam Sutera",
      loc: "Tangerang, Indonesia",
    },
    {
      image: "images/category3.png",
      name: "Alam Sutera",
      loc: "Tangerang, Indonesia",
    },
    {
      image: "images/category4.png",
      name: "Alam Sutera",
      loc: "Tangerang, Indonesia",
    },
  ];
  return (
    <section className="category">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto text-center">
            <h2>
              Choose The Space
              <span className="clr-blue">
                {" "}
                Near <br />
              </span>
              To You
            </h2>
          </div>
        </div>
        <div className="row mt-3">
          {items.map((item, index) => {
            return (
              <div key={index} className="col-3">
                <div className="img-wrapper position-relative">
                  <div className="gradien position-absolute"></div>
                  <img
                    className="image"
                    src={item.image}
                    alt="img"
                    width="265"
                    height="180"
                  />

                  <img
                    className="badges position-absolute"
                    src={Badge}
                    alt="img"
                    width="159"
                    height="34"
                  />
                  <h5 className="name position-absolute">{item.name}</h5>
                  <p className="loc position-absolute">{item.loc}</p>
                  <img
                    className="stars position-absolute"
                    src={Stars}
                    alt="img"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
