import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import arrow from "/src/Assets/arrow.svg";
import "../components/genre.css"

export const Genre = () => {
  return (
    <>
    <Header/>
    <div className="backGenre">
      <div className="containerGenre">
        <div className="headerGenre">
          Genre
        </div>
        <div className="listGenre">
            <div className="column">
                <li><img src={arrow}/><Link link to='/'>action</Link></li>
                <li><img src={arrow}/><Link link to=''>Horror</Link></li>
                <li><img src={arrow}/><Link link to=''>Mysteri</Link></li>
                <li><img src={arrow}/><Link link to=''>Adventure</Link></li>
            </div>
            <div className="column">
                <li><img src={arrow}/><Link link to=''>Shounen</Link></li>
                <li><img src={arrow}/><Link link to=''>Mecha</Link></li>
                <li><img src={arrow}/><Link link to=''>Fantasy</Link></li>
                <li><img src={arrow}/><Link link to=''>Slice of life</Link></li>
            </div>
            <div className="column">
                <li><img src={arrow}/><Link link to=''>Isekai</Link></li>
                <li><img src={arrow}/><Link link to=''>Romance</Link></li>
                <li><img src={arrow}/><Link link to=''>Drama</Link></li>
                <li><img src={arrow}/><Link link to=''>Comedy</Link></li>
            </div>
          </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}