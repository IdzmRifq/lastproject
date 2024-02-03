import React from "react";
import "./homepage.css";
import image1 from "./Humaira1.jpeg";
import image2 from "./Humaira2.jpeg";
import image3 from "./Humaira3.jpeg";

const HomePage = () => {
  return (
    <div className="content">
      <h1 className="text">Tentang Kami</h1>
      <p>Humaira adalah tempat yang nyaman untuk menikmati kopi berkualitas tinggi dan makanan ringan lezat. Kami menyajikan berbagai jenis kopi dari biji kopi terbaik di seluruh dunia. Nikmati suasana santai sambil bekerja atau bersantai dengan teman di Humaira</p>
      <img className="foto1" src={image1} alt="" />
      <img className="foto2" src={image2} alt="" />
      <img className="foto3" src={image3} alt="" />
      <p>Tertarik dengan kami?, AYO!!! Jadi member kami</p>
      <a href="./Mitra">
        <button className="button">Daftar Member</button>
      </a>
    </div>
  );
};

export default HomePage;
