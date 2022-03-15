import React, { useEffect } from "react";
import pic from "../../images/pic4.png";
import pic1 from "../../images/pic5.jpg";
import pic2 from "../../images/images.jpg";
import "./Platform.css";
import Aos from "aos";

const Platform = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="platform-body">
        <h1>The most trust cryptocurrency platform</h1>
        <p className="p">
          here are a few reasons why you should choose Realcash
        </p>
        <div className="container platform-container">
          <div className="col-md-4 platform" data-aos="fade-up">
            <img src={pic2} alt="crypto" className="platform-pic1" />
            <h2 className="h2">Secure storage</h2>
            <p className="para">
              We store the vast majority of the digital assets in secure offline
              storage.
            </p>
          </div>
          <div className=" col-md-4 platform" data-aos="flip-left">
            <img src={pic} alt="crypto" className="platform-pic" />
            <h2 className="h2">Protected by insurance</h2>
            <p className="para">
              Realcash maintains crypto insurance and all USD cash balances are
              covered by FDIC insurance, up to a maximum of $250,000
            </p>
          </div>
          <div className=" col-md-4 platform" data-aos="fade-up">
            <img src={pic1} alt="crypto" className="platform-pic1" />
            <h2 className="h2">Industry best practices</h2>
            <p className="para">
              Realcash supports a variety of the most popular digital
              currencies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Platform;
