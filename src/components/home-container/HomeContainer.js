import React from "react";
import "./HomeContainer.css";
import { Showcase } from "./showcase/ShowCase";

export const HomeContainer = () => {
  const showCaseData = [
    {
      type: "showcase1",
      title: "Setup your profile & preferences",
      content:
        "Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.",
      image: "./assets/work1.png",
    },
    {
      type: "showcase2",
      title: "Review your custom box",
      content:
        "Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house.",
      image: "./assets/work2.png",
      showdowImage: "./assets/work2-art.png",
    },
    {
      type: "showcase1",
      title: "Try it on at home",
      content:
        "Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you're not in love with.",
      image: "./assets/work3.png",
    },
  ];

  return (
    <>
      <div data-testid="home-container" className="main-container">
        {/* <div className="neverending-loader">
          <div id="loader">
            <div id="box"></div>
            <div id="hill"></div>
          </div>
        </div> */}
        {/* <iframe src="https://giphy.com/embed/m2NgSeIOe9lIwiojkA" width="480" height="271"frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
        {/* <iframe src="https://giphy.com/embed/hpXdHPfFI5wTABdDx9" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <iframe src="https://giphy.com/embed/L1R1tvI9svkIWwpVYr" width="480" height="271" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
        <div className="top-section-main">
          <div className="top-section-content">
            <div className="left-container">
              <h1>Chaitra Bhat</h1>
              <p>
                I'm a frontend developer with hands-on experience in backend
                technologies, allowing me to create comprehensive web solutions
                using the latest tools and techniques.
              </p>

              {/* <a href="./" className="nav-link home-comp login-btn">
                SIGN UP {" >"}{" "}
              </a> */}
            </div>
            <div className="right-container">
              <img
                src="assets/photo.png"
                alt="My Image"
                className="rounded-image"
              />
            </div>
            {/* <img src="assets/work1.gif" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen/> */}

          </div>
        </div>
        <div className="feature-section">
          <h1 className="feature-section-title">
            Scroll for more! <br />{" "}
            {/* <img
              className="underline"
              src="./assets/underline.png"
              alt="underlinepic"
            /> */}
          </h1>
        </div>
        {showCaseData.map((item, index) => (
          <Showcase key={index} item={item} index={index} />
        ))}
      </div>
      <div className="try-it">
        <a className="login-btn" href="./" style={{ textAlign: "center" }}>
          TRY IT FOR YOURSELF {">"}{" "}
        </a>
      </div>
    </>
  );
};
