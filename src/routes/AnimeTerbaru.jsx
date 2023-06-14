import Header from "../components/Header";
import "../components/AnimeTerbaru.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import tensura from "../assets/tensura.jpg";

export const AnimeTerbaru = ({ top }) => {
  return (
    <>
      <Header />
      <section id="container">
        <div className="contentNewAnime">
          <div className="headingNewAnime">
            <h4>Terbaru</h4>
          </div>
          <div className="containerNewAnime">
            <div className="animeList">
              <Link to="genre"><img src={tensura} alt="" /></Link>
              <div className="descNewAnime">
                <h4><Link to="anime-terbaru">Judul Anime</Link></h4>
                <p>Eps 02</p>
              </div>
            </div>
          </div>

          <div className="pageNav">
          <h1>1</h1>
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
  recent: PropTypes.any.isRequired,
};
