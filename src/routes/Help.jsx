import logo from "../assets/ANIMU_RILL2.png";
import logodiscussion from "../assets/discusion.png";
import logostayuptodate from "../assets/stayuptodate.png";
import "../components/Help.css";
import Footer from "../components/Footer"

export const Help = () => {
  return (
    <>
    <div>
        <div className="head-Container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="bottom-logo">
            <h3>Know us to know more</h3>
          </div>

        </div>
        <div className="body-Container">
          <div className="items">
            <div className="item">
              <h3>STAY UP TO DATE</h3>
              <img src={logostayuptodate} alt="" />
              <p>Pantau terus dari anime kesayanganmu agar tidak ketinggalan berita-berita tentang anime terbaru</p>
            </div>
            <div className="item">
              <h3>JOIN THE DISCUSSION</h3>
              <img src={logodiscussion} alt="" />
              <p>Gabung diskusi bareng dengan pecinta anime lainnya bisa jadi kalian dapat teman baru di sana</p>
            </div>
          </div>
        </div>
        <div className="foot-Container">
          <div className="head-text">
            <h1>Temukan lebih banyak tentang dunia anime sekarang</h1>
          </div>
          <div className="btn-daftar">
            <button className="btn-daftar-child"><h2>Daftar disini</h2></button>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
