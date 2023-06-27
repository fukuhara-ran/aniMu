import Footer from "../components/Footer";
// import { Link } from "react-router-dom";
import '../components/ProfileAccount.css'
import Photo from '../assets/basic-photo-profile.png'
import Header from "../components/Header";

export const ProfileAccount = () =>{
    return(
        <>
        <Header/>
        <section className="containerProfile">

            <div className="photoProfile">
                <img src={Photo} alt="user photo" />
            </div>

            <div className="userBiodata">
                <div className="inputField">
                    <h4 className="subHeadingProfile">Person Profile</h4>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input type="text" id="name"/>
                    <br />

                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender">
                        <option value="not specified">Not Specified</option>
                        <option value="man">Man</option>
                        <option value="woman">Woman</option>
                    </select>
                    <br />

                    <label htmlFor="aboutMe">About Me</label><br />
                    <textarea name="aboutMe" id="aboutMe" cols="80" rows="6"></textarea>
                </div>

                <div className="buttonAction">
                    <button>Save</button>
                    <button>Log Out</button>
                </div>
            </div>
        </section>

        <Footer/>
        </>
    )
};

// Home.propTypes = {
//     top: PropTypes.any.isRequired,
//     recent: PropTypes.any.isRequired,
//     eps: PropTypes.any.isRequired,
//   };