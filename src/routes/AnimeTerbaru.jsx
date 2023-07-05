import React, { useState, useEffect } from 'react';
import "../components/AnimeTerbaru.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../components/Header";
import axios from 'axios';

export default function AnimeTerbaru({ top, animeData }) {

  const [page, setAnimeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/top/anime/upcoming`, {
          params: {
            page: currentPage
          }
        });
        setAnimeData(response.data.top);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPage]);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => {
      if (prevPage > 1) {
        return prevPage - 1;
      }
      return prevPage;
    });
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  console.log(animeData);

  return (
    <>
      {/* <Header /> */}
      <section id="container">
        <div className="contentNewAnime">
          <div className="headingNewAnime">
            <h4>Terbaru</h4>
          </div>
          <div className="containerNewAnime">
            {animeData.length > 0
              ? animeData.map((anime, id) => {
                return (
                  <div className="animeList" key={id}>
                    <Link to="/profile-content"><img src={anime.animeImg} alt="" /></Link>
                    <div className="descNewAnime">
                      <h4><Link to="/profile-content">{anime.animeTitle}</Link></h4>
                      <p>Eps {anime.episodeNum}</p>
                    </div>
                  </div>
                );
              })
              : ""}
          </div>

          <div className="pageNav">
            {currentPage > 1 && (
              <button onClick={goToPreviousPage}>
                Previous
              </button>
            )}
            <button onClick={goToNextPage}>
              Next
            </button>
          </div>
        </div>

        <aside>
          <div className="headingTopAnime">
            <h3>Top Anime</h3>
          </div>
          <div className="listTopAnime">
            {top
              ? top.map((anime) => {
                return (
                  <div className="topAnime" key={anime.mal_id}>
                    <Link to='/profile-content'><img src={anime.images.jpg.large_image_url} alt="animeImage" /></Link>
                    <div className="descTopAnime">
                      <h4><Link to='/profile-content'>{anime.title}</Link></h4>
                      <p>Genre : Action, Adventure</p>
                    </div>
                  </div>
                );
              })
              : ""}
          </div>
        </aside>
      </section>
      <Footer />
    </>
  );
}

AnimeTerbaru.propTypes = {
  top: PropTypes.array.isRequired,
  animeData: PropTypes.array.isRequired,
};
