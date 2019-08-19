import React,{Component} from 'react'
import {Navbar, Dropdown, ProgressBar} from 'react-bootstrap';
import {faEllipsisV, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./BiodataKeluarga.css"
import axios from 'axios'; 
import image from "../asset/add-friend.svg"
import BootstrapTable from 'react-bootstrap-table-next'
import {Link} from 'react-router-dom';

function bioFormatter(cell, row, rowIndex, formatExtraData) { 
  return ( 
      <div>
       <button className="survei-button">Survei</button> 
      </div> 
); } 


class BiodataKeluarga extends Component{
  state={
    progress:30,
    bioproducts:[],
    biocolumns:[
      {
        dataField: 'nik',
        text: 'NIK'
      },
      {
        dataField: 'id',
        text: 'Nama'
      },
      {
        dataField: 'relation_to_head_of_household_id',
        text: 'Hubungan'
      },
      {
        dataField: 'Aksi',
        text: 'Aksi',
        formatter:bioFormatter
      }
    ]
  }

  componentDidMount(){
    axios.get('https://vps.carakde.id/api_takalarsehat/api/v1/residents').then(response=>{
        this.setState({
          bioproducts:response.data.residents
      })
    })
  }
    render(){
        return(
          <div>
            <Navbar className="navbar-biodata">
              <h5 className="brand-biodata" href="#home">Data Kepala Keluarga</h5>
              <Dropdown>
                <Dropdown.Toggle>
                  <FontAwesomeIcon icon={faEllipsisV} className="biodata-menu-icon" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/table" className="item-list">User</Dropdown.Item>
                  <Dropdown.Item href="/table" className="item-list">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar>
            <div className="biodata-body">
              <div className="bio-wrapper">
                <div className="bio-wrap1">
                  <h1 className="Nokk">No. KK : 1234563524172</h1>
                </div>
                <div className="bio-wrap2">
                  <FontAwesomeIcon icon={faEdit} className="edit-icon" />
                </div>
              </div>
              <h2 className="bio-name">Hendra</h2>
              <p className="bio-address">Dusun Bilaji, Kec. Barombong, Kab.Gowa, Provinsi Sulawesi Selatan</p>
              <hr/>
              <h1 className="survei-keluarga">Survei Keluarga</h1>
              <div className="bio-wrapper2">
                <div className="bio-wrap2-1">
                  <ProgressBar now={this.state.progress} label={100} srOnly />
                </div>
                <div className="bio-wrap2-2">
                  <p className="presentase">{this.state.progress}%</p>
                </div>
                <div className="bio-wrap2-3">
                  <Link to="/soal">
                    <button className="bio-start">  Mulai</button>
                  </Link>
                </div>
              </div>
              <hr/>
              <div className="bio-wrapper3">
                <div className="bio-wrap3-1">
                  <h1 className="anggota-keluarga">Anggota Keluarga</h1>
                </div>
                <div className="bio-wrap3-2">
                  <Link to="/dataindividu">
                    <button className="tambah-baru"><img src={image} className="tambah-baru-icon" alt=""/>Tambah Baru</button>  
                  </Link>
                </div>
              </div>
              <BootstrapTable 
                    striped
                    borderless
                    keyField='id' 
                    data={ this.state.bioproducts } 
                    columns={ this.state.biocolumns }/>
            </div>
          </div>
        )
    }
}

export default BiodataKeluarga;