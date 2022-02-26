import React from "react";
import { ReactComponent as Logo } from "../logo.svg";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Logo className="footer__logo" />
      <h4 className="footer__text">&copy;2022 Kasa. All rights reserved</h4>
    </footer>
  );
}
