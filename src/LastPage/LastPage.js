import React, {Component} from 'react';
import achievement from '../asset/achievement.svg';
import {Link} from 'react-router-dom'
import './LastPage.css'

class LastPage extends Component{
    render(){
        return(
            <div className="last-page-body">
                <img src={achievement} alt="" className="achievement-style"/>
                <p className="caption-text">Pengisian Data Selesai</p>
                <Link to="/form1"><button className="btn-last-page">Simpan</button></Link>
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