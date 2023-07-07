import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import ProfileContent from './routes/ProfileContent'
import AnimeTerbaru from './routes/AnimeTerbaru'
import Genre from './routes/Genre'
import Community from './routes/Community'
import Help from './routes/Help'
import Login from './routes/Login'
import Registration from './routes/Registration'
import SearchResult from './routes/SearchResult'
import CommunityDiscussion from './routes/CommunityDiscussion'
import StartDiscussions from './routes/StartDiscussions'
import Streaming from './routes/Streaming'
import ProfileAccount from './routes/ProfileAccount'
import Page404 from './routes/Page404'
import AboutUs from './routes/Aboutus'
import { useState, useEffect } from 'react'
import axios from 'axios'
import StartReply from './routes/StartReply'
import Header from './components/Header'

function App() {
  const [topAnime, SetTopAnime] = useState([]);
  const [recentAnime, SetRecentAnime] = useState([]);
  const [recentEps, SetRecentEps] = useState([]);
  const [recentPage, SetRecentPage] = useState([]);
  const [loadingState, SetLoadingState] = useState(false);
  const [search, setSearch] = useState([]);
  // const [genre, SetGenre] = useState([]);

  //!Axios
  const fetchData = () => {
    const resTop = 'https://api.jikan.moe/v4/top/anime?type=tv&filter=airing'
    const resRecent = 'https://gogoanime-api-production-630c.up.railway.app/recent-release?type=1'


    const getTopAnime = axios.get(resTop)
    const getRecentAnime = axios.get(resRecent)
    //const getSearchAnime = axios.get(resSearch) //search
    axios.all([getTopAnime, getRecentAnime /*, getSearchAnime*/]).then(
      axios.spread((...allData) => {
        const allDataTop = allData[0].data.data
        const allDataRecent = allData[1].data
        const allDataEps = allData[1].data
        const allDataRep = allData[1].data
        //const allDataSearch = allData[1].data // search


        SetTopAnime(allDataTop.slice(0,5));
        SetRecentAnime(allDataRecent.slice(0,10));
        SetRecentEps(allDataEps.slice(0,8));
        //setSearch(allDataSearch.slice(0,20)) // search
        SetRecentPage(allDataRep.slice(0,30));
        // console.log(allDataEps);
      })
    )
  }

  useEffect(() => {
    // getTopAnime();
    // getRecentAnime();
    fetchData();
  }, [])
  
  const getDataFromSearch = (searchdata) => {
    SetLoadingState(true)
    async function getanimes() {
      const resSearch = await fetch(`https://gogoanime-api-production-630c.up.railway.app/search?keyw=${searchdata}`);
      const resData = await resSearch.json();
      if (resData && resData.length > 0) {
        SetLoadingState(false);
        setSearch(resData);
      }
    }
    getanimes();
  }
  console.log(loadingState, search, ".....");
  
  return (
    <>
    <Router>
      {/* <Header getDataFromSearch = {getDataFromSearch}/> */}
      <Routes>
        <Route path='/' element={<Home top={topAnime} recent={recentAnime} eps={recentEps} getDataFromSearch = {getDataFromSearch}/>}/>
        <Route path='/profile-content/:animeId' element={<ProfileContent eps={recentEps} getDataFromSearch = {getDataFromSearch}/>}/>
        <Route path='/search-result/profile-content/:animeId' element={<ProfileContent eps={recentEps} getDataFromSearch = {getDataFromSearch}/>}/>
        <Route path='/anime-terbaru' element={<AnimeTerbaru top={topAnime} animeData={recentPage} getDataFromSearch = {getDataFromSearch}/>}/>
        <Route path='/genre' element={<Genre getDataFromSearch = {getDataFromSearch}/>}/>
        <Route path='/community' element={<Community getDataFromSearch = {getDataFromSearch}/>}/>
        <Route path='/help' element={<Help getDataFromSearch = {getDataFromSearch}/>}/>
        <Route path='/login' element={<Login getDataFromSearch = {getDataFromSearch}/>}/>
        <Route path='/register' element={<Registration getDataFromSearch = {getDataFromSearch}/>}/>
        <Route path='/search-result' element={<SearchResult search={search} top={topAnime} getDataFromSearch = {getDataFromSearch}/>} />
        <Route path='/community-discussion/:commentId' element={<CommunityDiscussion getDataFromSearch = {getDataFromSearch}/>}/>
        <Route path='/start-discussion' element={<StartDiscussions getDataFromSearch = {getDataFromSearch}/>}/>
        <Route path='/streaming' element={<Streaming getDataFromSearch = {getDataFromSearch}/>}/>
        <Route path='/profile-account' element={<ProfileAccount getDataFromSearch = {getDataFromSearch}/>}/>
        <Route path='/about-us' element={<AboutUs getDataFromSearch = {getDataFromSearch}/>}/>
        <Route path='/start-reply/:commentId' element={<StartReply/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </Router>  
    </>
  )
}

export default App