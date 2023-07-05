import Footer from "../components/Footer"
import searchIcon from "/search.svg";
import "../components/community.css";
import discussion from "../assets/dicussion.png";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { getComment } from "../api/discussion";
import { useState, useEffect } from "react";


export default function Community () {
  const [comment, SetComment] = useState();

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await getComment();
        // SetComment(data);
        console.log(data);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  // console.log(comment);

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
            <Link to='/community-discussion'>
              <img src={searchIcon} alt="" />
            </Link>
          </div>
          <h3>Animu Forum Discussions</h3>

          <div className="subHeadingDiscussion">
            <p>Latest discussion</p>
            <Link to='/start-discussion'><button className="start-discuss">Start New Discussion</button></Link>
          </div>

          <div className="listDicussion">

          <Link to='/community-discussion'>
            <div className="discussion">
              <img src={discussion} alt="" />
              <h4>Judul Topik</h4>
              <p>Diposting oleh : Cane Toad</p>
            </div>
          </Link>

          <Link to='/community-discussion'>
            <div className="discussion">
              <img src={discussion} alt="" />
              <h4>Judul Topik</h4>
              <p>Diposting oleh : Cane Toad</p>
            </div>
          </Link>

          <Link to='/community-discussion'>
            <div className="discussion">
              <img src={discussion} alt="" />
              <h4>Judul Topik</h4>
              <p>Diposting oleh : Cane Toad</p>
            </div>
          </Link>
            
          </div>
        </div>
      </div>

      <aside className="asideCommunity">
        <p>INFO!</p>
        <p>Dikarenakan ini adalah website pertama kami maka dari itu untuk konten pada komunitas hanya sekedar forum. Nantikan fitur lainnya pada update berikutnya!</p>
      </aside>
    </section>
    <Footer/>
    </>
  )
}
