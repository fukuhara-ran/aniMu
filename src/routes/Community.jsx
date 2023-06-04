import Header from "../components/Header"
import Footer from "../components/Footer"
import searchIcon from "/search.svg";
import "../components/community.css";
import discussion from "../assets/dicussion.png";

export const Community = () => {
  return (
    <>
    <Header/>
    <section className="containerCommunity">
      <div className="contentCommunity">
        <div className="headingContent">
          <p>Welcome to Animu Discussions</p>
          <p>Kalian diundang! <span>Forum diskusi Animu bisa digunakan untuk semua orang.</span></p>
          <p>Cari dulu! <span>Sebelum kalian post pertanyaan atau topik pembicaraan kalian bisa searching dulu apakah pertanyaan atau topik pembicaraan kalian sudah ada atau belum</span></p>
        </div>

        <div className="mainContentCommunity">
          <div className="searchCommunity">
            <input type="text" placeholder="Search discussion" className="searchBar"/>
            <button>
              <img src={searchIcon} alt="" />
            </button>
          </div>
          <h3>Animu Forum Discussions</h3>

          <div className="subHeadingDiscussion">
            <p>Latest discussion</p>
            <button>Start New Discussion</button>
          </div>

          <div className="listDicussion">
            <div className="discussion">
              <img src={discussion} alt="" />
              <h4>Judul Topik</h4>
              <p>Diposting oleh : Cane Toad</p>
            </div>

            <div className="discussion">
              <img src={discussion} alt="" />
              <h4>Judul Topik</h4>
              <p>Diposting oleh : Cane Toad</p>
            </div>

            <div className="discussion">
              <img src={discussion} alt="" />
              <h4>Judul Topik</h4>
              <p>Diposting oleh : Cane Toad</p>
            </div>            

            <div className="discussion">
              <img src={discussion} alt="" />
              <h4>Judul Topik</h4>
              <p>Diposting oleh : Cane Toad</p>
            </div>

            <div className="discussion">
              <img src={discussion} alt="" />
              <h4>Judul Topik</h4>
              <p>Diposting oleh : Cane Toad</p>
            </div>

            <div className="discussion">
              <img src={discussion} alt="" />
              <h4>Judul Topik</h4>
              <p>Diposting oleh : Cane Toad</p>
            </div>
          </div>
        </div>
      </div>

      <aside className="asideCommunity">
        <p>INFO!</p>
        <p>Dikarenakan ini adalah website pertama kami maka dari itu untuk konten pada komunitas hanya sekedar forum. Nantikan fitur lainnya pada update berikutnya.!</p>
      </aside>
    </section>
    <Footer/>
    </>
  )
}
