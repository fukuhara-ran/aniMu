import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import "../components/ProfileAccount.css";
import Photo from "../assets/foto_profil.jpeg";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { logout } from "../api/auth";
import { getUserDetails } from "../api/profile";
import Page404 from "./Page404";
import { updateUserInfo } from "../api/profile";

export default function ProfileAccount() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await getUserDetails();
        setUser(data);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleLogout = async () => {
    await logout();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    try {
      const response = await updateUserInfo(data);
      console.log(`ini response ${response}`);
      if (response.code === 200) {
        console.log("Change have been saved");
        navigate("/profile-account");
      } else {
        setError(response.error);
        console.log(error);
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("An error occurred during Registration.");
    }
  };

  return (
    <>
      {user == null ? (
        <Page404 />
      ) : (
        <>
          <Header />

          <section className="containerProfile">
            <div className="photoProfile">
              <img src={Photo} alt="user photo" />
            </div>
            <form className="userBiodata" method='post' onSubmit={handleSubmit}>
              <div className="inputField">
                <h4 className="subHeadingProfile">Person Profile</h4>
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" id="name" name="name" defaultValue={user?.name}/>
                <br />
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" defaultValue={user?.gender}>
                  <option value="not specified">Not Specified</option>
                  <option value="man">Man</option>
                  <option value="woman">Woman</option>
                </select>
                <br />

                <label htmlFor="aboutMe">About Me</label>
                <br />
                <textarea
                  name="aboutMe"
                  id="aboutMe"
                  cols="80"
                  rows="6"
                  defaultValue={user?.about}
                ></textarea>
              </div>

              <div className="buttonAction">
                <button type="submit">Save</button>
                <Link to="/">
                  <button onClick={handleLogout}>Log Out</button>
                </Link>
              </div>
            </form>
          </section>

          <Footer />
        </>
      )}
    </>
  );
}

// Home.propTypes = {
//     top: PropTypes.any.isRequired,
//     recent: PropTypes.any.isRequired,
//     eps: PropTypes.any.isRequired,
//   };
