import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../components/SearchResult.css";
import PropTypes from 'prop-types';
import arrow from "../assets/arrow.svg"
import Header from "../components/Header";

export const SearchResult = ({search, top}) => {
  return (
    <>
    <Header/>
      <section id="container">
        <div className="content-Search-Result">
          <div className="heading-Search-Result">
            <h4>Search Result</h4>
          </div>
          <div className="container-Search-Result">
          {
              search ?(
                search.map((anime,id)=>{
                  return(
                    <div className="animeList" key={id}>
                    <Link to="genre"><img src={anime.animeImg} alt="" /></Link>
                    <div className="desc-Search-Result">
                      <h4><Link to="anime-terbaru">{anime.animeTitle}</Link></h4>
                      <p>Eps {anime.episodeNum}</p>
                    </div>
                  </div>
                  )
                })
                ):""
              }
          </div>

          <div className="pageNav">
            <div className="pageNumber">
              <button><img src={arrow} alt="" /></button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button><img src={arrow} alt="" /></button>
            </div>
        </div>
        </div>

        <aside>
          <div className="heading-Search-Result">
            <h3>Top Anime</h3>
          </div>
          <div className="listTopAnime">
            {top
              ? top.map((anime) => {
                  return (
                    <div className="topAnime" key={anime.mal_id}>
                      <img
                        src={anime.images.jpg.large_image_url}
                        alt="animeImage"
                      />
                      <div className="descTopAnime">
                        <h4>
                          <Link href="#" target="_blank" rel="noreferrer">
                            {anime.title}
                          </Link>
                        </h4>
                        <p>Genre : Action, Adventure</p>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </aside>
      </section>
      <Footer />
    </>
  );
};

SearchResult.propTypes = {
  search: PropTypes.any.isRequired,
  top: PropTypes.any.isRequired,
}