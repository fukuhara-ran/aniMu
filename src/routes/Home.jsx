import "../components/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export const Home = ({top}) => {
  return (
    <>
      <Header />
      <section className="container">
        <div className="content">
          <div className="hero">
            <div className="headingOngoing">
              <h3>Ongoing</h3>
            </div>

            <div className="listOngoing">
              <div className="ongoingAnime">
                <Link to='anime-terbaru'><img src="/src/assets/kny.jpg" alt="anime thumbnail"/></Link>
                <h4><Link to='anime-terbaru'>Judul Anime</Link></h4>
              </div>

              <div className="ongoingAnime">
                <Link to='anime-terbaru'><img src="/src/assets/kny.jpg" alt="anime thumbnail"/></Link>
                <h4><Link to=''>Judul Anime</Link></h4>
              </div>

              <div className="ongoingAnime">
                <Link to='anime-terbaru'><img src="/src/assets/kny.jpg" alt="anime thumbnail"/></Link>
                <h4><Link to=''>Judul Anime</Link></h4>
              </div>

              <div className="ongoingAnime">
                <Link to='anime-terbaru'><img src="/src/assets/kny.jpg" alt="anime thumbnail"/></Link>
                <h4><Link to=''>Judul Anime</Link></h4>
              </div>

              <div className="ongoingAnime">
                <Link to='anime-terbaru'><img src="/src/assets/kny.jpg" alt="anime thumbnail"/></Link>
                <h4><Link to=''>Judul Anime</Link></h4>
              </div>
            </div>
          </div>

          <div className="mainContent">
            <div className="headingNewAnime">
              <h3>Terbaru</h3>
            </div>

            <div className="listNewAnime">
              <div className="newAnime">
                <Link to='genre'><img src="https://www.nerdpool.it/wp-content/uploads/2023/03/naruto.jpg" alt="" /></Link>
                <div className="descNewAnime">
                  <h4><Link to='anime-terbaru'>Judul Anime</Link></h4>
                  <p>Episode : 02</p>
                  <p>Posted by : Cane Toad</p>
                  <p>Released on : 5 hari yang lalu</p>
                </div>
              </div>
              
              <div className="newAnime">
                <Link to=''><img src="https://www.nerdpool.it/wp-content/uploads/2023/03/naruto.jpg" alt="" /></Link>
                <div className="descNewAnime">
                  <h4><Link to=''>Judul Anime</Link></h4>
                  <p>Episode : 02</p>
                  <p>Posted by : Cane Toad</p>
                  <p>Released on : 5 hari yang lalu</p>
                </div>
              </div>

              <div className="newAnime">
                <Link to=''><img src="https://www.nerdpool.it/wp-content/uploads/2023/03/naruto.jpg" alt="" /></Link>
                <div className="descNewAnime">
                  <h4><Link to=''>Judul Anime</Link></h4>
                  <p>Episode : 02</p>
                  <p>Posted by : Cane Toad</p>
                  <p>Released on : 5 hari yang lalu</p>
                </div>
              </div>

              <div className="newAnime">
                <Link to=''><img src="https://www.nerdpool.it/wp-content/uploads/2023/03/naruto.jpg" alt="" /></Link>
                <div className="descNewAnime">
                  <h4><Link to=''>Judul Anime</Link></h4>
                  <p>Episode : 02</p>
                  <p>Posted by : Cane Toad</p>
                  <p>Released on : 5 hari yang lalu</p>
                </div>
              </div>

              <div className="newAnime">
                <Link to=''><img src="https://www.nerdpool.it/wp-content/uploads/2023/03/naruto.jpg" alt="" /></Link>
                <div className="descNewAnime">
                  <h4><Link to=''>Judul Anime</Link></h4>
                  <p>Episode : 02</p>
                  <p>Posted by : Cane Toad</p>
                  <p>Released on : 5 hari yang lalu</p>
                </div>
              </div>

              <div className="newAnime">
                <Link to=''><img src="https://www.nerdpool.it/wp-content/uploads/2023/03/naruto.jpg" alt="" /></Link>
                <div className="descNewAnime">
                  <h4><Link to=''>Judul Anime</Link></h4>
                  <p>Episode : 02</p>
                  <p>Posted by : Cane Toad</p>
                  <p>Released on : 5 hari yang lalu</p>
                </div>
              </div>

              <div className="newAnime">
                <Link to=''><img src="https://www.nerdpool.it/wp-content/uploads/2023/03/naruto.jpg" alt="" /></Link>
                <div className="descNewAnime">
                  <h4><Link to=''>Judul Anime</Link></h4>
                  <p>Episode : 02</p>
                  <p>Posted by : Cane Toad</p>
                  <p>Released on : 5 hari yang lalu</p>
                </div>
              </div>

              <div className="newAnime">
                <Link to=''><img src="https://www.nerdpool.it/wp-content/uploads/2023/03/naruto.jpg" alt="" /></Link>
                <div className="descNewAnime">
                  <h4><Link to=''>Judul Anime</Link></h4>
                  <p>Episode : 02</p>
                  <p>Posted by : Cane Toad</p>
                  <p>Released on : 5 hari yang lalu</p>
                </div>
              </div>

              <div className="newAnime">
                <Link to=''><img src="https://www.nerdpool.it/wp-content/uploads/2023/03/naruto.jpg" alt="" /></Link>
                <div className="descNewAnime">
                  <h4><Link to=''>Judul Anime</Link></h4>
                  <p>Episode : 02</p>
                  <p>Posted by : Cane Toad</p>
                  <p>Released on : 5 hari yang lalu</p>
                </div>
              </div>
              
              <div className="newAnime">
                <Link to=''><img src="https://www.nerdpool.it/wp-content/uploads/2023/03/naruto.jpg" alt="" /></Link>
                <div className="descNewAnime">
                  <h4><Link to=''>Judul Anime</Link></h4>
                  <p>Episode : 02</p>
                  <p>Posted by : Cane Toad</p>
                  <p>Released on : 5 hari yang lalu</p>
                </div>
              </div>

            </div>

          </div>

          <div className="updateContent">
            <Link to='anime-terbaru'> CLICK UNTUK MELIHAT UPDATE LAINNYA</Link>
          </div>
        </div>
        
        <aside>
          <div className="headingTopAnime">
            <h3>Top Anime</h3>
          </div>
          <div className="listTopAnime">
            {/* Stylenya dibenerin biar imagenya sejajar */}
            {
              top ?(
                top.map((anime,index)=>{
                  return(
                    <div className="topAnime" key={index.mal_id}>
                      <img src={anime.images.jpg.large_image_url} alt="animeImage" />
                      <div className="descTopAnime">
                        <h4>
                          <Link href="#"
                          target="_blank"
                          rel="noreferrer">{anime.title}</Link>
                        </h4>
                        <p>Genre : Action, Adventur</p>
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

export default Home;