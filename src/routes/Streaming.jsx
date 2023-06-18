import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../components/streaming.css";
export const Streaming = ({}) => {
    return (
      <>
        <section className="container">
          <div className="content-Streaming">
            <div className="streams">
            <h1>bagian streaming</h1>
              <br /><br /><br /><br />
            </div>
            <div className="title">
              <h1>gambar dan judul</h1>
            </div>

          </div>
          <aside>
            <div className="heading-streaming">
              <h3>List Episode</h3>
            </div>
            <div className="list-episode">
              <div className="epsiode">EP1</div>
              <div className="epsiode">EP1</div>
              <div className="epsiode">EP1</div>
              <div className="epsiode">EP1</div>
              <div className="epsiode">EP1</div>
              <div className="epsiode">EP1</div>
              <div className="epsiode">EP1</div>
              <div className="epsiode">EP1</div>
              <div className="epsiode">EP1</div>
            </div>
          </aside>
        </section>
        <Footer />
      </>
    );
  };