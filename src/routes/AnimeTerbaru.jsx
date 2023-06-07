import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import "../components/AnimeTerbaru.css"

export const AnimeTerbaru = () => {
  return (
    <>
    <Header/>
    <div id="container">
        <div className="headingNewAnime">
          <h4>Anime Terbaru</h4>
        </div>

        <div className="containerNewAnime">
          <div className="animeList">
            <img src="/src/assets/kny.jpg" alt="" />
            <h4><a href="#"><Link to=''>Judul Anime</Link></a></h4>
          </div>
          <div className="animeList">
            <img src="/src/assets/kny.jpg" alt="" />
            <h4><a href="#"><Link to=''>Judul Anime</Link></a></h4>
          </div>
          <div className="animeList">
            <img src="/src/assets/kny.jpg" alt="" />
            <h4><a href="#"><Link to=''>Judul Anime</Link></a></h4>
          </div>
          <div className="animeList">
            <img src="/src/assets/kny.jpg" alt="" />
            <h4><a href="#"><Link to=''>Judul Anime</Link></a></h4>
          </div>
          <div className="animeList">
            <img src="/src/assets/kny.jpg" alt="" />
            <h4><a href="#"><Link to=''>Judul Anime</Link></a></h4>
          </div>
          <div className="animeList">
            <img src="/src/assets/kny.jpg" alt="" />
            <h4><a href="#"><Link to=''>Judul Anime</Link></a></h4>
          </div>
          <div className="animeList">
            <img src="/src/assets/kny.jpg" alt="" />
            <h4><a href="#"><Link to=''>Judul Anime</Link></a></h4>
          </div>
          <div className="animeList">
            <img src="/src/assets/kny.jpg" alt="" />
            <h4><a href="#"><Link to=''>Judul Anime</Link></a></h4>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}