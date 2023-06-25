import "../components/Page404.css";
import Cat from "../assets/loading_cat.jpg"
import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div className="page404">
      <div className="textside">
        <div className="textbox">
            <p className="textboxh1">Uh oh...</p>
            <p className="textboxh3">We can’t find the page you’re looking for</p>
            <Link to='/'><button className="backtohome">Go back home</button></Link>
        </div>
      </div>

      <div className="catImageSide">
        <img className="gambarkucing" src={Cat} alt="" />
      </div>
    </div>
  );
};
