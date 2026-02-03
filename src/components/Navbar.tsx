import Hamburger from "hamburger-react";
import { useBoolStateHook } from "../hooks/useBoolStateHook";
import {
  downloadBtn,
  logoObj,
  navLinks,
  sidebarVariants,
} from "../config/navbar";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/components/navbar.css";
import { SubMenuBtn } from "./SubMenuBtn";

function LogoSection() {
  return (
    <a href="/" className="logo-section">
      <img src={logoObj.img.url} alt={logoObj.img.alt} />
      <div className="logo-txt">{logoObj.text}</div>
    </a>
  );
}

function NavLinks() {
  return navLinks.map((i, idx) => {
    return !i.submenu?.subMenuItems ? (
      <li key={idx}>
        <a href={i.link}>{i.label}</a>
      </li>
    ) : (
      <SubMenuBtn key={idx} item={i} />
    );
  });
}

export function Navbar() {
  const { state: menuOpen, onClick: toggleMenu } = useBoolStateHook(false);

  return (
    <nav className="navbar">
      <div className="mobile-navbar">
        <div className="nav-container visible-mobile-nav-container">
          <div className="menu-btn">
            <Hamburger size={25} onToggle={toggleMenu} />
          </div>
          <LogoSection />
          <a href={downloadBtn.link} className="btn primary">
            {downloadBtn.label}
          </a>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.ul className="navbar-sidebar" variants={sidebarVariants}>
              <NavLinks />
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      <div className="nav-container pc-navbar">
        <LogoSection />
        <ul className="nav-links">
          <NavLinks />
        </ul>
        <a href={downloadBtn.link} className="btn primary">
          {downloadBtn.label}
        </a>
      </div>
    </nav>
  );
}
