import React from 'react';

const Slider = () => {
  return (
    <>
    <div className="wrapper">
      <div className="slider" id="slider">
        <ul className="slides">
          <li className="slide" id="slide1">
            <a href="#">
              <img src="f6.png" alt="photo 1" />
            </a>
          </li>
          <li className="slide" id="slide2">
            <a href="#">
              <img src="f5.png" alt="photo 2" />
            </a>
          </li>
          <li className="slide" id="slide3">
            <a href="#">
              <img src="f3.jpg" alt="photo 3" />
            </a>
          </li>
          <li className="slide" id="slide4">
            <a href="#">
              <img src="f2.jpg" alt="photo 4" />
            </a>
          </li>
        </ul>
        <ul className="slider-controler">
          <li><a href="#slide1">&#8226;</a></li>
          <li><a href="#slide2">&#8226;</a></li>
          <li><a href="#slide3">&#8226;</a></li>
          <li><a href="#slide4">&#8226;</a></li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Slider;
