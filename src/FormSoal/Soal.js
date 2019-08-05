  import React, {Component} from 'react';
import NavigationBar from '../Navbar/Navbar'
import {Link} from 'react-router-dom';
import bgImage from '../asset/background.png';
import path from '../asset/Path 782.svg'
import './Soal.css'

class Soal1 extends Component{
  render(){
    const background = {
      width:"100%",
      height:"100vh",
      backgroundSize:"cover",
      backgroundImage:`url(${bgImage})`,
      margin:"auto",
      positon: "relative"
    }
    return(
      <div>
      <NavigationBar navbartitle="Gangguan Jiwa Berat"/>
      <div style={background}>
        <div className="background-opc">
          <div className="soal-box">
            <p className="soal-text">Apakah ada anggota keluarga yang mengalami gangguan jiwa ?</p>       
            <div className="form-group button-wrapper">
              <Link to="/soal2"><button className="yes-button">Ya</button></Link>
              <Link to="/soal2"><button className="no-button">Tidak</button></Link>
            </div>
          </div>
          <img src={path} alt="" className="icon-quote"/>
        </div>
       </div>
      </div>
    );
  }
}

export default Soal1;

