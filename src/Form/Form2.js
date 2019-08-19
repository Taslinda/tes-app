import React, {Component} from 'react';
import './Form2.css';
import { withRouter } from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import { ValidationForm, TextInput} from "react-bootstrap4-form-validation";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChevronLeft,  faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';


class Form2 extends Component{
  constructor(props){
    super(props);
    this.formRef = React.createRef();
    this.state = {
        immediate:true,
        setFocusOnError:true,
        clearInputOnReset:false,
        province:'',
        city:'',
        district:'',
        village:'',
        hamlet:'',
        neighborhood_association:'',
        citizens_association:'',
        latitude:'',
        longitude:''
        
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

  getData1 = async(e) =>{
    e.preventDefault();
    const province = e.target.elements.province.value;
    const city = e.target.elements.city.value;
    const district = e.target.elements.district.value;
    const village = e.target.elements.village.value;
    const hamlet = e.target.elements.hamlet.value;
    const neighborhood_association = e.target.elements.neighborhood_association.value;
    const citizens_association = e.target.elements.citizens_association.value;
    const latitude = e.target.elements.latitude.value;
    const longitude = e.target.elements.longitude.value;
    const api_call = await fetch(`https://vps.carakde.id/api_takalarsehat/api/v1/households`);
    const data = await api_call.json();

    if(province&&city&&district&&village&&hamlet&&neighborhood_association&& citizens_association&&latitude&&longitude){
      console.log(data);
      this.setState({
        province:data.households[0].province_id,
        city:data.households[0].city_id,
        district:data.households[0].district_id,
        village:data.households[0].village_id,
        hamlet:data.households[0].hamlet_id,
        neighborhood_association:data.households[0].neighborhood_association,
        citizens_association:data.households[0].citizens_association,
        latitude:data.households[0].latitude,
        longitude:data.households[0].longitude,
        error:''
      })
    }
    this.props.history.push('/form3');
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
                        // defaultErrorMessage={{ required: "Please enter something."}} 
                        >
        <div className="form-page-content">
          <div className="form-page-group">
            <label htmlFor="">Provinsi</label>
            <TextInput 
              type="text" 
              name="province"
              className="form-control col-sm-11 input-text" 
              placeholder="Nama Provinsi"
              successMessage="Looks good!"
              errorMessage="Please enter something"
              required
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">Kabupaten/Kota</label>
            <TextInput 
              type="text" 
              name="city"
              className="form-control col-sm-11 input-text"
              placeholder="Kabupaten/Kota"
              successMessage="Looks good!"
              errorMessage="Please enter something"
              required
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">Kecamatan</label>
            <TextInput 
              type="text" 
              name="district"
              className="form-control col-sm-11 input-text"
              placeholder="Kecamatan"
              successMessage="Looks good!"
              errorMessage="Please enter something"
              required
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">Desa/Kelurahan</label>
            <TextInput 
              type="text" 
              name="village"
              className="form-control col-sm-11 input-text"
              placeholder="Desa/Kelurahan"
              successMessage="Looks good!"
              errorMessage="Please enter something"
              required
            />
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

