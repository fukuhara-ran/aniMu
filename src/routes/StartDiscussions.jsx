import Footer from "../components/Footer";
import "../components/StartDiscussions.css";

export const StartDiscussions = () => {
  return (
    <>
      <section className="containerCommunity">
        <div className="contentCommunity">
          <h1>Animu New Discussion</h1>
          <div className="ContainerDiscussion">
            <h4>START A NEW DISCUSSION</h4>
            <div className="boxDiscussion">
              <div className="box-1"></div>
              <div className="box-2"><input placeholder="enter a title" type="text" /></div>
              <div className="box-3"></div>
              <div className="box-4"><input placeholder="say something" type="text" /></div>
            </div>
            <div className="postIn">hello</div>
          </div>
        </div>

        <aside className="asideCommunity">
          <p>INFO!</p>
          <p>
            Dikarenakan ini adalah website pertama kami maka dari itu untuk
            konten pada komunitas hanya sekedar forum. Nantikan fitur lainnya
            pada update berikutnya.!
          </p>
        </aside>
      </section>
      <Footer />
    </>
  );
};
