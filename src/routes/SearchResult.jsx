import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../components/SearchResult.css";
import PropTypes from 'prop-types';
import arrow from "../assets/arrow.svg"
import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from 'axios'

export default function SearchResult ({search, top}) {
  // const [recentAnime, SetRecentAnime] = useState([]);
  // const [filteredList, setFilteredList] = useState([]);

  // const fetchData = () => {
  //   const resRecent = 'https://gogoanime-api-production-630c.up.railway.app/anime-movies'
  //   const getRecentAnime = axios.get(resRecent)
    
  //   axios.all([getRecentAnime]).then(
  //     axios.spread((...allData) => {
  //      const allDataRecent = allData[0].data;
  //      SetRecentAnime(allDataRecent.slice(0,10));   
  //     })
  //   )
  // }
  // useEffect(() => {
  //   fetchData();
  // }, [])

  // const filterBySearch = (event) => {
  //   const query = event.target.value;
  //   console.log(query);
  //   var updatedList = [...recentAnime];
  //   updatedList = updatedList.filter((item) => {
  //     return item.animeTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  //   });
  //   setFilteredList(updatedList);
  // };

  return (
    <>
    {/* <Header/> */}
      <section id="container">
        <div className="content-Search-Result">
          <div className="heading-Search-Result">
            <h4>Search Anime</h4>
            {/* <input id="search-box" onChange={filterBySearch} /> */}
          </div>
          <div className="container-Search-Result">
          {
              search ?(
                search.map((anime,id)=>{
                  return(
                    <div className="animeList" key={id}>
                    <Link to="/profile-content"><img src={anime.animeImg} alt="" /></Link>
                    <div className="desc-Search-Result">
                      <h4><Link to="anime-terbaru">{anime.animeTitle}</Link></h4>
                      <p>Eps {anime.episodeNum}</p>
                    </div>
                  </div>
                  )
                })
                ):""
              }
          </div>
        </div>

        <aside>
          <div className="heading-Search-Result">
            <h3>Top Anime</h3>
          </div>
          <div className="listTopAnime">
            {top
              ? top.map((anime) => {
                  return (
                    <div className="topAnime" key={anime.mal_id}>
                      <img
                        src={anime.images.jpg.large_image_url}
                        alt="animeImage"
                      />
                      <div className="descTopAnime">
                        <h4>
                          <Link href="#" target="_blank" rel="noreferrer">
                            {anime.title}
                          </Link>
                        </h4>
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

SearchResult.propTypes = {
  search: PropTypes.any.isRequired,
  top: PropTypes.any.isRequired,
}