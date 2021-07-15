import React from "react";
import City from "assets/images/icons/city.svg";
import Community from "assets/images/icons/community.svg";
import Event from "assets/images/icons/event.svg";
import Emote from "assets/images/icons/emote.svg";
import Love from "assets/images/icons/love.svg";
import User1 from "assets/images/icons/user1.svg";
import User2 from "assets/images/icons/user2.svg";
import User3 from "assets/images/icons/user3.svg";
import User4 from "assets/images/icons/user4.svg";
import Elips from "assets/images/ellipse.png";
import Box from "assets/images/box.png";
import Banner from "assets/images/banner.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-6 align-self-center">
            <h1 className="mb-2">
              Different<span className="clr-blue"> Culture</span> for your
              better<span className="clr-blue"> work</span>
            </h1>
            <p>
              Choose the best space which is suit for you and start gain more
              proffesional relationship
            </p>
            <div className="row statistik mt-5">
              <div className="col-3 text-center">
                <img src={City} alt="img" />
                <p>
                  <span className="clr-blue num">4</span> Outlets
                </p>
              </div>
              <div className="col-3 text-center">
                <img src={Community} alt="img" />
                <p>
                  <span className="clr-blue num">64</span> Communities
                </p>
              </div>
              <div className="col-3 text-center">
                <img src={Event} alt="img" />
                <p className="mt-1">
                  <span className="clr-blue num">72</span> Events
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <a className="btn" href="">
                  Book your spaces Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="image-wrapper position-relative">
              <div className="image-elips position-relative">
                <img src={Banner} alt="img" width="500" height="408" />
              </div>
              <img
                className="elip position-absolute"
                src={Elips}
                alt="img"
                width="400"
                height="400"
              />
              <img
                className="box1 position-absolute"
                src={Box}
                alt="img"
                width="220"
                height="60"
              />
              <img
                className="box2 position-absolute"
                src={Box}
                alt="img"
                width="220"
                height="60"
              />
              <img className="emote position-absolute" src={Emote} alt="img" />
              <img className="love1 position-absolute" src={Love} alt="img" />
              <img className="love2 position-absolute" src={Love} alt="img" />
              <img className="user1 position-absolute" src={User1} alt="img" />
              <img className="user2 position-absolute" src={User2} alt="img" />
              <img className="user3 position-absolute" src={User3} alt="img" />
              <img className="user4 position-absolute" src={User4} alt="img" />
              <div className="comment1 position-absolute">
                <p>
                  Great place to work,
                  <br /> clean - Rizky
                </p>
              </div>
              <div className="comment2 position-absolute">
                <p>
                  The best speed internet <br />i ever come - Wulan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
