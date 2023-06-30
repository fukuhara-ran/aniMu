import logo from "../assets/ANIMU_RILL2.png";
// import personLogo from "../assets/person.svg";
import searchIcon from "/search.svg";
import { Link } from "react-router-dom";
import "./header.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { getUserDetails } from "../api/profile";

function Header({ getDataFromSearch }) {
  const [inputValue, SetInputValue] = useState("");
  // const [user, setUser] = useState(null);
  const navigation = [
    { name: "Anime Terbaru", href: "/anime-terbaru" },
    { name: "Genre", href: "/genre" },
    { name: "Community", href: "/community" },
    { name: "Help", href: "/help" },
  ];

  // useEffect(() => {
  //   try {
  //     async function fetchData() {
  //       const { data } = await getUserDetails();
  //       setUser(data);
  //     }
  //     fetchData();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);
  // console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    getDataFromSearch(inputValue);
  };

  return (
    <nav>
      <div id="leftNav">
        <Link to="/">
          <img id="navTittle" src={logo} alt="" />
        </Link>
        <form id="search" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search"
            id="searchBar"
            onChange={(e) => SetInputValue(e.target.value)}
          />
          <button id="searchBtn">
            <img id="searchIcon" src={searchIcon} alt="Search icon" />
          </button>
        </form>
      </div>
      <div id="rightNav">
        <ul className="navList">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) => {
                return !isActive ? "notActive" : "active";
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </ul>

        <Link to="/login" className="log">
          <button className="loginButtonHeader" alt="login">
            LOGIN
          </button>
        </Link>
        <Link to="/register" className="res">
          <button className="registerButtonHeader" alt="register">
            REGISTER
          </button>
        </Link>
        {/* <Link to='/profile-account'>
      <img id="profileIcon" src={personLogo} className="logo" alt="Profile icon" />
    </Link> */}
      </div>
    </nav>
  );
}

export default Header;
