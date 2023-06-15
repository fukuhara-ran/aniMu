import logo from "../assets/ANIMU_RILL2.png";
import personLogo from "../assets/person.svg"
import searchIcon from "/search.svg";
import { Link } from "react-router-dom";
import "./header.css";
import { useState } from "react";

function Header(props) {
  const {getDataFromSearch} = props
  const [inputValue, SetInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    getDataFromSearch(inputValue);
  }

  return (
    <nav>
      <div id="leftNav">
        <Link to="/"><img id="navTittle" src={logo} alt="" /></Link>
        <form id="search" onSubmit={handleSubmit}>
          <input type="search" placeholder="Search" id="searchBar" onChange={e => SetInputValue(e.target.value)}/>
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