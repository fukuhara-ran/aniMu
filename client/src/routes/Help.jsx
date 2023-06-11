import logo from "../assets/ANIMU_RILL2.png";
import "../components/Help.css";
import Header from "../components/Header"
import Footer from "../components/Footer"

export const Help = () => {
  return (
    <>
    <Header/>
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
            <div className="first-item">
              <h3>STAY UP TO DATE</h3>
              <img src="" alt="" />
              <p>Pantau terus dari anime kesayanganmu agar tidak ketinggalan berita-berita tentang anime terbaru</p>
            </div>
            <div className="second-item">
              <h3>JOIN THE DISCUSSION</h3>
              <img src="" alt="" />
              <p>Gabung diskusi bareng dengan pecinta anime lainnya bisa jadi kalian dapat teman baru di sana</p>
            </div>
          </div>
        </div>
        <div className="foot-Container">
          <div>
            <h1>Temukan lebih banyak tentang dunia anime sekarang</h1>
          </div>
          <div className="btn-daftar">
            <button>Daftar disini</button>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
