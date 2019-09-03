import React, {Component} from 'react';
import './Form2.css';
import { withRouter } from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import { ValidationForm, TextInput} from "react-bootstrap4-form-validation";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChevronLeft,  faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import axios from 'axios'


class Form2 extends Component{
  constructor(props){
    super(props);
    this.formRef = React.createRef();
    this.state = {
        immediate:true,
        setFocusOnError:true,
        clearInputOnReset:false,
        province:11,
        city:'',
        district:'',
        village:'',
        hamlet:'',
        neighborhood_association:'',
        citizens_association:'',
        latitude:'',
        longitude:'',
        provinsi:[],
        cities:[],
        districts:[],
        villages:[]
        
    }
  }
  handleSubmit = (e, formData, inputs) => {
      e.preventDefault();
      console.log(formData);
      this.props.history.push('/form2');
      // alert(JSON.stringify(formData, null, 2));
  }
  handleErrorSubmit = (e,formData, errorInputs) => {
      console.log(e,formData, errorInputs);
  }

  componentDidMount(){
    this.getDataProvinces()
  }

  // THIS FUNCTION TO GET PROVINCES DATA
  getDataProvinces = async(e) =>{
    let provincesMap = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/regions/provinces`)
    let getProvince = await provincesMap.data.provinces.map(province => (
      {
        value:province.id,
        label:province.name
      }
      ))
    await this.setState({
      provinsi:getProvince
    })
    
  }

  // THIS FUNCTION TO CHANGE THE STATE OF PROVINCE
  getProvince = async(e) =>{
    await this.setState({
      province:e.target.value
    })
    console.log(this.state.province)
    this.getDataCities()
  }

  // THIS FUNCTION TO GET CITIES DATA
  getDataCities = async(e) =>{
    let provinceId = this.state.province;
    let citiesMap = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/regions/provinces?id=${provinceId}`)
    let getCity = await citiesMap.data.provinces.cities.map(city => (
      {
        value:city.id,
        label:city.name
      }
      ))
    await this.setState({
      cities:getCity
    })
  }

  // THIS FUNCTION TO CHANGE THE STATE OF CITY
  getCitie = async(e) =>{
    await this.setState({
      city:e.target.value
    })
    console.log(this.state.city)
    this.getDataDistricts()
  }

  // THIS FUNCTION TO GET DISTRICTS DATA
  getDataDistricts = async(e) =>{
    let cityId = this.state.city;
    let districtsMap = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/regions/cities?id=${cityId}`)
    let getDistrict = await districtsMap.data.cities.districts.map(district => (
      {
        value:district.id,
        label:district.name
      }
      ))
    this.setState({
      districts:getDistrict
    })
  }

  // THIS FUNCTION TO CHANGE THE STATE OF DISTRICT
  getDistrict = async(e) =>{
    await this.setState({
      district:e.target.value
    })
    this.getDataVillages()
  }

  // THIS FUNCTION TO GET VILLAGES DATA
  getDataVillages = async(e) =>{
    let districtId = this.state.district;
    let villagesMap = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/regions/districts?id=${districtId}`)
    let getVillage = await villagesMap.data.districts.villages.map(village => (
      {
        value:village.id,
        label:village.name
      }
      ))
    this.setState({
      villages:getVillage
    })
  }

  // THIS FUNCTION TO CHANGE THE STATE OF VILLAGE
  getVillage = async(e) =>{
    await this.setState({
      village:e.target.value
    })
  }
  getData1 = async(e) =>{
    e.preventDefault();
    const getKeluarga = {
      name: e.target.elements.head_of_family.value,
      nokk: e.target.elements.family_card_number.value,
      jmlangg: e.target.elements.number_of_family_members.value,
      jmlbayi:e.target.elements.number_of_toddlers.value,
      province : this.state.province,
      city : e.target.elements.city.value,
      district : e.target.elements.district.value,
      village : e.target.elements.village.value,
      hamlet : e.target.elements.hamlet.value,
      neighborhood_association : e.target.elements.neighborhood_association.value,
      citizens_association : e.target.elements.citizens_association.value,
      latitude : e.target.elements.latitude.value,
      longitude : e.target.elements.longitude.value,
    }

    console.log(getKeluarga)

  }
  render(){
    return(
      <div>
        <Navbar className="navbar-kk">
              <Link to="/table">
                <FontAwesomeIcon icon={faChevronLeft} className="left-icon" />
              </Link>
              <h5 className="brand-kk" href="#home">Pengenalan Tempat</h5>
              <FontAwesomeIcon icon={faEllipsisV} className="form-menu-icon" />
            </Navbar>
        <ValidationForm onSubmit={this.getData1} 
                        onErrorSubmit={this.handleErrorSubmit}
                        ref={this.formRef}
                        immediate={this.state.immediate}
                        setFocusOnError={this.state.setFocusOnError}
                        >
        <div className="form-page-content">
          <div className="form-page-group">
            <label htmlFor="">Nama Kepala Rumah Tangga</label>
            <TextInput 
              type="text" 
              name="head_of_family"
              className="form-control col-sm-11 input-text" 
              placeholder="Nama"
              successMessage="Looks good!"
              errorMessage="Please enter something"
              required
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">No. Kartu Keluarga</label>
            <TextInput 
              type="number" 
              name="family_card_number"
              className="form-control col-sm-11 input-text"
              placeholder="00"
              successMessage="Looks good!"
              errorMessage="Please enter something"
              required
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">Jumlah Anggota Rumah Tangga</label>
            <TextInput 
              type="number" 
              name="number_of_family_members"
              className="form-control col-sm-11 input-text"
              placeholder="00"
              successMessage="Looks good!"
              errorMessage="Please enter something"
              required
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">Banyaknya Balita(0-59)</label>
            <TextInput 
              type="number" 
              name="number_of_toddlers"
              className="form-control col-sm-11 input-text"
              placeholder="00"
              successMessage="Looks good!"
              errorMessage="Please enter something"
              required
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">Provinsi</label>
            <select onChange={this.getProvince}>
              <option>--- Pilih Provinsi ---</option>
              {this.state.provinsi.map(province => 
                <option key={province.value} value={province.value}>{province.label}</option>
              )}
            </select>
          </div>
          <div className="form-page-group">
            <label htmlFor="">Kabupaten/Kota</label>
            <select onChange={this.getCitie}>
              <option>--- Pilih Kabupaten/Kota ---</option>
              {this.state.cities.map(city => 
                <option key={city.value} value={city.value}>{city.label}</option>
              )}
            </select>
          </div>
          <div className="form-page-group">
            <label htmlFor="">Kecamatan</label>
            <select onChange={this.getDistrict}>
              <option>--- Pilih Kecamatan ---</option>
              {this.state.districts.map(district => 
                <option key={district.value} value={district.value}>{district.label}</option>
              )}
            </select>
          </div>
          <div className="form-page-group">
            <label htmlFor="">Desa/Kelurahan</label>
            <select onChange={this.getVillage}>
              <option>--- Pilih Desa/Kelurahan ---</option>
              {this.state.villages.map(village => 
                <option key={village.value} value={village.value}>{village.label}</option>
              )}
            </select>
          </div>
          <div className="form-page-group">
            <label htmlFor="">Dusun</label>
            <TextInput 
              type="text" 
              name="hamlet"
              className="form-control col-sm-11 input-text"
              placeholder="Dusun"  
              successMessage="Looks good!"
              errorMessage="Please enter something"
              required
            />
          </div>
          <div className="form-page-wrapper">
            <div className="label">
              <label htmlFor="">RT/RW</label>
            </div>
            <div></div>
            <div className="input-control">
              <TextInput 
                type="number" 
                name="neighborhood_association"
                className="form-control col-sm-11 input-double input-double-style"
                placeholder="RT"  
                successMessage="Looks good!"
                errorMessage="Please enter something"
                required
              />
            </div>
            <div>
              <TextInput 
                type="number" 
                name="citizens_association"
                className="form-control col-sm-11 input-double"
                placeholder="RW"  
                successMessage="Looks good!"
                errorMessage="Please enter something"
                required
              />
            </div>
            <div className="label">
              <label htmlFor="">GPS Koordinat</label>
            </div>
            <div></div>
            <div className="input-control">
              <TextInput 
                type="text" 
                name="latitude"
                className="form-control col-sm-11 input-double input-double-style"
                placeholder="Latitude"
                successMessage="Looks good!"
                errorMessage="Please enter something"
                required
              />
            </div>
            <div>
              <TextInput 
                type="text" 
                name="longitude"
                className="form-control col-sm-11 input-double"
                placeholder="Longitude"
                successMessage="Looks good!"
                errorMessage="Please enter something"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn primary form2-button">SIMPAN</button>
          </div>
        </div>
        </ValidationForm>
      </div>
    );
  }
}

export default withRouter(Form2);

