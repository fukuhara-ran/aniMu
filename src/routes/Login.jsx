import "../components/login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";

export default function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    try {
      const response = await login(data);
      console.log(response);
      if (response.ok) {
        console.log("Login successful!");
        navigate('/');
      } else {
        setError(response.error);
        navigate('/404');
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during Login.")
    }
  };

  return (
    <div className="login">
      <form className="loginForm" method="post" onSubmit={handleSubmit}>
        <h2>Login ANIMU</h2>
        <div className="fill">
          <input
            type="text"
            name="username"
            placeholder="Username"
            required={true}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required={true}
          />
        </div>
        <button className="loginButton" type="submit">
          Login
        </button>
        <p>
          Belum ada akun? <Link to="/register">Buat akun</Link>
        </p>
        <div className="cekPrivasi">
          <input type="checkbox" name="check" />
          <p className="cekKeterangan">
            Saya telah berusia 13 tahun ke atas. Dengan login, Anda telah
            mengetahui dan menyetujui bahwa Anda telah membaca dan menyetujui
            untuk terikat dengan Syarat Layanan dan Kebijakan Privasi
          </p>
        </div>
      </form>
    </div>
  );
}
