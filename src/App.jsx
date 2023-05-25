import { Home } from './routes/Home'
import { ProfileContent } from './routes/ProfileContent'
import { AnimeTerbaru } from './routes/AnimeTerbaru'
import { Genre } from './routes/Genre'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    // Klo mau preview halamannya bisa diubah ubah tagnya soalnya blm pake react router
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile-content' element={<ProfileContent/>}/>
        <Route path='/anime-terbaru' element={<AnimeTerbaru/>}/>
        <Route path='/genre' element={<Genre/>}/>
      </Routes>
    </Router>  
  )
}

export default App