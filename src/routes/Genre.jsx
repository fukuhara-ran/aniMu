import Footer from "../components/Footer"
import arrow from "/src/Assets/arrow.svg";
import { Link } from "react-router-dom";
import "../components/genre.css"

export const Genre = () => {
  return (
    <>
    <div className="backGenre">
      <div className="containerGenre">
        <div className="headerGenre">
          Genre
        </div>
        <div className="listGenre">
            <div className="column">
                <li><img src={arrow}/><Link to=''>Action</Link></li>
                <li><img src={arrow}/><Link to=''>Horror</Link></li>
                <li><img src={arrow}/><Link to=''>Mysteri</Link></li>
                <li><img src={arrow}/><Link to=''>Adventure</Link></li>
            </div>
            <div className="column">
                <li><img src={arrow}/><Link to=''>Shounen</Link></li>
                <li><img src={arrow}/><Link to=''>Mecha</Link></li>
                <li><img src={arrow}/><Link to=''>Fantasy</Link></li>
                <li><img src={arrow}/><Link to=''>Slice of life</Link></li>
            </div>
            <div className="column">
                <li><img src={arrow}/><Link to=''>Isekai</Link></li>
                <li><img src={arrow}/><Link to=''>Romance</Link></li>
                <li><img src={arrow}/><Link to=''>Drama</Link></li>
                <li><img src={arrow}/><Link to=''>Comedy</Link></li>
            </div>
          </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}