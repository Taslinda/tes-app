import React, {Component} from 'react';
import NavigationBar from '../Navbar/Navbar'
import {Link} from 'react-router-dom';
import styled from 'styled-components'
// import InputRange from 'react-input-range';
import bgImage from '../asset/background.png';
import path from '../asset/Path 782.svg'
import './Soal3.css'
import 'react-input-range/lib/css/index.css';


const sliderThumbStyles = (props) => (`
  width: 40px;
  height:40px;
  cursor:pointer;
  background-color:#1BAEC9;
  border-radius: 50%;
  @media (min-width:1024px){
    width: 20px;
    height:20px;
    cursor:pointer;
    background-color:#1BAEC9;
    border-radius: 50%;
  }
`)

const Styles = styled.div`
  align-items:center;
  color:#333;
  
  .slider{
    flex:6;
    -webkit-appearance:none;
    width: 500px;
    height: 10px;
    border-radius:5px;
    background:#005083;
    outline:none;

    &::-webkit-slider-thumb{
        -webkit-appearance:none;
        appearance:none;
        ${props=>sliderThumbStyles(props)}
    }
    &::-moz-range-thumb{
      ${props=>sliderThumbStyles(props)}
    }
  }

  @media (min-width:1024px){
    align-items:center;
    color:#333;
  
  .slider{
    flex:6;
    -webkit-appearance:none;
    width: 300px;
    height: 5px;
    border-radius:5px;
    background:#005083;
    outline:none;
    margin-left:-1.5em;

    &::-webkit-slider-thumb{
        -webkit-appearance:none;
        appearance:none;
        ${props=>sliderThumbStyles(props)}
    }
    &::-moz-range-thumb{
      ${props=>sliderThumbStyles(props)}
    }
  }
  } 
`;
class Soal2 extends Component{
  constructor(props) {
    super(props);
 
    this.state = {
      value: 0
    };
  }

  handlerChange = (e) => this.setState({value:e.target.value})
  render(){
    const background = {
      width:"100%",
      height:"100vh",
      backgroundSize:"cover",
      backgroundImage:`url(${bgImage})`,
      margin:"auto",
      positon: "relative",
    }
    return(
      <Styles opacity={this.state.value>10? (this.state.value/255):.1} color={this.props.color}>
      <div>
        <NavigationBar navbartitle="Kesehatan Lingkungan"/>
      <div style={background}>
        <div className="background-opc">
          <div className="soal3-box">
            <p className="soal3-text">Berapa lama waktu yang diperlukan untuk memperoleh air kebutuhan minum ?</p> <br/>    
            <div className="form-group">
              <input 
              type="range" 
              min={0} 
              max={60}
              step={20}
              value={this.state.value}
              className="slider"
              onChange={this.handlerChange} 
              />
                <p className="minutes-style">{this.state.value}</p>
                <p className="menit">Menit</p>
              <Link to="/selesai"><button>Simpan</button></Link>
            </div>
          </div>
          <img src={path} alt="" className="icon-quote"/>
        </div>
       </div>
      </div>
      </Styles>
    );
  }
}

export default Soal2;

