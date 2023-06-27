import discord from "/src/Assets/discord.svg";
import instagram from "/src/Assets/instagram.svg";
import whatsapp from "/src/Assets/whatsapp.svg";
import youtube from "/src/Assets/youtube.svg";
import snapchat from "/src/Assets/snapchat.svg";
import tiktok from "/src/Assets/tiktok.svg";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="left">©2023 ANIMU</div>

        <div className="center">
          <ul className="center-child">
            <li><Link to='/help'>Terms and Condition</Link></li>
            <li><Link to='/help'>Privacy and Policy</Link></li>
            <li><Link to='/help'>Help</Link></li>
          </ul>
        </div>

        <div className="right">
          <div className="socialmedia">Support:
            <Link to='https://discord.com/'><img src={discord} alt="" /> </Link>
            <Link to='https://instagram.com/'><img src={instagram} alt="" /> </Link>
            <Link to='https://whatsapp.com/'><img src={whatsapp} alt="" /> </Link>
            <Link to='https://youtube.com/'><img src={youtube} alt="" /> </Link>
            <Link to='https://snapchat.com/'><img src={snapchat} alt="" /> </Link>
            <Link to='https://tiktok.com/'><img src={tiktok} alt="" /> </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
