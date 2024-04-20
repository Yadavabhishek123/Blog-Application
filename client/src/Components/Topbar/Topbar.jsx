import "./topbar.css";
import { Link } from "react-router-dom";
import React from "react";

export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/" >HOME</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/" >ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/" >CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Write" >WRITE</Link>
          </li>
          <li className="topListItem" >
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src="https://buffer.com/library/content/images/2023/10/free-images.jpg" alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}
