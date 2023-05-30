import Header from "../components/Header"
import Footer from "../components/Footer"
import searchIcon from "/search.svg";
import "../components/community.css";

export const Community = () => {
  return (
    <>
    <Header/>
    <section className="container">
      <div className="content">
        <div className="headingContent">
          <p>Welcome to Animu Discussions</p>
          <p>Kalian diundang! <span>Forum diskusi Animu bisa digunakan untuk semua orang.</span></p>
          <p>Cari dulu! <span>Sebelum kalian post pertanyaan atau topik pembicaraan kalian bisa searching dulu apakah pertanyaan atau topik pembicaraan kalian sudah ada atau belum</span></p>
        </div>

        <div className="mainContent">
          <div className="search">
            <input type="text" placeholder="Search discussion" className="searchBar"/>
            <button>
              <img src={searchIcon} alt="" />
            </button>
          </div>
          <h3>Animu Forum Discussions</h3>
        </div>
      </div>

      <aside>
        <p>INFO!</p>
        <p>Dikarenakan ini adalah website pertama kami maka dari itu untuk konten pada komunitas hanya sekedar forum. Nantikan fitur lainnya pada update berikutnya.!</p>
      </aside>
    </section>
    <Footer/>
    </>
  )
}
