import "../components/login.css"
import { Link } from "react-router-dom"

export default function Login () {
  return (
    <div className="login">
      <form className="loginForm">
        <h2>Login ANIMU</h2>
        <div className="fill">
          <input type="text" name="email" placeholder="Email"/>
          <input type="password" name="password" placeholder="Password"/>
        </div>
        <button className="loginButton" type="submit">Login</button>
        <p>Belum ada akun? <Link to="/register">Buat akun</Link></p>
        <div className="cekPrivasi">
          <input type="checkbox" name="check"/>
          <p className="cekKeterangan">Saya telah berusia 13 tahun ke atas. Dengan login, Anda telah mengetahui 
          dan menyetujui bahwa Anda telah membaca dan menyetujui untuk terikat
          dengan Syarat Layanan dan Kebijakan Privasi
          </p>
        </div>
      </form>
    </div>
  )
}