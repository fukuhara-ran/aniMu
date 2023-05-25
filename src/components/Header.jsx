import personLogo from "/person.svg";
import searchIcon from "/search.svg";
import "./header.css";

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
          <li> <a href="" id="navlist">Anime Terbaru</a></li>
          <li> <a href="" id="navlist">Genre</a></li>
          <li> <a href="" id="navlist">Komunitas</a></li>
          <li> <a href="" id="navlist">Help</a></li>
        </ul>
          <img id="profileIcon" src={personLogo} className="logo" alt="Profile icon" />
      </div>
    </nav>
  );
}

export default Header;
