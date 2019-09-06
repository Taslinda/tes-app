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
        <button onClick={()=>{console.log(row.id)}} className="survei-button">Detail</button> 
      </Link>
); } 


class BiodataKeluarga extends Component{
  state={
    progress:30,
    kk:'',
    head_name:'',
    hamlet_id:'',
    village_id:'',
    district_id:'',
    city_id:'',
    province_id:'',
    hamlet_name:'',
    village_name:'',
    district_name:'',
    city_name:'',
    province_name:'',
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

  componentDidMount() {
    this.getDataKeluarga()
  } 

  getDataKeluarga = async(e) =>{
    try {
      let handle = this.props.match.params
      const getDataHousehold = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/residents?household_id=${handle.value}`)
      this.setState({
          bioproducts:getDataHousehold.data.residents,
          kk:getDataHousehold.data.residents[0].household.family_card_number,
          hamlet_id:getDataHousehold.data.residents[0].household.hamlet_id,
          village_id:getDataHousehold.data.residents[0].household.village_id,
          district_id:getDataHousehold.data.residents[0].household.district_id,
          city_id:getDataHousehold.data.residents[0].household.city_id,
          province_id:getDataHousehold.data.residents[0].household.province_id,
      })

      // GET HAMLET
      const getHamlet = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/hamlets/${this.state.hamlet_id}`)
      this.setState({
        hamlet_name : getHamlet.data.hamlet.name
      })

      // GET VILLAGE
      const getVillage = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/regions/villages?id=${this.state.village_id}`)
      this.setState({
        village_name : getVillage.data.villages.name
      })

      // GET DISTRICT
      const getDistrict = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/regions/districts?id=${this.state.district_id}`)
      this.setState({
        district_name : getDistrict.data.districts.name
      })

      // GET CITY
      const getCity = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/regions/cities?id=${this.state.city_id}`)
      this.setState({
        city_name : getCity.data.cities.name
      })

      // GET PROVINCE
      const getProvince = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/regions/provinces?id=${this.state.province_id}`)
      this.setState({
        province_name : getProvince.data.provinces.name
      })
      console.log(this.state.province_name)
    } catch (error) {
      console.log(error);
    }
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
    let handle = this.props.match.params.value
    let getBioKeluarga = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/residents?household_id=${handle}`)
    this.setState({
      bioproducts:getBioKeluarga.data.residents,
      kk:getBioKeluarga.data.residents[0].household.family_card_number,
      head_name:getBioKeluarga.data.residents[0].household.head.name
    })
    // console.log(getBioKeluarga)
  }

  

  moveHandler = async(e) =>{
    const add = this.props.match.params.value
    let move = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/residents?household_id=${add}`)
    let move_value = move.data.residents[0].household_id
    // const api_call = await fetch(`https://vps.carakde.id/api_takalarsehat/api/v1/residents?household_id=${add.value}`);
    // const data = await api_call.json();
    // console.log(data.residents[0].household_id)
    this.props.history.push(`/dataindividu/${move_value}`);
  }

    render(){
      let {kk, hamlet_name, village_name, district_name, city_name, province_name} = this.state
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
                  <h1 className="Nokk">No. KK : {kk} </h1>
                </div>
                <div className="bio-wrap2">
                  <FontAwesomeIcon icon={faEdit} className="edit-icon" />
                </div>
              </div>
              <h2 className="bio-name">{this.state.head_name}</h2>
              <p className="bio-address">{hamlet_name}, {village_name} Kec. {district_name}, {city_name}, {province_name} </p>
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
                    <button 
                      onClick={this.moveHandler} 
                      className="tambah-baru">
                        <img src={image} className="tambah-baru-icon" alt=""/>Tambah Baru
                      </button>  
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