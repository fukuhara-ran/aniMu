import Footer from "../components/Footer";
import searchIcon from "/search.svg";
import Profile from "../assets/foto_profil.jpeg";
import "../components/CommunityDiscussion.css";
import { Link } from "react-router-dom";
// import discussion from "../assets/dicussion.png";
import Header from "../components/Header";
// import { useState, useEffect } from "react";
// import { comment } from "../api/discussion";

export default function CommunityDiscussion({ getDataFromSearch }) {

  return (
    <>
      <Header getDataFromSearch = {getDataFromSearch}/>
      <section className="containerCommunity">
        <div className="contentCommunity">
          <div className="mainContentCommunity">
            <h3>Animu Forum Discussions</h3>

            <div className="containerDiscussion">
              <div className="topicSection">
                <div className="containerTopic">
                  <img className="profileUser" src={Profile} alt="" />
                  <div className="contentTopic">
                    <p className="profileName">Nama Profil</p>
                    <div className="topic">
                      <p className="topicTitle">
                        Contoh judul topik yang panjang
                      </p>
                      <p className="mainTopic">
                        Cari dulu! Sebelum kalian post pertanyaan atau topik
                        pembicaraan kalian bisa searching dulu apakah pertanyaan
                        atau topik pembicaraan kalian sudah ada atau belum
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="replySection">
                <div className="containerReply">
                  <img className="profileUser" src={Profile} alt="" />
                  <div className="contentReply">
                    <p className="profileName">Nama Profil</p>
                    <div className="reply">
                      <p className="mainReply">
                        Cari dulu! Sebelum kalian post pertanyaan atau topik
                        pembicaraan kalian bisa searching dulu apakah pertanyaan
                        atau topik pembicaraan kalian sudah ada atau belum
                      </p>
                    </div>
                  </div>
                </div>

                <div className="containerReply">
                  <img className="profileUser" src={Profile} alt="" />
                  <div className="contentReply">
                    <p className="profileName">Nama Profil</p>
                    <div className="reply">
                      <p className="mainReply">
                        Cari dulu! Sebelum kalian post pertanyaan atau topik
                        pembicaraan kalian bisa searching dulu apakah pertanyaan
                        atau topik pembicaraan kalian sudah ada atau belum
                      </p>
                    </div>
                  </div>
                </div>

                <div className="containerReply">
                  <img className="profileUser" src={Profile} alt="" />
                  <div className="contentReply">
                    <p className="profileName">Nama Profil</p>
                    <div className="reply">
                      <p className="mainReply">
                        Cari dulu! Sebelum kalian post pertanyaan atau topik
                        pembicaraan kalian bisa searching dulu apakah pertanyaan
                        atau topik pembicaraan kalian sudah ada atau belum
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="asideCommunity">
          <div className="info-container">
            <p>INFO!</p>
            <p>
              Dikarenakan ini adalah website pertama kami maka dari itu untuk
              konten pada komunitas hanya sekedar forum. Nantikan fitur lainnya
              pada update berikutnya.!
            </p>
          </div>

          <div className="searchCommunityDiscussion">
            <input
              type="text"
              placeholder="Search discussion"
              className="searchBar"
            />
            <Link to="/community">
              <img src={searchIcon} alt="" />
            </Link>
          </div>

          <Link to="/start-discussion">
            <button className="newDiscussion">Start New Discussion</button>
          </Link>
        </aside>
      </section>
      <Footer />
    </>
  );
}
