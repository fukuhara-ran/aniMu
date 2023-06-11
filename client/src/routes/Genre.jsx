import Header from "../components/Header"
import Footer from "../components/Footer"
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
                <li><img src={arrow}/><a href="">action</a></li>
                <li><img src={arrow}/><a href="">Horror</a></li>
                <li><img src={arrow}/><a href="">Mysteri</a></li>
                <li><img src={arrow}/><a href="">Adventure</a></li>
            </div>
            <div className="column">
                <li><img src={arrow}/><a href="">Shounen</a></li>
                <li><img src={arrow}/><a href="">Mecha</a></li>
                <li><img src={arrow}/><a href="">Fantasy</a></li>
                <li><img src={arrow}/><a href="">Slice of life</a></li>
            </div>
            <div className="column">
                <li><img src={arrow}/><a href="">Isekai</a></li>
                <li><img src={arrow}/><a href="">Romance</a></li>
                <li><img src={arrow}/><a href="">Drama</a></li>
                <li><img src={arrow}/><a href="">Comedy</a></li>
            </div>
          </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}