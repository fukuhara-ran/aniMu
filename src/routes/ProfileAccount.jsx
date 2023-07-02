import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import "../components/ProfileAccount.css";
import Photo from "../assets/foto_profil.jpeg";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { logout } from "../api/auth";
import { getUserDetails } from "../api/profile";
import Page404 from "./Page404";
import { updateUser } from "../api/profile";

export default function ProfileAccount() {
  const [user, setUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({
    name: "",
    gender: "",
    about: "",
  });

  const handleSave = async () => {
    try {
      await updateUser(updatedUser);
      console.log("Update successful!");
    } catch (error) {
      console.error("Update error:", error);
    }
  };

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
            <div className="userBiodata">
              <div className="inputField">
                <h4 className="subHeadingProfile">Person Profile</h4>
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  id="name"
                  placeholder={updatedUser.name || user?.name}
                  value={updatedUser.name}
                  onChange={(e) =>
                    setUpdatedUser({ ...updatedUser, name: e.target.value })
                  }
                />
                <br />
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  id="gender"
                  value={updatedUser.gender}
                  onChange={(e) =>
                    setUpdatedUser({ ...updatedUser, gender: e.target.value })
                  }
                >
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
                  value={updatedUser.about || user?.about}
                  onChange={(e) =>
                    setUpdatedUser({ ...updatedUser, about: e.target.value })
                  }
                >
                  {user?.about}
                </textarea>
              </div>

              <div className="buttonAction">
                <Link to="/profile-account">
                  <button onClick={handleSave}>Save</button>
                </Link>
                <Link to="/">
                  <button onClick={handleLogout}>Log Out</button>
                </Link>
              </div>
            </div>
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
