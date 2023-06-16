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
