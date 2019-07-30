import React, {Component} from 'react';
import NavigationBar from '../Navbar/Navbar'
import {Link} from 'react-router-dom';
class Form1 extends Component{
  render(){
    return(
      <div>
      <NavigationBar navbartitle="Keterangan Rumah Tangga"/>
        <div className="form-page-content">
          <div className="form-page-group">
            <label htmlFor="">Nama Kepala Rumah Tangga</label>
            <input 
              type="text" 
              className="form-control col-sm-11" 
              placeholder="Nama"
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">No. Kartu Keluarga</label>
            <input 
              type="text" 
              className="form-control col-sm-11"
              placeholder="00"
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">Jumlah Anggota Rumah Tangga</label>
            <input 
              type="text" 
              className="form-control col-sm-11"
              placeholder="00"
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">Banyaknya Balita(0-59)</label>
            <input 
              type="text" 
              className="form-control col-sm-11"
              placeholder="00"
            />
          </div>
          <div className="form-group">
            <Link to="/soal"><button className="btn2 primary btn">SIMPAN</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Form1;

