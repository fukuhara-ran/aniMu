import "../components/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import tensura from "../assets/tensura.jpg"

export const Home = ({top, recent}) => {
  return (
    <>
      <Header />
      <section className="container">
        <div className="content">

          {/* HERO */}
          <div className="hero">
            <div className="headingOngoing">
              <h3>Ongoing</h3>
            </div>
            <div className="listOngoing">
            {
              recent ?(
                recent.map((anime)=>{
                  return(
                    <div className="ongoingAnime" key={anime.entry.mal_id}>
                      <img src={anime.entry.images.jpg.large_image_url} alt="anime thumbnail"/>
                      <h4><Link href="#"
                          target="_blank"
                          rel="noreferrer">{anime.entry.title}</Link></h4>
                    </div>
                  )
                })
                ):""
              }
              {/* <div className="ongoingAnime">
                <Link to='anime-terbaru'><img src="/src/assets/kny.jpg" alt="anime thumbnail"/></Link>
                <h4><Link href="#"
                          target="_blank"
                          rel="noreferrer">Judul Anime</Link>
                </h4>
              </div> */}
            </div>
          </div>

              {/* Main Content */}
          <div className="mainContent">
            <div className="headingNewAnime">
              <h3>Terbaru</h3>
            </div>

            <div className="listNewAnime">
              <div className="newAnime">
                <Link to='genre'><img src={tensura} alt="" /></Link>
                <div className="descNewAnime">
                  <h4><Link to='anime-terbaru'>Judul Anime</Link></h4>
                  <p>Episode : 02</p>
                  <p>Posted by : Cane Toad</p>
                  <p>Released on : 5 hari yang lalu</p>
                </div>
              </div>
              <div className="newAnime">
                <Link to=''><img src={tensura} alt="" /></Link>
                <div className="descNewAnime">
                  <h4><Link to=''>Judul Anime</Link></h4>
                  <p>Episode : 02</p>
                  <p>Posted by : Cane Toad</p>
                  <p>Released on : 5 hari yang lalu</p>
                </div>
              </div>

              
            </div>
          </div>

              {/* Update Content */}
          <div className="updateContent">
            <Link to='anime-terbaru'> CLICK UNTUK MELIHAT UPDATE LAINNYA</Link>
          </div>
        </div>

              {/* Top ANIME */}
        <aside>
          <div className="headingTopAnime">
            <h3>Top Anime</h3>
          </div>
          <div className="listTopAnime">
            {
              top ?(
                top.map((anime)=>{
                  return(
                    <div className="topAnime" key={anime.mal_id}>
                      <img src={anime.images.jpg.large_image_url} alt="animeImage" />
                      <div className="descTopAnime">
                        <h4>
                          <Link href="#"
                          target="_blank"
                          rel="noreferrer">{anime.title}</Link>
                        </h4>
                        <p>Genre : Action, Adventure</p>
                      </div>
                    </div>
                  )
                })
                ):""
              }
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

Home.propTypes = {
  top: PropTypes.any.isRequired,
  recent: PropTypes.any.isRequired,
};