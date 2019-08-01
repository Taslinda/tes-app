import React, {Component} from 'react';
import './Form.css';
import NavigationBar from '../Navbar/Navbar';
import { ValidationForm, TextInput} from "react-bootstrap4-form-validation";
class Form1 extends Component{
  constructor(props){
    super(props);
    // If you want to use the reset state function, you need to have a reference to the ValidationForm component
    //If your React < 16.3, check https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
    this.formRef = React.createRef();
    this.state = {
        immediate:true,
        setFocusOnError:true,
        clearInputOnReset:false
    }
  }

  handleSubmit = (e, formData, inputs) => {
      e.preventDefault();
      console.log(formData);
      alert(JSON.stringify(formData, null, 2));
  }

  handleErrorSubmit = (e,formData, errorInputs) => {
      console.log(e,formData, errorInputs)
  }

  render(){
    return(
      <div>
        <NavigationBar navbartitle="Pengenalan Tempat"/>
        <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}
                        ref={this.formRef}
                        immediate={this.state.immediate}
                        setFocusOnError={this.state.setFocusOnError}
                        defaultErrorMessage={{ required: "Please enter something."}} >
        <div className="form-page-content">
          <div className="form-page-group">
            <label htmlFor="">Provinsi</label>
            <TextInput 
              type="text" 
              name="provinsi"
              className="form-control col-sm-11 input-text" 
              placeholder="Nama Provinsi"
              required
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">Kabupaten/Kota</label>
            <TextInput 
              type="text" 
              name="kabupatenkota"
              className="form-control col-sm-11 input-text"
              placeholder="Kabupaten/Kota"
              required
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">Kecamatan</label>
            <TextInput 
              type="text" 
              name="kecamatan"
              className="form-control col-sm-11 input-text"
              placeholder="Kecamatan"
              required
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">Desa/Kelurahan</label>
            <TextInput 
              type="text" 
              name="desa"
              className="form-control col-sm-11 input-text"
              placeholder="Desa/Kelurahan"
              required
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">Dusun</label>
            <TextInput 
              type="text" 
              name="dusun"
              className="form-control col-sm-11 input-text"
              placeholder="Dusun"  
              required
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">RT/RW</label>
            <TextInput 
              type="text" 
              name="rtrw"
              className="form-control col-sm-11 input-text"
              placeholder="RT/RW"  
              required
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">GPS Koordinat</label>
            <TextInput 
              type="text" 
              name="gps"
              className="form-control col-sm-11 input-text"
              placeholder="Koordinat Lokasi"
              required
            />
          </div>
          <div className="form-group">
            <button className="btn primary">SIMPAN</button>
          </div>
        </div>
        </ValidationForm>
      </div>
    );
  }
}

export default Form1;

