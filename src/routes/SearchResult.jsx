import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../components/SearchResult.css";
import PropTypes from 'prop-types';

export const SearchResult = ({search}) => {
  return (
    <>
      <div className="container-Result">
        <div className="heading-search-result">
          <h1>Result Search : </h1>
        </div>
        <div className="container-result-search">
        {
              search ?(
                search.map((anime,id)=>{
                  return(
                    <div className="search-result" key={id}>
                      <img src={anime.animeImg} alt="" />
                      <h4>
                        <Link to="">{anime.animeTitle}</Link>
                      </h4>
                    </div>
                  )
                })
                ):""
              }
        </div>
      </div>
      <Footer />
    </>
  );
};

SearchResult.propTypes = {
  search: PropTypes.any.isRequired,
}