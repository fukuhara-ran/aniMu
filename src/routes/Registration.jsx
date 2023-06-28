import "../components/Registration.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { register } from "../api/auth";

export default function Registration () {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await register({ username, email, password });

      // Check for successful signup
      if (response) {
        // Redirect or perform any other action upon successful signup
        console.log("Registration successful!");
        navigate('/');
      } else {
        setError(response.error); // Set error message if signup failed
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("An error occurred during Registration."); // Set generic error message
    }
  };
  return (
    <>
      <div className="register">
        <form className="registerForm" method="post" onSubmit={handleSubmit}>
          <h2>Registrasi ANIMU</h2>
          <div className="fill">
            <input type="text" name="username" placeholder="Username" value={username} required={true}
            onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" name="email" placeholder="Email" value={email} required={true}
            onChange={((e) => setEmail(e.target.value))}/>
            <input type="password" name="password" placeholder="Password" value={password} required={true}
            onChange={(e) => setPassword(e.target.value)}/>
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
