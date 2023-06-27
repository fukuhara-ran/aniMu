import "../components/Registration.css"
import { Link, redirect, Form } from "react-router-dom"
import { Register } from "../api/auth";

export const signupAction = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  const response = await Register(data);
  const body = await response.json();
  return redirect("/");
};

export default function Registration () {
  return (
    <>
      <div className="register">
        <Form className="registerForm" method="post">
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
        </Form>
      </div>
    </>
  );
}
