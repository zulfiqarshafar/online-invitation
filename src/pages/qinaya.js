import React from "react";
import "../styles/birthday.css";
import castle from "../assets/images/castle.png";
import facemask from "../assets/images/img-facemask.png";
import wash from "../assets/images/img-wash.png";
import distancing from "../assets/images/img-distancing.png";

const Qinaya = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const guest = params.get("to");

  const handleClick = () => {
    document.querySelector("#event").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        <div className="ornament-left">
          <div className="ornament-left-first"></div>
        </div>

        <div className="content">
          <div className="section">
            <div className="guest">
              <span className="guest__text">
                Hi, {guest} <br />
                you are invited
              </span>
              <button className="guest__button" onClick={handleClick}>
                Open
              </button>
            </div>
          </div>
          <div className="section">
            <div className="event" id="event">
              <div className="event__title">
                <span className="event__title__header">Qinaya's</span>
                <br />
                Candyland
              </div>
              <div className="event__description">
                Tasyakur Khitan <br />
                and <br />
                5th Birthday Party
              </div>
              <div className="event__image">
                <img src={castle} alt="Castle" />
              </div>
            </div>
          </div>
          <div className="section">
            <div className="info">
              <div className="info__title">Time and Place</div>
              <div className="info__date">Sunday, 24 July 2022</div>
              <div className="info__time">03.00 - 06.00 PM</div>
              <div className="info__location">
                Kayangan Ballroom Swissbel Hotel Makassar
                <br />
                Jl. Ujung Pandang No. 8
              </div>
            </div>
          </div>
          <div className="section">
            <div className="dresscode">
              <div className="dresscode__title">Dresscode</div>
              <br />
              Colorful
            </div>
          </div>
          <div className="section">
            <div className="prokes">
              <div className="prokes__title">Protokol Kesehatan</div>
              <ul>
                <li>
                  <img src={facemask} width="13%" alt="facemask" />
                  <p>Menggunakan masker</p>
                </li>
                <li>
                  <img src={wash} width="13%" alt="wash hands" />
                  <p>
                    Mencuci tangan <br />
                    atau menggunakan hand sanitizer
                  </p>
                </li>
                <li>
                  <img src={distancing} width="13%" alt="distancing" />
                  <p>Menjaga jarak</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="section">
            <div className="footer">It's gonna be sweet</div>
          </div>
        </div>

        <div className="ornament-right">
          <div className="ornament-right-first"></div>
        </div>
      </main>
    </>
  );
};

export default Qinaya;
