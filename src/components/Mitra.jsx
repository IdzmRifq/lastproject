import React, { useState } from 'react';
import './mitra.css'; 

function Form() {
  const [formData, setFormData] = useState({
    nama: '',
    tanggalLahir: '',
    nomorKontak: '',
    alamat: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      nama: '',
      tanggalLahir: '',
      nomorKontak: '',
      alamat: ''
    });
    alert('Selamat anda telah menjadi bagian dari kami.');
  };

  return (
    <div>
      <h1 className='text'>Silahkan daftar terlebih dahulu!</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nama">Nama:</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tanggalLahir">Tanggal Lahir:</label>
          <input
            type="date"
            id="tanggalLahir"
            name="tanggalLahir"
            value={formData.tanggalLahir}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nomorKontak">Nomor Kontak:</label>
          <input
            type="text"
            id="nomorKontak"
            name="nomorKontak"
            value={formData.nomorKontak}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="alamat">Alamat:</label>
          <textarea
            id="alamat"
            name="alamat"
            value={formData.alamat}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
