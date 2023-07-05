import React from 'react';
import logo from "../assets/ANIMU_RILL2.png";
import logodiscussion from "../assets/discusion.png";
import logostayuptodate from "../assets/stayuptodate.png";
import "../components/Aboutus.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Table = () => {
  const data = [
    { nim: '21.11.4352', name: 'Reksa Panduasa', contri: 'FullStack Web, Figma Editor, dan Project Manager' },
    { nim: '21.11.4337', name: 'Zulfa Fakaha', contri: 'FrontEnd Web' },
    { nim: '21.11.4338', name: 'Kenedi Fagus Pradana', contri: 'FrontEnd Web' },
    { nim: '21.11.4361', name: 'Ahmed Ibnu Aprianto', contri: 'Figma Editor and FrontEnd Web' },
    { nim: '21.11.4349', name: 'Nur Fadhlur Rahman', contri: 'FrontEnd Web' },
    { nim: '21.11.4360', name: 'Zulaicho Oktafreza Wardana', contri: 'Figma Editor' },
    { nim: '21.11.4348', name: 'Rofinus Fernando Kasiasi', contri: 'Figma Editor' },
  ];

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>NAMA</th>
            <th>NIM</th>
            <th>CONTRIBUTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.nim}</td>
              <td>{item.contri}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Aboutus = () => {
  return (
    <>
      {/* <Header /> */}
      <div>
        <br />
        <br />
        <br />
        <br />
        <h1 className='head'>About Us</h1>
        <Table />
      </div>
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
};

export default Aboutus;
