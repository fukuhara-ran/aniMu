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
                <li><a href=""><img src={arrow}/><Link link to='/'>action</Link></a></li>
                <li><a href=""><img src={arrow}/><Link link to=''>Horror</Link></a></li>
                <li><a href=""><img src={arrow}/><Link link to=''>Mysteri</Link></a></li>
                <li><a href=""><img src={arrow}/><Link link to=''>Adventure</Link></a></li>
            </div>
            <div className="column">
                <li><a href=""><img src={arrow}/><Link link to=''>Shounen</Link></a></li>
                <li><a href=""><img src={arrow}/><Link link to=''>Mecha</Link></a></li>
                <li><a href=""><img src={arrow}/><Link link to=''>Fantasy</Link></a></li>
                <li><a href=""><img src={arrow}/><Link link to=''>Slice of life</Link></a></li>
            </div>
            <div className="column">
                <li><a href=""><img src={arrow}/><Link link to=''>Isekai</Link></a></li>
                <li><a href=""><img src={arrow}/><Link link to=''>Romance</Link></a></li>
                <li><a href=""><img src={arrow}/><Link link to=''>Drama</Link></a></li>
                <li><a href=""><img src={arrow}/><Link link to=''>Comedy</Link></a></li>
            </div>
          </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}