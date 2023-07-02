import "../components/Registration.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { register } from "../api/auth";

export default function Registration () {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [updatedUser, setUpdatedUser] = useState({ name: "", gender: "", about: "" });


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    try {
      const response = await register(data);
      console.log(response);
      if (response.code === 201) {
        console.log("Registration successful!");
        navigate('/');
      } else {
        setError(response.error);
        navigate('/404');
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("An error occurred during Registration.")
      navigate('/404')
    }
  };
  return (
    <>
      <div className="register">
        <form className="registerForm" method="post" onSubmit={handleSubmit}>
          <h2>Registrasi ANIMU</h2>
          <div className="fill">
            <input type="text" name="username" placeholder="Username" required={true}/>
            <input type="text" name="email" placeholder="Email" required={true}/>
            <input type="password" name="password" placeholder="Password" required={true}/>
          </div>
          <button type="submit" className="registerButton">
            Registrasi
          </button>
          <p>
          Sudah ada akun? <Link to="/login">Login</Link>
          </p>
          <div className="cekPrivasi">
            <input type="checkbox" name="check" />
            <p className="cekKeterangan">
              Saya telah berusia 13 tahun ke atas. Dengan login, anda telah
              mengetahui dan menyetujui bahwa Anda telah membaca dan menyetujui
              untuk terikat dengan Syarat Layanan dan Kebijakan Privasi
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
