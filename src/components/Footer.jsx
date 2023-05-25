import discord from "/src/Assets/discord.svg";
import instagram from "/src/Assets/instagram.svg";
import whatsapp from "/src/Assets/whatsapp.svg";
import youtube from "/src/Assets/youtube.svg";
import snapchat from "/src/Assets/snapchat.svg";
import tiktok from "/src/Assets/tiktok.svg";
import "./footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="left">©2023 ANIMU</div>

        <div className="center">
          <ul>
            <li><a href="#">Terms and Condition</a></li>
            <li><a href="#">Privacy and Policy</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>

        <div className="right">
          <div className="socialmedia">Support:
            <a href=""><img src={discord} alt="" /> </a>
            <a href=""><img src={instagram} alt="" /> </a>
            <a href=""><img src={whatsapp} alt="" /> </a>
            <a href=""><img src={youtube} alt="" /> </a>
            <a href=""><img src={snapchat} alt="" /> </a>
            <a href=""><img src={tiktok} alt="" /> </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
