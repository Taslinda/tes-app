import React, {Component} from 'react';
import NavigationBar from '../Navbar/Navbar'
import {Link} from 'react-router-dom';
import bgImage from '../asset/background.png';
import path from '../asset/Path 782.svg'
import './Soal2.css'

class Soal2 extends Component{
  state = {
    clicks:0,
    clicks2:0,
    clicks3:0,
    show:false,
    show2:false,
    show3:false
  }
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  IncrementItem2 = () => {
    this.setState({ clicks2: this.state.clicks2 + 1 });
  }
  DecreaseItem2 = () => {
    this.setState({ clicks2: this.state.clicks2 - 1 });
  }
  IncrementItem3 = () => {
    this.setState({ clicks3: this.state.clicks3 + 1 });
  }
  DecreaseItem3 = () => {
    this.setState({ clicks3: this.state.clicks3 - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }
  Toggle2Click = () => {
    this.setState({ show2: !this.state.show2 });
  }
  Toggle3Click = () => {
    this.setState({ show3: !this.state.show3 });
  }
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
      <NavigationBar navbartitle="Disabilitas Umur > 15 Tahun"/>
      <div style={background}>
        <div className="background-opc">
          <div className="soal2-box">
            <p className="soal-text2">Apa jenis kecacatan yang dialami anggota keluarga dan berapa banyak yang menderita kecacatan ?</p>   
            <div className="wrapper">

              <div className="grid1">
                <label className="checkbox-button">
                    <input onClick={this.ToggleClick} type="checkbox" className="checkbox-button__input" id="choice1-1" name="choice1"/>
                    <span className="checkbox-button__control"></span>
                    <span htmlFor="" className="checkbox-button__label">Buta (Tuna Netra)</span>
                </label>
              </div>
              <div className="grid2">
                {
                  this.state.show && (
                    <div className="in-decrement">
                      <button className="btn-in-decrement" onClick={this.DecreaseItem}>-</button>
                      <p className="text-in-decrement">{this.state.clicks}</p>
                      <button className="btn-in-decrement" onClick={this.IncrementItem}>+</button> 
                    </div>
                  )
                }
              </div>
              <div className="grid3">
              <label className="checkbox-button2">
                    <input onClick={this.Toggle2Click} type="checkbox" className="checkbox-button__input" id="choice1-1" name="choice1"/>
                    <span className="checkbox-button__control"></span>
                    <span htmlFor="" className="checkbox-button__label">Tuli (Tuna Rungu)</span>
                </label>
              </div>
              <div className="grid4">
                {
                  this.state.show2 && (
                    <div className="in-decrement2">
                      <button className="btn-in-decrement" onClick={this.DecreaseItem2}>-</button>
                      <p className="text-in-decrement">{this.state.clicks2}</p>
                      <button className="btn-in-decrement" onClick={this.IncrementItem2}>+</button> 
                    </div>
                  )
                }
              </div>
              <div className="grid5">
                <label className="checkbox-button3">
                      <input onClick={this.Toggle3Click} type="checkbox" className="checkbox-button__input" id="choice1-1" name="choice1"/>
                      <span className="checkbox-button__control" style={{marginLeft:'9px'}}></span>
                      <span htmlFor="" className="checkbox-button__label">Bisu (Tuna Wicara)</span>
                  </label>
                </div>
              <div className="grid6">
              {
                this.state.show3 && (
                  <div className="in-decrement3">
                    <button className="btn-in-decrement" onClick={this.DecreaseItem3}>-</button>
                    <p className="text-in-decrement">{this.state.clicks3}</p>
                    <button className="btn-in-decrement" onClick={this.IncrementItem3}>+</button> 
                  </div>
                  )
                }
              </div>
            </div>
            {/* <div className="form-group soal2-options">
              <br/> 
            </div> */}
            <Link to="/soal3"><button className="button save-button">Simpan</button></Link>
          </div>
          <img src={path} alt="" className="icon-quote"/>
        </div>
       </div>
      </div>
    );
  }
}

export default Soal2;

