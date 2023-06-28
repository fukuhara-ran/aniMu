import "../components/login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login({ username, password });

      if (response) {
        const { registeredUsername, registeredPassword } = response;
        if (
          username === registeredUsername &&
          password === registeredPassword
        ) {
          console.log("Login successful!");
          navigate("/");
        } else {
          setError("Invalid username or password");
          console.log(setError);
        }
      } else {
        setError(response.error);
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login.");
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
            value={username}
            required={true}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            required={true}
            onChange={(e) => setPassword(e.target.value)}
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
