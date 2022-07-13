import React from "react"
import globeLogo from "../images/globe.png"
import '../css/Header.css';

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img
          src={globeLogo}
          className="nav-logo"
          alt="globe logo"
        />
        <h1 className="nav-header">
          Camille Fujisaki's Terribly Interesting Travel Adventures
        </h1>
      </nav>
    </header>
  )
}
