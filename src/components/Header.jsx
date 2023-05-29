import personLogo from "../assets/person.svg"
import searchIcon from "/search.svg";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <div id="leftNav">
        <h2 id="navTittle">ANIMU</h2>
        <form id="search">
          <input type="text" placeholder="Search" id="searchBar"/>
          <button id="searchBtn">
            <img id="searchIcon" src={searchIcon} alt="Search icon" />
          </button>
        </form>
      </div>
      <div id="rightNav">
        <ul id="navList">
          <li> <a href="" id="navlist"><Link to='/anime-terbaru'>Anime Terbaru</Link></a></li>
          <li> <a href="" id="navlist"><Link to='/genre'>Genre</Link></a></li>
          <li> <a href="" id="navlist"><Link to='/community'>Komunitas</Link></a></li>
          <li> <a href="" id="navlist"><Link to='/help'>Help</Link></a></li>
        </ul>
          <img id="profileIcon" src={personLogo} className="logo" alt="Profile icon" />
      </div>
    </nav>
  );
}

export default Header;
