import "../components/ProfileContent.css"
import crunchyroll from "../assets/icon-crunchyroll.png"
import youtube from "../assets/icon-youtube.png"
import netflix from "../assets/icon-netflix.png"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import Header from "../components/Header"

export default function ProfileContent ({eps}) {
  return (
    <>
    <Header/>
    <section id="profileAnim">
      <div className="pembatasKiri">
        <img className="animeImage" src="/src/assets/kny.jpg" alt="anime_image" />
        <div className="animeProfile">
          <h1 className="judul">Kimetsu No Yaiba</h1>
          <p className="sinopsis">Sejak dahulu kala, ada banyak rumor tentang iblis pemakan manusia yang bersembunyi di hutan. Karena itu, penduduk setempat tak pernah berani keluar saat malam hari. Legenda mengatakan bahwa Pemburu Iblis juga berkeliaran di malam hari dan memburu iblis yang haus darah. Bagi Tanjirou, hal itu adalah kenangan terburuknya.<br /><br />
          Sejak kematian ayahnya, Tanjirou menggantikan ayahnya untuk memenuhi kebutuhan keluarganya. Meski kehidupan mereka sangat berat, mereka merasakan kebahagiaan yang luar biasa. Tapi, kebahagiaan itu hancur saat Tanjirou melihat keluarganya dibantai. Tidak hanya itu, satu-satunya keluarganya yang selamat, adik perempuannya, Nezuko, berubah menjadi Iblis. Tapi, Nezuko masih menunjukkan tanda-tanda emosi dan pemikiran manusia. Perjalanan Tanjirou untuk melawan iblis dan mengembalikan adiknya menjadi manusia akhirnya dimulai.</p>
          <br />
          <p className="genre"><b>GENRE : </b>Action, Fantasy, Adventure</p>
          <div className="urlStreaming">
            <div className="heading-urlStreaming">
              <h3> Platform Streaming : </h3>
            </div>
            <Link className="webStreaming" to="https://www.youtube.com/@MuseAsia">
              <img src={youtube} alt="" />
              {/* <div className="title-platform"><h4>Youtube</h4></div> */}
              <h4>Youtube</h4>
            </Link>
            <Link className="webStreaming" to="https://www.crunchyroll.com/">
              <img src={crunchyroll} alt="" />
              <h4>Crunchyroll</h4>
            </Link>
            <Link className="webStreaming" to="https://www.netflix.com/id-en/">
              <img src={netflix} alt="" />
              <h4>Netflix</h4>
            </Link>
          </div>
        </div>

      </div>
      <div className="pembatasKanan">  
        <h3 className="tittle">Anime Terbaru</h3>
        {
          eps ? (
            eps.map((anime,id)=>{
              return(
                <Link className="cardLink" href="">
                  <div className="animeCard">
                    <img className="sideImg" src={anime.animeImg} alt="anime_image" />
                    <div className="sideText">
                      <h3>Kimetsu No Yaiba</h3>
                      <p><b>Genre : <i>{anime.genres}</i></b></p>
                      {/* kurang genres yg nggak nampak */}
                      <p>Episode : {anime.episodeNum}</p>
                    </div>
                  </div>
                </Link>
                // <div className="cardLink" key={id}>
                //   <div className="animmeCard">
                //   <Link className="sideImg" to='profile-content'><img src={anime.animeImg} alt="" /></Link>
                //   <div className="descNewAnime">
                //     <h4><Link to='profile-content'>{anime.animeTitle}</Link></h4>
                //     <p>Episode : {anime.episodeNum}</p>
                //     <p>Version : {anime.subOrDub}</p>
                //   </div>
                //   </div>
                // </div>
              )
            })
          ):""
        }
        
        {/* <Link className="cardLink" href="">
          <div className="animeCard">
            <img className="sideImg" src="/src/assets/kny.jpg" alt="anime_image" />
            <div className="sideText">
              <h3>Kimetsu No Yaiba</h3>
              <p><b>Genre : <i>Action, Fantasy, Adventure</i></b></p>
              <p>Episode : 5</p>
            </div>
          </div>
        </Link>
        <Link className="cardLink" href="">
          <div className="animeCard">
            <img className="sideImg" src="/src/assets/kny.jpg" alt="anime_image" />
            <div className="sideText">
              <h3>Kimetsu No Yaiba</h3>
              <p><b>Genre : <i>Action, Fantasy, Adventure</i></b></p>
              <p>Episode : 5</p>
            </div>
          </div>
        </Link>
        <Link className="cardLink" href="">
          <div className="animeCard">
            <img className="sideImg" src="/src/assets/kny.jpg" alt="anime_image" />
            <div className="sideText">
              <h3>Kimetsu No Yaiba</h3>
              <p><b>Genre : <i>Action, Fantasy, Adventure</i></b></p>
              <p>Episode : 5</p>
            </div>
          </div>
        </Link> */}
      </div>
    </section>
    <Footer/>   
    </>
  )
}