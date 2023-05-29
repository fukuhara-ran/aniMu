import "../components/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Home = () => {
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
                <img src="/src/assets/kny.jpg" alt="anime thumbnail" />
                <h4><a href="#">Judul Anime</a></h4>
              </div>

              <div className="ongoingAnime">
                <img src="/src/assets/kny.jpg" alt="anime thumbnail" />
                <h4><a href="#">Judul Anime</a></h4>
              </div>

              <div className="ongoingAnime">
                <img src="/src/assets/kny.jpg" alt="anime thumbnail" />
                <h4><a href="#">Judul Anime</a></h4>
              </div>

              <div className="ongoingAnime">
                <img src="/src/assets/kny.jpg" alt="anime thumbnail" />
                <h4><a href="#">Judul Anime</a></h4>
              </div>

              <div className="ongoingAnime">
                <img src="/src/assets/kny.jpg" alt="anime thumbnail" />
                <h4><a href="#">Judul Anime</a></h4>
              </div>
            </div>
          </div>

          <div className="mainContent">
            <div className="headingNewAnime">
              <h3>Terbaru</h3>
            </div>

            <div className="listNewAnime">
              <div className="newAnime">
                <img src="https://www.nerdpool.it/wp-content/uploads/2023/03/naruto.jpg" alt="" />
                <div className="descNewAnime">
                  <h4><a href="#">Judul Anime</a></h4>
                  <p>Episode : 02</p>
                  <p>Posted by : Cane Toad</p>
                  <p>Released on : 5 hari yang lalu</p>
                </div>
              </div>
              
              <div className="newAnime">
                <img src="https://www.nerdpool.it/wp-content/uploads/2023/03/naruto.jpg" alt="" />
                <div className="descNewAnime">
                <h4><a href="#">Judul Anime</a></h4>
                  <p>Episode : 02</p>
                  <p>Posted by : Cane Toad</p>
                  <p>Released on : 5 hari yang lalu</p>
                </div>
              </div>

              <div className="newAnime">
                <img src="https://www.nerdpool.it/wp-content/uploads/2023/03/naruto.jpg" alt="" />
                <div className="descNewAnime">
                  <h4><a href="#">Judul Anime</a></h4>
                  <p>Episode : 02</p>
                  <p>Posted by : Cane Toad</p>
                  <p>Released on : 5 hari yang lalu</p>
                </div>
              </div>

              <div className="newAnime">
                <img src="https://www.nerdpool.it/wp-content/uploads/2023/03/naruto.jpg" alt="" />
                <div className="descNewAnime">
                  <h4><a href="#">Judul Anime</a></h4>
                  <p>Episode : 02</p>
                  <p>Posted by : Cane Toad</p>
                  <p>Released on : 5 hari yang lalu</p>
                </div>
              </div>

              <div className="newAnime">
                <img src="https://www.nerdpool.it/wp-content/uploads/2023/03/naruto.jpg" alt="" />
                <div className="descNewAnime">
                  <h4><a href="#">Judul Anime</a></h4>
                  <p>Episode : 02</p>
                  <p>Posted by : Cane Toad</p>
                  <p>Released on : 5 hari yang lalu</p>
                </div>
              </div>

              <div className="newAnime">
                <img src="https://www.nerdpool.it/wp-content/uploads/2023/03/naruto.jpg" alt="" />
                <div className="descNewAnime">
                  <h4><a href="#">Judul Anime</a></h4>
                  <p>Episode : 02</p>
                  <p>Posted by : Cane Toad</p>
                  <p>Released on : 5 hari yang lalu</p>
                </div>
              </div>

              <div className="newAnime">
                <img src="https://www.nerdpool.it/wp-content/uploads/2023/03/naruto.jpg" alt="" />
                <div className="descNewAnime">
                  <h4><a href="#">Judul Anime</a></h4>
                  <p>Episode : 02</p>
                  <p>Posted by : Cane Toad</p>
                  <p>Released on : 5 hari yang lalu</p>
                </div>
              </div>

              <div className="newAnime">
                <img src="https://www.nerdpool.it/wp-content/uploads/2023/03/naruto.jpg" alt="" />
                <div className="descNewAnime">
                  <h4><a href="#">Judul Anime</a></h4>
                  <p>Episode : 02</p>
                  <p>Posted by : Cane Toad</p>
                  <p>Released on : 5 hari yang lalu</p>
                </div>
              </div>

              <div className="newAnime">
                <img src="https://www.nerdpool.it/wp-content/uploads/2023/03/naruto.jpg" alt="" />
                <div className="descNewAnime">
                  <h4><a href="#">Judul Anime</a></h4>
                  <p>Episode : 02</p>
                  <p>Posted by : Cane Toad</p>
                  <p>Released on : 5 hari yang lalu</p>
                </div>
              </div>
              
              <div className="newAnime">
                <img src="https://www.nerdpool.it/wp-content/uploads/2023/03/naruto.jpg" alt="" />
                <div className="descNewAnime">
                  <h4><a href="#">Judul Anime</a></h4>
                  <p>Episode : 02</p>
                  <p>Posted by : Cane Toad</p>
                  <p>Released on : 5 hari yang lalu</p>
                </div>
              </div>

            </div>

          </div>

          <div className="updateContent">
            <a href="#">CLICK UNTUK MELIHAT UPDATE LAINNYA</a>
          </div>
        </div>
        
        <aside>
          <div className="headingTopAnime">
            <h3>Top Anime</h3>
          </div>

          <div className="listTopAnime">
            <div className="topAnime">
              <img src="/src/assets/kny.jpg" alt="" />
              <div className="descTopAnime">
                <h4><a href="#">Judul Anime</a></h4>
                <p>Genre : Action, Adventure dll</p>
                <p>Sep 24, 2022 to Dec 10, 2022</p>
              </div>
            </div>

            <div className="topAnime">
              <img src="/src/assets/kny.jpg" alt="" />
              <div className="descTopAnime">
                <h4><a href="#">Judul Anime</a></h4>
                <p>Genre : Action, Adventure dll</p>
                <p>Sep 24, 2022 to Dec 10, 2022</p>
              </div>
            </div>

            <div className="topAnime">
              <img src="/src/assets/kny.jpg" alt="" />
              <div className="descTopAnime">
                <h4><a href="#">Judul Anime</a></h4>
                <p>Genre : Action, Adventure dll</p>
                <p>Sep 24, 2022 to Dec 10, 2022</p>
              </div>
            </div>

            <div className="topAnime">
              <img src="/src/assets/kny.jpg" alt="" />
              <div className="descTopAnime">
                <h4><a href="#">Judul Anime</a></h4>
                <p>Genre : Action, Adventure dll</p>
                <p>Sep 24, 2022 to Dec 10, 2022</p>
              </div>
            </div>

            <div className="topAnime">
              <img src="/src/assets/kny.jpg" alt="" />
              <div className="descTopAnime">
                <h4><a href="#">Judul Anime</a></h4>
                <p>Genre : Action, Adventure dll</p>
                <p>Sep 24, 2022 to Dec 10, 2022</p>
              </div>
            </div>
          </div>

        </aside>
        
      </section>
      <Footer />
    </>
  );
};
