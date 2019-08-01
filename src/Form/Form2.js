import React, {Component} from 'react';
import NavigationBar from '../Navbar/Navbar'
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
      <NavigationBar navbartitle="Keterangan Rumah Tangga"/>
      <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}
                        ref={this.formRef}
                        immediate={this.state.immediate}
                        setFocusOnError={this.state.setFocusOnError}
                        defaultErrorMessage={{ required: "Please enter something."}} >
        <div className="form-page-content">
          <div className="form-page-group">
            <label htmlFor="">Nama Kepala Rumah Tangga</label>
            <TextInput 
              type="text" 
              name="kepalaRt"
              className="form-control col-sm-11 input-text" 
              placeholder="Nama"
              required
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">No. Kartu Keluarga</label>
            <TextInput 
              type="text" 
              name="kk"
              className="form-control col-sm-11 input-text"
              placeholder="00"
              required
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">Jumlah Anggota Rumah Tangga</label>
            <TextInput 
              type="text" 
              name="anggota"
              className="form-control col-sm-11 input-text"
              placeholder="00"
              required
            />
          </div>
          <div className="form-page-group">
            <label htmlFor="">Banyaknya Balita(0-59)</label>
            <TextInput 
              type="text" 
              name="balita"
              className="form-control col-sm-11 input-text"
              placeholder="00"
              required
            />
          </div>
          <div className="form-group">
            <button className="btn2 primary btn">SIMPAN</button>
          </div>
        </div>
        </ValidationForm>
      </div>
    );
  }
}

export default Form1;

