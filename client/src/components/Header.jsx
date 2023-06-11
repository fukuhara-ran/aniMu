import logo from "../assets/ANIMU_RILL2.png";
import personLogo from "../assets/person.svg"
import searchIcon from "/search.svg";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <nav>
      <div id="leftNav">
        <Link to="/"><img id="navTittle" src={logo} alt="" /></Link>
        <form id="search">
          <input type="text" placeholder="Search" id="searchBar"/>
          <button id="searchBtn">
            <img id="searchIcon" src={searchIcon} alt="Search icon" />
          </button>
        </form>
      </div>
      <div id="rightNav">
        <ul className="navList">
          <li><Link to='/anime-terbaru' id="navList-child">Anime Terbaru</Link></li>
          <li><Link to='/genre' id="navList">Genre</Link></li>
          <li><Link to='/community' id="navList">Komunitas</Link></li>
          <li><Link to='/help' id="navList">Help</Link></li>
        </ul>
          <img id="profileIcon" src={personLogo} className="logo" alt="Profile icon" />
      </div>
    </nav>
  );
}

export default Header;
