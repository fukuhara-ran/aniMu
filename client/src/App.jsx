import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './routes/Home'
import { ProfileContent } from './routes/ProfileContent'
import { AnimeTerbaru } from './routes/AnimeTerbaru'
import { Genre } from './routes/Genre'
import { Community } from './routes/Community'
import { Help } from './routes/Help'
import { Login } from './routes/Login'
import { Registration } from './routes/Registration'
import { SearchResult } from './routes/SearchResult'
import { CommunityDiscussion } from './routes/CommunityDiscussion'
import { useState, useEffect } from 'react'
// import axios from 'axios';

function App() {
  const [topAnime, SetTopAnime] = useState([]);
  const [recentAnime, SetRecentAnime] = useState([]);
  
  async function fetchData(){
    //!Axios method
    // const topAnimeAPI = ('https://api.jikan.moe/v4/top/anime?type=tv&filter=airing&limit=6');
    // const recentAnimeAPI = ('https://api.jikan.moe/v4/watch/episodes');
    // const resTopAnime = axios.get(topAnimeAPI)
    // const resRecentAnime = axios.get(recentAnimeAPI)
    // const resDataTop = await resTopAnime.data.json;
    // const resDataRecent = await resRecentAnime.data.json;
    
    //! Async method
    const resTop = await fetch('https://api.jikan.moe/v4/top/anime?type=tv&filter=airing')
    const resRecent = await fetch('https://api.jikan.moe/v4/watch/episodes')
    const resDataTop = await resTop.json();
    const resDataRecent = await resRecent.json();
    SetTopAnime(resDataTop.data.slice(0,6));
    SetRecentAnime(resDataRecent.data.slice(0,10));
  }
  
  useEffect(() => {
    fetchData();
  }, [])

  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home top={topAnime} recent={recentAnime}/>}/>
        <Route path='/profile-content' element={<ProfileContent/>}/>
        <Route path='/anime-terbaru' element={<AnimeTerbaru/>}/>
        <Route path='/genre' element={<Genre/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/search-result' element={<SearchResult/>} />
        <Route path='/community-discussion' element={<CommunityDiscussion/>}/>
      </Routes>
    </Router>  
  )
}

export default App