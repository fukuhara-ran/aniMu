import "../components/Registration.css"
import { Link } from "react-router-dom"
import { Register } from "../api/auth";

export default function Registration () {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const response = await Register(data);
    const body = await response.json();
    // Redirect logic here
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
          <button className="registerButton" type="submit">
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
