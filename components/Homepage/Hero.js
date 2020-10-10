import React from "react";
import SoupIcon from "./icons/Soup";
import CookerIcon from "./icons/Cooker";
import ProtectionIcon from "./icons/Protection";

const HeroSection = props => {
  return (
    <>
      <div className="hero">
        <div className="feature-item">
          <div>
            <SoupIcon />
          </div>
          <div className="feature-item__text">DELICIOUS</div>
        </div>
        {/*  */}
        <div className="feature-item">
          <div>
            <CookerIcon />
          </div>
          <div className="feature-item__text">VIETNAMESE COOKER</div>
        </div>
        {/*  */}
        <div className="feature-item">
          <div>
            <ProtectionIcon />
          </div>
          <div className="feature-item__text">hygienic food</div>
        </div>
        {/*  */}
      </div>
      <style jsx>{`
        .hero {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          align-items: center;
          background-image: url("/static/images/hero.png");
          height: 500px;
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        :global(.hero-icon) {
          width: 120px;
          height: 120px;
        }
        .feature-item {
          text-align: center;
        }
        .feature-item:not(:last-child) {
          margin-right: 110px;
        }
        .feature-item__text {
          color: #fff;
          margin-top: 15px;
          font-weight: bold;
          text-transform: uppercase;
        }
        @media screen and (max-width: 768px) {
          :global(.hero-icon) {
            width: 90px;
            height: 90px;
          }
        }
        @media (max-width: 575.98px) {
          :global(.hero-icon) {
            width: 50px;
            height: 50px;
          }
          .feature-item__text {
            font-size: 0.7rem;
          }
          .feature-item:not(:last-child) {
            margin-right: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
