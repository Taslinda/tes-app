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
        );
    }
}

export default LastPage;