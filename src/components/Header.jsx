import logo from "../assets/ANIMU_RILL2.png";
// import personLogo from "../assets/person.svg"
import searchIcon from "/search.svg";
import { Link } from "react-router-dom";
import "./header.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header({getDataFromSearch}) {
  const [inputValue, SetInputValue] = useState('');
  const navigation = [
    {name: 'Anime Terbaru', href: '/anime-terbaru'},
    {name: 'Genre', href: '/genre'},
    {name: 'Community', href: '/community'},
    {name: 'Help', href: '/help'},
];


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
        {navigation.map((item) => (
                    <NavLink
                    key={item.name}
                    to={item.href}
                    className={({isActive}) =>{
                        return( 
                            (!isActive 
                                ? 'notActive' 
                                : 'active')
                        );
                      
                    }}>
                        {item.name}
                    </NavLink>
                ))}
          
        </ul>

        
        <Link to='/login' className="log">
          <button className="login" alt="login">LOGIN</button>
        </Link>
        <Link to='/registration' className="res">
           <button className="register" alt="register">REGISTER</button> 
        </Link>
        {/* <Link to='/profile-account'> */}
          {/* <img id="profileIcon" src={personLogo} className="logo" alt="Profile icon" /> */}
        {/* </Link> */}
      </div>
    </nav>
  );
}

export default Header;