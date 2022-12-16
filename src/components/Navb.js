import Container from "react-bootstrap/Container";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";

import React, { useState } from "react";
import DayNightToggle from "react-day-and-night-toggle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navb() {
  const countItemCart = useSelector((state) => state.cart);
  const countItemFav = useSelector((state) => state.fav);
  const [isDarkMode, setIsDarkMode] = useState(false);
  document.body.style.transition = "background-color 2s";
  if (isDarkMode) {
    document.body.style.backgroundColor = "rgb(31, 31, 31)";
    let el = document.querySelectorAll(".title");
    el.forEach((e) => {
      e.classList.add("pangan");
    });
  } else {
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
    let el = document.querySelectorAll(".title");
    el.forEach((e) => {
      e.classList.remove("pangan");
    });
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <DayNightToggle
          onChange={() => setIsDarkMode(!isDarkMode)}
          checked={isDarkMode}
        />
        <Navbar.Brand href="/" className="m-auto">
          <img src="../logo.png" alt="" style={{ width: "65px", height: "45px" }} />
        </Navbar.Brand>
        <Link to="fav" className="count-parnt me-4">
          <i
            className="bi bi-star icon-size"
            style={{ color: "black"}}
          ></i>
          <span className="count" id="count">
            {countItemFav.length}
          </span>
        </Link>
        <Link to="cart" className="count-parnt">
          <i
            className="bi bi-bag-heart icon-size"
            style={{ color: "black" }}
          ></i>
          <span className="count" id="count">
            {countItemCart.length}
          </span>
        </Link>
      </Container>
    </Navbar>
  );
}

export default Navb;
