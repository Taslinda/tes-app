  import React, {Component} from 'react';
import NavigationBar from '../Navbar/Navbar'
import bgImage from '../asset/background.png';
import path from '../asset/Path 782.svg'
import './Soal.css'

class Soal1 extends Component{
  state = {
    clicks:0,
    show:false
  }
  IncrementItem = (e) => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = (e) => {
    this.setState({ clicks: this.state.clicks - 1 });
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
      <NavigationBar navbartitle="Gangguan Jiwa Berat"/>
      <div className="soal1-style" style={background}>
        <div className="background-opc">
          <div className="soal-box">
            <div className="pertanyaan">
              <p className="soal-text">1. Apakah ada anggota keluarga yang mengalami gangguan jiwa ?</p>       
              <div className="form-group button-wrapper">
                <div className="container">
                  <input type="radio" checked="checked" name="radio"/>
                  <label htmlFor="" className="radio-yes">Iya</label>
                  <span className="checkmark"></span>
                </div>
                <div className="container radio-no">
                  <input type="radio" checked="checked" name="radio"/> 
                  <label htmlFor="" className="radio-no">Tidak</label>
                  <span className="checkmark"></span>
                </div>
              </div>
            </div>
            <div className="pertanyaan">
              <p className="soal-text">2. Apakah anggota keluarga menderita gangguan jiwa berat (Skizofrenia/Psikosis) ?</p>       
              <div className="form-group button-wrapper">
                <div className="container">
                  <input type="radio" checked="checked" name="radio"/>
                  <label htmlFor="" className="radio-yes">Iya</label>
                  <span className="checkmark"></span>
                </div>
                <div className="container radio-no">
                  <input type="radio" checked="checked" name="radio"/> 
                  <label htmlFor="" className="radio-no">Tidak</label>
                  <span className="checkmark"></span>
                </div>
              </div>
            </div>
            <div className="pertanyaan">
              <p className="soal-text">3. Apakah anggota keluarga pernah didiagnosis menderita gangguan jiwa berat (Skizofrenia/Psikosis) oleh tenaga kesehatan ?</p>       
              <div className="form-group button-wrapper">
                <div className="container">
                  <input type="radio" checked="checked" name="radio"/>
                  <label htmlFor="" className="radio-yes">Iya</label>
                  <span className="checkmark"></span>
                </div>
                <div className="container radio-no">
                  <input type="radio" checked="checked" name="radio"/> 
                  <label htmlFor="" className="radio-no">Tidak</label>
                  <span className="checkmark"></span>
                </div>
              </div>
            </div>
            <div className="pertanyaan">
              <p className="soal-text">4. Jika No.2 dan atau No.3 diatas ya, berapa anggota keluarga ?</p>       
                <div className="in-decrement">
                  <button className="btn-in-decrement" onClick={this.DecreaseItem} >-</button>
                  <input type="number" name="number" value={this.state.clicks}/>
                  <button className="btn-in-decrement" onClick={this.IncrementItem}>+</button> 
                </div>
            </div>
            <div className="pertanyaan">
              <p className="soal-text">5. Apakah pernah berobat ke rumah sakit jiwa atau tenaga kesehatan ?</p>       
              <div className="form-group button-wrapper">
                <div className="container">
                  <input type="radio" checked="checked" name="radio"/>
                  <label htmlFor="" className="radio-yes">Iya</label>
                  <span className="checkmark"></span>
                </div>
                <div className="container radio-no">
                  <input type="radio" checked="checked" name="radio"/> 
                  <label htmlFor="" className="radio-no">Tidak</label>
                  <span className="checkmark"></span>
                </div>
              </div>
            </div>
            <div className="pertanyaan">
              <p className="soal-text">6. Apakah pernah dipasung/diasingkan/dikekang atau tidakan mirip pasung ?</p>       
              <div className="form-group button-wrapper">
                <div className="container">
                  <input type="radio" checked="checked" name="radio"/>
                  <label htmlFor="" className="radio-yes">Iya</label>
                  <span className="checkmark"></span>
                </div>
                <div className="container radio-no">
                  <input type="radio" checked="checked" name="radio"/> 
                  <label htmlFor="" className="radio-no">Tidak</label>
                  <span className="checkmark"></span>
                </div>
              </div>
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

