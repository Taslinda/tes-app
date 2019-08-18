import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Lottie from 'react-lottie';
import animationData from '../asset/Pemesanan-Berhasil.json'
import './LastPage.css'


class LastPage extends Component{
    
    render(){
        const defaultOptions = {
            loop: false,
            autoplay: true, 
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
      
        return(
            <div className="last-page-body">
                {/* <img src={achievement} alt="" className="achievement-style"/> */}
                <Lottie options={defaultOptions}
                width={500} height={500}
                />
                <p className="caption-text">Pengisian Data Selesai</p>
                <Link to="/"><button className="btn-last-page">Simpan</button></Link>
            </div>
            /* 1. tombol simpan checkbox sejajarkan dengan in-decrement 
                2. tombol simpan di pertanyaan 3 kasih ke tengah
                3. pake media query
                4. validasi form
            */
        );
    }
}

export default LastPage;