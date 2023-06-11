import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom";
import "../components/SearchResult.css"

export const SearchResult = () => {
    return (
        <>
      <Header/>
      <div className="container-Result">
        <div className="heading-search-result">
          <h1>Result Search : JUJUTSU NO KAYSEN</h1>
        </div>

        <div className="container-result-search">
          <div className="search-result">
            <img src="/src/assets/kny.jpg" alt="" />
            <h4><Link to=''>Judul Anime</Link></h4>
          </div>
          <div className="search-result">
            <img src="/src/assets/kny.jpg" alt="" />
            <h4><Link to=''>Judul Anime</Link></h4>
          </div>
          <div className="search-result">
            <img src="/src/assets/kny.jpg" alt="" />
            <h4><Link to=''>Judul Anime</Link></h4>
          </div>
          <div className="search-result">
            <img src="/src/assets/kny.jpg" alt="" />
            <h4><Link to=''>Judul Anime</Link></h4>
          </div>
          <div className="search-result">
            <img src="/src/assets/kny.jpg" alt="" />
            <h4><Link to=''>Judul Anime</Link></h4>
          </div>
          <div className="search-result">
            <img src="/src/assets/kny.jpg" alt="" />
            <h4><Link to=''>Judul Anime</Link></h4>
          </div>
        </div>
      </div>
        <Footer/>
        </>
    )
}