import React from "react";
import "./Header.css";
import resumeSvg from "../../assets/resume.svg";

const Header = () => {
  return (
    <section id="header">
      <div className="container">
        <div className="left">
          <p className="heading">
            A <span>Resume</span> that stands out!
          </p>
          <p className="heading">
            Make your own resume.<span>It's free.</span>
          </p>
        </div>
        <div className="right">
          <img src={resumeSvg} alt="resume" />
        </div>
      </div>
    </section>
  );
};

export default Header;
