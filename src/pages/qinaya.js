import React from "react";
import "../styles/birthday.css";
import castle from "../assets/images/castle.png";
import calendar from "../assets/images/icons8-calendar-96.png";
import watch from "../assets/images/icons8-watch-96.png";
import address from "../assets/images/icons8-address-96.png";
// import kids from "../assets/images/kids.png";
import facemask from "../assets/images/img-facemask.png";
import wash from "../assets/images/img-wash.png";
import distancing from "../assets/images/img-distancing.png";
import { Helmet } from "react-helmet";

const Qinaya = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const guest = params.get("to");

  const handleClick = () => {
    document.querySelector("#event").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Qinaya's Birthday</title>
      </Helmet>
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
              <div className="info__date">
                <img className="info__icon" src={calendar} alt="Calendar" />
                <p>Sunday, 24 July 2022</p>
              </div>
              <div className="info__time">
                <img className="info__icon" src={watch} alt="Calendar" />
                <p>03.00 - 06.00 PM</p>
              </div>
              <div className="info__location">
                <img className="info__icon" src={address} alt="Calendar" />
                <p>
                  Kayangan Ballroom Swissbel Hotel Makassar <br />
                  Jl. Ujung Pandang No. 8
                </p>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="dresscode">
              <div className="dresscode__title">Dresscode</div>
              <br />
              <div className="dresscode__description">Colorful</div>
              {/* <div className="dresscode__image">
                <img src={kids} alt="Kids" />
              </div> */}
            </div>
          </div>
          <div className="section">
            <div className="prokes">
              <div className="prokes__title">Protokol Kesehatan</div>
              <ul>
                <li>
                  <img src={facemask}  alt="facemask" />
                  <p>Menggunakan masker</p>
                </li>
                <li>
                  <img src={wash}  alt="wash hands" />
                  <p>
                    Mencuci tangan <br />
                    atau menggunakan hand sanitizer
                  </p>
                </li>
                <li>
                  <img src={distancing}  alt="distancing" />
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
