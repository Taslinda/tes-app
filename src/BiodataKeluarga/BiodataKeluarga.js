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
  // console.log(row)
  return ( 
      <Link to={`/detaildata/${row.id}`}>
       <button className="survei-button">Detail</button> 
      </Link>
); } 


class BiodataKeluarga extends Component{
  state={
    progress:30,
    kk:'',
    head_name:'',
    bioproducts:[],
    biocolumns:[
      {
        dataField: 'nik',
        text: 'NIK'
      },
      {
        dataField: 'name',
        text: 'Nama'
      },
      {
        dataField: 'relation_to_head_of_household.name',
        text: 'Hubungan'
      },
      {
        dataField: 'Aksi',
        text: 'Aksi',
        formatter:bioFormatter
      }
    ],
    pathname:''
  }
  getDataKeluarga = async(e) =>{
    try {
      console.log(this.props)
      const handle = this.props.match.params
      const getData = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/residents?household_id=${handle.value}`)
      this.setState({
          bioproducts:getData.data.residents,
          kk:getData.data.residents[0].household.family_card_number,
          head_name:getData.data.residents[0].household.head.name
      })
      console.log(getData.data)
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    this.getDataKeluarga()
  } 

  // componentDidUpdate(prevProps){
  //   // if(this.props.location.pathname !== prevProps.location.pathname ){
  //   //   console.log("berhasil ")
  //   // }
  //   // console.log(this.props)
  //   // console.log(prevProps)
  // }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   // if(localStorage.getItem("dataForm")==='1'){
  //   //   this.getDataKeluarga()
  //   //   return
  //   // }
  //   console.log(localStorage.getItem("dataForm"))
  // }

  getBiodataKeluarga = async(e) =>{
    const handle = this.props.match.params
    console.log(handle)
    axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/residents?household_id=${handle.value}`).then(response=>{
        this.setState({
          bioproducts:response.data.residents,
          kk:response.data.residents[0].household.family_card_number,
          head_name:response.data.residents[0].household.head.name
        })
        // console.log(this.state.bioproducts);
    })
  }

  

  moveHandler = async(e) =>{
    const add = this.props.match.params
    const api_call = await fetch(`https://vps.carakde.id/api_takalarsehat/api/v1/residents?household_id=${add.value}`);
    const data = await api_call.json();
    console.log(data.residents[0].household_id)
    this.props.history.push(`/dataindividu/${data.residents[0].household_id}`);
  }

    render(){

        return(
          <div>
            <Navbar className="navbar-biodata">
              <h5 className="brand-biodata" href="#home">Biodata Keluarga</h5>
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
                  <h1 className="Nokk">No. KK : {this.state.kk}</h1>
                </div>
                <div className="bio-wrap2">
                  <FontAwesomeIcon icon={faEdit} className="edit-icon" />
                </div>
              </div>
              <h2 className="bio-name">{this.state.head_name}</h2>
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
                    <button className="bio-start">Mulai</button>
                  </Link>
                </div>
              </div>
              <hr/>
              <div className="bio-wrapper3">
                <div className="bio-wrap3-1">
                  <h1 className="anggota-keluarga">Anggota Keluarga</h1>
                </div>
                <div className="bio-wrap3-2">
                    <button onClick={this.moveHandler} className="tambah-baru"><img src={image} className="tambah-baru-icon" alt=""/>Tambah Baru</button>  
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