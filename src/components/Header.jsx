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
          <li> <a href="">Anime Terbaru</a></li>
          <li> <a href="">Genre</a></li>
          <li> <a href="">Komunitas</a></li>
          <li> <a href="">Help</a></li>
        </ul>
        <a href="" target="_blank" className="me-5">
          <img id="profileIcon" src={personLogo} className="logo" alt="Profile icon" />
        </a>  
      </div>
    </nav>
  );
}

export default Header;
