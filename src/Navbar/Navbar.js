import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import menu from '../asset/menu-button.svg'
import './Navbar.css';

class NavigationBar extends Component{

    render(){
        return(
            <Navbar className="form-page-navbar">
                <Sidebar sidtitle={this.props.navbartitle}></Sidebar>
                <img src={menu} alt="" className="menu-style"/>
                <h5 className="form-page-brand" href="#home">{this.props.navbartitle}</h5>
            </Navbar>
        )
    }
}

export default NavigationBar;