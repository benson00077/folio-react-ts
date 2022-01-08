import React from "react";
import "./navBar.scss";
// store
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";

function NavBar() {
  const folio = useSelector((state: RootState) => state.portfolio);

  return (
    <div className="header" id="header">
      <span className="menu-title">Benson Tuan</span>
      <nav>
        <a className="nav-link nav-active" href="#start" title="Start">
          {folio.menu.home}
        </a>
        <a className="nav-link" href="#resume" title="Resume">
          {folio.menu.about}
        </a>
        <a className="nav-link" href="#portfolio" title="Portfolio">
          {folio.menu.portfolio}
        </a>
        <span className="nav-indicator"></span>
      </nav>
      <svg viewBox="0 0 20 20" className="icon-menu" id="icon-menu" fill="gray">
        <path d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z" />
      </svg>
    </div>
  );
}

export default NavBar;
