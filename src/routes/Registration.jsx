import "../components/Registration.css"
import { Link } from "react-router-dom"

export const Registration = () => {
  return (
    <>
      <div className="register">
        <form className="registerForm">
          <h2>Registrasi ANIMU</h2>
          <div className="fill">
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="password" placeholder="Konfirmasi Password" />
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
};
