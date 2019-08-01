import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Form.css';
import NavigationBar from '../Navbar/Navbar';
class Form1 extends Component{
  render(){
    return(
      <div>
        <NavigationBar navbartitle="Pengenalan Tempat"/>
        <div className="form-page-content">
          <div className="form-page-group">
            <label htmlFor="">Provinsi</label>
            <input 
              type="text" 
              className="form-control col-sm-11" 
              placeholder="Nama Provinsi"
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">Kabupaten/Kota</label>
            <input 
              type="text" 
              className="form-control col-sm-11 col-sm-6"
              placeholder="Kabupaten/Kota"
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">Kecamatan</label>
            <input 
              type="text" 
              className="form-control col-sm-11"
              placeholder="Kecamatan"
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">Desa/Kelurahan</label>
            <input 
              type="text" 
              className="form-control col-sm-11"
              placeholder="Desa/Kelurahan"
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">Dusun</label>
            <input 
              type="text" 
              className="form-control col-sm-11"
              placeholder="Dusun"  
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">RT/RW</label>
            <input 
              type="text" 
              className="form-control col-sm-11"
              placeholder="RT/RW"  
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">GPS Koordinat</label>
            <input 
              type="text" 
              className="form-control col-sm-11"
              placeholder="Koordinat Lokasi"
            />
          </div>
          <div className="form-group">
            <Link to="/form2"><button className="btn primary">SIMPAN</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Form1;

