import Footer from "../components/Footer";
import "../components/StartDiscussions.css";
import profile from "../assets/foto_profil.jpeg";
import Header from "../components/Header";
import { comment, reply } from "../api/discussion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function StartReply({ getDataFromSearch }) {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    try {
      const response = await reply(data);
      console.log(response);
      if (response.code === 201) {
        console.log("Reply has added");
        navigate("/community");
      } else {
        setError(response.error);
      }
    } catch (error) {
      console.error("Comment not added:", error);
      setError("An error on adding the comment.");
    }
  };

  return (
    <>
      <Header getDataFromSearch = {getDataFromSearch}/>
      <section className="containerCommunity">
        <div className="contentCommunity">
          <h1>Animu New Discussion</h1>
          <div className="ContainerDiscussion">
            <h1 className="title-start">Make your own creative text</h1>
            <form className="boxDiscussion" method="post" onSubmit={handleSubmit}>
              <div className="box-1">
                <img src={profile} alt="" />
              </div>
              <div className="col-start">
              <div className="box-2">
                <textarea
                  placeholder="Think your  title"
                  id=""
                  cols="300"
                  rows="10"
                  name="title"
                ></textarea>
              </div>
              <div className="box-4">
                <textarea
                  placeholder="say something"
                  id=""
                  cols="300"
                  rows="10"
                  name="content"
                ></textarea>
              </div>
              </div>
              <button className="submit-button" id="" type="submit">
                Submit
              </button>
            </form>
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
}
