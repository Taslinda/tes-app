import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import close from '../asset/left-arrow.svg'
import {Link} from 'react-router-dom'
import './Sidebar.css'

class Sidebar extends React.Component {

  state = {
    isOpen: false
  }
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  closeMenu () {
    this.setState({menuOpen: false})
  }
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }
  render () {
    return (
      <div className="sidebar-menu">
      <Menu 
        width='85%'
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
        customCrossIcon= {false}
      >
        <h2 className="sidebar-title">{this.props.sidtitle}</h2>
        <img src={close} alt="" className="close-button" onClick={() => this.toggleMenu()}/>
        <span className="title-underline"></span>
        <Link to="/form1" onClick={() => this.closeMenu()} className="list-options">Pengenalan Tempat</Link>
        <Link to="/form2" onClick={() => this.closeMenu()} className="list-options">Keterangan Rumah  Tangga</Link>
        <Link to="/soal" onClick={() => this.closeMenu()} className="list-options">Gangguan Jiwa Berat</Link>  
        <Link to="/soal" className="list-options2">Soal No 1</Link>
        <Link to="/soal" className="list-options2">Soal No 2</Link>
        <Link to="/soal" className="list-options2">Soal No 3</Link>
        <Link to="/soal" className="list-options2">Soal No 4</Link>
        <Link to="/soal2" onClick={() => this.closeMenu()} className="list-options">Disabilitas (umur > 15 tahun)</Link>
        <Link to="/soal3" onClick={() => this.closeMenu()} className="list-options">Kesehatan Lingkungan</Link>
        <Link to="/form1" className="logout">Log Out</Link>
      </Menu>
    </div>
    );
  }
}

export default Sidebar;