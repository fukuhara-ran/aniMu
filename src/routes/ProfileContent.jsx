import "../components/ProfileContent.css"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import Header from "../components/Header"

export default function ProfileContent () {
  return (
    <>
    <Header/>
    <section id="profileAnim">
      <div className="pembatasKiri">
        <img className="animeImage" src="/src/assets/kny.jpg" alt="anime_image" />
        <div className="animeProfile">
          <h2 className="judul">Kimetsu No Yaiba</h2>
          <p className="sinopsis">Sejak dahulu kala, ada banyak rumor tentang iblis pemakan manusia yang bersembunyi di hutan. Karena itu, penduduk setempat tak pernah berani keluar saat malam hari. Legenda mengatakan bahwa Pemburu Iblis juga berkeliaran di malam hari dan memburu iblis yang haus darah. Bagi Tanjirou, hal itu adalah kenangan terburuknya.<br /><br />
          Sejak kematian ayahnya, Tanjirou menggantikan ayahnya untuk memenuhi kebutuhan keluarganya. Meski kehidupan mereka sangat berat, mereka merasakan kebahagiaan yang luar biasa. Tapi, kebahagiaan itu hancur saat Tanjirou melihat keluarganya dibantai. Tidak hanya itu, satu-satunya keluarganya yang selamat, adik perempuannya, Nezuko, berubah menjadi Iblis. Tapi, Nezuko masih menunjukkan tanda-tanda emosi dan pemikiran manusia. Perjalanan Tanjirou untuk melawan iblis dan mengembalikan adiknya menjadi manusia akhirnya dimulai.</p>
          <br />
          <br />
          <p className="genre"><b>Genre : </b>Action, Fantasy, Adventure</p>
        </div>
      </div>
      <div className="pembatasKanan">
        <h3 className="tittle">Anime Terbaru</h3>
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
      </div>
    </section>
    <Footer/>   
    </>
  )
}