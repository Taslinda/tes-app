import React, {Component} from 'react'
import {Navbar} from 'react-bootstrap';
import { ValidationForm, TextInput} from "react-bootstrap4-form-validation";
import './Form1.css'
import { faChevronLeft,  faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';

class DataIndividu extends Component{
    constructor(props){
        super(props);
        this.formRef = React.createRef();
        this.state = {
            immediate:true,
            setFocusOnError:true,
            clearInputOnReset:false,
            head_name:'',
            nik:'',
            tptlahir:'',
            tgllahir:'',
            umur:'',
            gender:'',
            agama:'',
            statusperkawinan:'',
            pendidikan:'',
            pekerjaan:'',
            buttonmale:false,
            buttonfemale:false
            
        }
      }
      getData3 = async(e) =>{
        e.preventDefault();
        const head_name = e.target.elements.head_name.value;
        const nik = e.target.elements.nik.value;
        const tptlahir = e.target.elements.tptlahir.value;
        const tgllahir = e.target.elements.tgllahir.value;
        const umur = e.target.elements.umur.value;
        const gender = this.state.gender;
        const agama = e.target.elements.agama.value;
        const statusperkawinan = e.target.elements.statusperkawinan.value;
        const pendidikan = e.target.elements.pendidikan.value;
        const pekerjaan = e.target.elements.pekerjaan.value;

        const api_call = await fetch(`https://vps.carakde.id/api_takalarsehat/api/v1/residents`);
        const data = await api_call.json();
    
        if(head_name&&nik&&tptlahir&&tgllahir&&umur&&gender&&agama&&statusperkawinan&&pendidikan&&pekerjaan){
          console.log(data);
          this.setState({
            head_name:data.residents[0].id,
            nik:data.residents[0].nik,
            tptlahir:data.residents[0].birthplace,
            tgllahir:data.residents[0].birthdate,
            umur:data.residents[0].age,
            gender:data.residents[0].gender,
            agama:data.residents[0].religion_id,
            statusperkawinan:data.residents[0].martial_status_id,
            pendidikan:data.residents[0].highest_education_status_id,
            pekerjaan:data.residents[0].job_status_id,
            error:''
          })
        }
        
        this.props.history.push('/biodatakeluarga');
      }
      button_female = () =>{
        this.setState({
          buttonfemale: (!this.state.buttonfemale),
          gender:'female'
        })
      }
      button_male = () =>{
        this.setState({
          buttonmale: (!this.state.buttonmale),
          gender:'male'
        })
      }
      getFemaleStyle(){
        return{
          background: this.state.buttonfemale? '#1BAEC9' : '#DCEEF5',
          color:this.state.buttonfemale? 'white':'black'
        }
      }
      getMaleStyle(){
        return{
          background: this.state.buttonmale? '#1BAEC9 ' : '#DCEEF5',
          color:this.state.buttonmale? 'white':'black'
        }
      }
    render(){
        return(
        <div>
            <Navbar className="navbar-kk">
              <Link to="/table">
                <FontAwesomeIcon icon={faChevronLeft} className="left-icon" />
              </Link>
              <h5 className="brand-kk" href="#home">Data Individu</h5>
              <FontAwesomeIcon icon={faEllipsisV} className="form-menu-icon" />
            </Navbar>
            <ValidationForm onSubmit={this.getData3} 
                        onErrorSubmit={this.handleErrorSubmit}
                        ref={this.formRef}
                        immediate={this.state.immediate}
                        setFocusOnError={this.state.setFocusOnError}>
                <div className="form-kk">
                    <div className="form-group-kk">
                        <label htmlFor="">Nama Responden</label>
                        <TextInput
                            type="text"
                            name="head_name"
                            className="form-control col-sm-11 input-kk"
                            placeholder="Nama Responden"
                            successMessage="Looks good!"
                            errorMessage="Please enter something"
                            required
                        />
                    </div>
                    <div className="form-group-kk">
                        <label htmlFor="">NIK</label>
                        <TextInput
                            type="number"
                            name="nik"
                            className="form-control col-sm-11 input-kk"
                            placeholder="NIK"
                            successMessage="Looks good!"
                            errorMessage="Please enter something"
                            required
                        />
                    </div>
                    <div className="form-group-kk">
                        <label htmlFor="">Tempat Lahir</label>
                        <TextInput
                            type="text"
                            name="tptlahir"
                            className="form-control col-sm-11 input-kk"
                            placeholder="Tempat Lahir"
                            successMessage="Looks good!"
                            errorMessage="Please enter something"
                            required
                        />
                    </div>
                    <div className="form-group-kk">
                        <label htmlFor="">Tanggal Lahir</label>
                        <TextInput
                            type="number"
                            name="tgllahir"
                            className="form-control col-sm-11 input-kk"
                            placeholder="Tanggal Lahir"
                            successMessage="Looks good!"
                            errorMessage="Please enter something"
                            required
                        />
                    </div>
                    <div className="form-group-kk">
                        <label htmlFor="">Umur</label>
                        <TextInput
                            type="number"
                            name="umur"
                            className="form-control col-sm-11 input-kk"
                            placeholder="Umur"
                            successMessage="Looks good!"
                            errorMessage="Please enter something"
                            required
                        />
                    </div>
                    <div className="form-group-kk">
                        <label htmlFor="">Jenis Kelamin</label>
                        <div className="kk-button-wrapper">
                          <div className="male">
                            <button onClick={this.button_male} style={this.getMaleStyle()} type="button" name="male" className="male-button">Laki-laki</button>
                          </div>
                          <div className="female">
                            <button onClick={this.button_female} style={this.getFemaleStyle()} type="button" name="female" className="female-button">Perempuan</button>
                          </div>
                        </div>
                    </div>
                    <div className="form-group-kk">
                        <label htmlFor="">Agama</label>
                        <TextInput
                            type="text"
                            name="agama"
                            className="form-control col-sm-11 input-kk"
                            placeholder="Agama"
                            successMessage="Looks good!"
                            errorMessage="Please enter something"
                            required
                        />
                    </div>
                    <div className="form-group-kk">
                        <label htmlFor="">Status Perkawinan</label>
                        <TextInput
                            type="text"
                            name="statusperkawinan"
                            className="form-control col-sm-11 input-kk"
                            placeholder="Status Perkawinan"
                            successMessage="Looks good!"
                            errorMessage="Please enter something"
                            required
                        />
                    </div>
                    <div className="form-group-kk">
                        <label htmlFor="">Status Pendidikan Tertinggi yang Ditamatkan</label>
                        <TextInput
                            type="text"
                            name="pendidikan"
                            className="form-control col-sm-11 input-kk"
                            placeholder="Status Pendidikan Tertinggi yang Ditamatkan"
                            successMessage="Looks good!"
                            errorMessage="Please enter something"
                            required
                        />
                    </div>
                    <div className="form-group-kk">
                        <label htmlFor="">Status Pekerjaan</label>
                        <TextInput
                            type="text"
                            name="pekerjaan"
                            className="form-control col-sm-11 input-kk"
                            placeholder="Status Pekerjaan"
                            successMessage="Looks good!"
                            errorMessage="Please enter something"
                            required
                        />
                    </div>
                    <div className="form-group-kk">
                        <button type="submit" className="btn primary">SIMPAN</button>
                    </div>

                </div>          
            </ValidationForm>
        </div>
        );
    }
}

export default DataIndividu;