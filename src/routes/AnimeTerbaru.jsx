import "../components/AnimeTerbaru.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import l_arrow from "../assets/l-arrow.svg"
import r_arrow from "../assets/r-arrow.svg"

export const AnimeTerbaru = ({ top,page }) => {
  return (
    <>
      <section id="container">
        <div className="contentNewAnime">
          <div className="headingNewAnime">
            <h4>Terbaru</h4>
          </div>
          <div className="containerNewAnime">
          {page
              ? page.map((anime,id) => {
                  return (
                    <div className="animeList" key={id}>
                      <Link to="/profile-content"><img src={anime.animeImg} alt="" /></Link>
                      <div className="descNewAnime">
                        <h4><Link to="/profile-content">{anime.animeTitle}</Link></h4>
                        <p>Eps {anime.episodeNum}</p>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>

          <div className="pageNav">
            <div className="pageNumber">
              <button><img src={l_arrow} alt="" /></button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button><img src={r_arrow} alt="" /></button>
            </div>
        </div>
        </div>

        <aside>
          <div className="headingTopAnime">
            <h3>Top Anime</h3>
          </div>
          <div className="listTopAnime">
            {top
              ? top.map((anime) => {
                  return (
                    <div className="topAnime" key={anime.mal_id}>
                      <Link to='/profile-content'><img src={anime.images.jpg.large_image_url} alt="animeImage"/></Link>
                      <div className="descTopAnime">
                        <h4><Link to='/profile-content'>{anime.title}</Link></h4>
                        <p>Genre : Action, Adventure</p>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
          {/* <div className="topAnime">
              <Link to=''><img src="/src/assets/tensura.jpg" alt="" /></Link>
              <div className="descTopAnime">
                <h4><a href="#"><Link to=''>Judul Anime</Link></a></h4>
                <p>Genre : Action, Adventure dll</p>
                <p>Sep 24, 2022 to Dec 10, 2022</p>
              </div>
            </div> */}
        </aside>
      </section>
      <Footer />
    </>
  );
};

AnimeTerbaru.propTypes = {
  top: PropTypes.any.isRequired,
  page: PropTypes.any.isRequired,
};
