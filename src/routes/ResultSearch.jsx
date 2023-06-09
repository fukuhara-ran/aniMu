import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom";
import "../components/ResultSearch.css"

export const ResultSearch = () => {
    return (
        <>
        <Header/>

        <div className="container">
            <div className="container-result-search">
                <div className="heading-result-search">
                    <h1>Search Result for : <></></h1>
                </div>
                
                <div className="search-items">
                    <div className="item">
                        <Link to='/profile-content'><img src="/src/assets/kny.jpg" alt="anime thumbnail"/></Link>
                        <h4><a href="#"><Link to=''>Judul Anime</Link></a></h4>
                    </div>

                    <div className="item">
                        <Link to='/profile-content'><img src="/src/assets/kny.jpg" alt="anime thumbnail"/></Link>
                        <h4><a href="#"><Link to=''>Judul Anime</Link></a></h4>
                    </div>

                    <div className="item">
                        <Link to='/profile-content'><img src="/src/assets/kny.jpg" alt="anime thumbnail"/></Link>
                        <h4><a href="#"><Link to=''>Judul Anime</Link></a></h4>
                    </div>

                    <div className="item">
                        <Link to='/profile-content'><img src="/src/assets/kny.jpg" alt="anime thumbnail"/></Link>
                        <h4><a href="#"><Link to=''>Judul Anime</Link></a></h4>
                    </div>

                    <div className="item">
                        <Link to='/profile-content'><img src="/src/assets/kny.jpg" alt="anime thumbnail"/></Link>
                        <h4><a href="#"><Link to=''>Judul Anime</Link></a></h4>
                    </div>
                </div>
            </div>
        </div>
        

        <br />
        <br />
        <h1>CATATAN : DELAY PROGRESS BECAUSE ADA KELAS</h1>

        <Footer/>
        </>
    )
}