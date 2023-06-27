import Footer from "../components/Footer";
import imgAnime from "../assets/kny.jpg";
import { Link } from "react-router-dom";
import "../components/streaming.css";
import l_arrow from "../assets/l-arrow.svg"
import r_arrow from "../assets/r-arrow.svg"
import Header from "../components/Header";
import videoo from "../assets/animemv.mp4" // coba masang video menggunakan iframe

export default function Streaming () {
    return (
      <>
      <Header/>
        <section className="container">
          <div className="content-Streaming">
            <div className="heading-streaming">
              <h1>STREAMING ANIMU</h1>
            </div>
            <div className="streams">
              <iframe src={videoo} frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="title">
              <img src={imgAnime} alt="" />
              <div className="title-anime">
                <h1>KIMETSU NO YAIBA</h1>
                <h3>Genre     : fantasy, horor</h3>
                <h3>Sutradara : Alur </h3>
                <h3>Duration  : 3 jam </h3>
                <h3>from      : Japan</h3>
              </div>
            </div>

          </div>
          <aside className="aside-streaming">
            <div className="heading-episode">
              <h3>List Episode :</h3>
            </div>
            <div className="nav-ep">
              <div className="nav-ep-flex">
              <button><img src={l_arrow} alt="" /></button>
              </div>
              <div className="nav-ep-flex">
              <button><h5>1-30</h5></button>
              </div>
              <div className="nav-ep-flex">
              <button><h5>31-60</h5></button>
              </div>
              <div className="nav-ep-flex">
              <button><h5>61-90</h5></button>
              </div>
              <div className="nav-ep-flex">
              <button><img src={r_arrow} alt="" /></button>
              </div>
              
            </div>
            <div className="list-episode">
              <div className="episode"> 
                <Link><button><h5>EP01</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP02</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP03</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP04</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP05</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP06</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP07</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP08</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP09</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP10</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP11</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP12</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP13</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP14</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP15</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP16</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP17</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP18</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP19</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP20</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP21</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP22</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP23</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP24</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP25</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP26</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP27</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP28</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP29</h5></button></Link>
              </div>
              <div className="episode"> 
                <Link><button><h5>EP30</h5></button></Link>
              </div>
              
            </div>
          </aside>
        </section>
        <Footer />
      </>
    );
  }