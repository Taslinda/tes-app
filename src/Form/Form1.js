import React, {Component} from 'react'
import {Navbar} from 'react-bootstrap';
import { ValidationForm, TextInput} from "react-bootstrap4-form-validation";
import './Form1.css'
import { faChevronLeft,  faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';
import axios from 'axios'
class Form1 extends Component{
    constructor(props){
        super(props);
        this.formRef = React.createRef();
        this.state = {
            immediate:true,
            setFocusOnError:true,
            clearInputOnReset:false,
            head_name:'',
            nik:'',
            birthplace:'',
            birthdate:'',
            age:'',
            gender:'',
            religion:'',
            religions:[],
            marital_status:'',
            marital_statuses:[],
            education_status:'',
            education_statuses:[],
            job_status:'',
            job_statuses:[],
            checked:false,
            checked2:false,
            
        }
      }

      componentDidMount(){
        this.getDataReligions()
        this.getDataMartialStatuses()
        this.getDataEducationStatuses()
        this.getDataJobStatuses()
      }

      // THIS FUNCTION IS TO GET THE DATA OF BIRTHDATE
      birthdateHandler =  async(e) =>{
        await this.setState({
          birthdate:e.target.value
        })
      }
      
      // THIS FUNCTION IS TO GET THE DATA OF FEMALE RADIO BUTTON
      femaleHandler = async(e) =>{
        await this.setState({
          checked:true,
          checked2:false
        })
        if(this.state.checked){
          this.setState({
            gender:'female'
          })
        }
      }

      // THIS FUNCTION IS TO GET THE DATA OF MALE RADIO BUTTON
      maleHandler = async(e) =>{
        await this.setState({
          checked:false,
          checked2:true,
        })
        if(this.state.checked2){
          this.setState({
            gender:'male'
          })
        }      
      }

      // THIS FUNCTION IS TO GET THE DATA OF RELIGIONS
      getDataReligions = async(e) => {
        let religionsMap = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/religions`)
        let getReligion = religionsMap.data.religions.map(religion=>(
          {
            value:religion.id,
            label:religion.name
          }
        ))
        await this.setState({
          religions:getReligion
        })
      }

      // THIS FUNCTION IS TO CHANGE THE STATE OF RELIGION
      getReligion = async(e) =>{
        await this.setState({
          religion:e.target.value
        })
      }
      
      // THIS FUNCTION IS TO GET THE DATA OF MARTIAL STATUSES
      getDataMartialStatuses = async(e) =>{
        let maritalStatusesMap = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/marital_statuses`)
        let getMaritalStatuses = await maritalStatusesMap.data.maritalStatuses.map(maritalStatus => (
          {
            value:maritalStatus.id,
            label:maritalStatus.name
          }
        ))
        await this.setState({
          marital_statuses:getMaritalStatuses
        })
      }

      // THIS FUNCTION IS TO CHANGE THE STATE OF MARITAL STATUS
      getMaritalStatus = async(e) => {
        await this.setState({
          marital_status:e.target.value
        })
      }

      // THIS FUNCTION IS TO GET THE DATA OF EDUCATION STATUSES
      getDataEducationStatuses = async(e) =>{
        let educationStatusesMap = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/education_statuses`)
        let getEducationStatuses = await educationStatusesMap.data.educationStatuses.map(educationStatus => (
          {
            value:educationStatus.id,
            label:educationStatus.name
          }
        ))
        await this.setState({
          education_statuses:getEducationStatuses
        })
      }

      // THIS FUNCTION IS TO CHANGE THE STATE OF EDUCATION STATUS
      getEducationStatus = async(e) => {
        await this.setState({
          education_status:e.target.value
        })
      }

      // THIS FUNCTION IS TO GET THE DATA OF JOB STATUSES
      getDataJobStatuses = async(e) =>{
        let jobStatusesMap = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/job_statuses`)
        let getJobStatuses = await jobStatusesMap.data.jobStatuses.map(jobStatus => (
          {
            value:jobStatus.id,
            label:jobStatus.name
          }
        ))
        await this.setState({
          job_statuses:getJobStatuses
        })
      }
      
      // THIS FUNCTION IS TO CHANGE THE STATE OF JOB STATUS
      getJobStatus = async(e) => {
        await this.setState({
          job_status:e.target.value
        })
      }


      getDataForm1 = async(e) =>{
        e.preventDefault();
        const getDataKepalaKeluarga = {
          name : e.target.elements.head_name.value,
          nik : e.target.elements.nik.value,
          birthplace : e.target.elements.birthplace.value,
          birthdate : e.target.elements.birthdate.value,
          age : e.target.elements.age.value,
          religion_id : this.state.religion,
          marital_status_id : this.state.marital_status,
          highest_education_status_id : this.state.education_status,
          job_status_id :this.state.job_status,
          gender : e.target.elements.gender.value,
        }
        console.log(getDataKepalaKeluarga)
        this.props.history.push('/form2');
        // axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/households`)
        // .then(res=>console.log(res.data.households[0].head))
        // .catch(err=>console.log(err))
        // axios.post(`https://vps.carakde.id/api_takalarsehat/api/v1/residents`, getDataKepalaKeluarga)
        // .then(res=>console.log(res))
        // .catch(err=>console.log(err));

      }
   
      
    render(){
        return(
        <div>
            <Navbar className="navbar-kk">
              <Link to="/table">
                <FontAwesomeIcon icon={faChevronLeft} className="left-icon" />
              </Link>
              <h5 className="brand-kk" href="#home">Data Kepala Keluarga</h5>
              <FontAwesomeIcon icon={faEllipsisV} className="form-menu-icon" />
            </Navbar>
            <ValidationForm onSubmit={this.getDataForm1} 
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
                            name="birthplace"
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
                            type="text"
                            name="birthdate"
                            onChange={(e)=>this.birthdateHandler(e)}
                            placeholder="YYYY-MM-DD"
                            className="form-control col-sm-11 input-kk"
                            successMessage="Looks good!"
                            errorMessage="Please enter something"
                            required
                            pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"
                        />
                    </div>
                    <div className="form-group-kk">
                        <label htmlFor="">Umur</label>
                        <TextInput
                            type="number"
                            name="age"
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
                          <div 
                            className="male" 
                            onChange={this.maleHandler} 
                            style={{background: this.state.checked2? '#1BAEC9 ' : '#DCEEF5', 
                            color:this.state.checked2? 'white':'black'}} >
                            <label htmlFor="male" >Male</label>
                            <input 
                                type="radio" 
                                name="gender" 
                                id="male" 
                                value="Male" />
                          </div>
                          <div 
                            className="female"  
                            onChange={this.femaleHandler} 
                            style={{backgroundColor: this.state.checked? '#1BAEC9' : '#DCEEF5', 
                            color:this.state.checked? 'white':'black'}}>
                            <label htmlFor="female" >Female</label>
                            <input 
                                type="radio"
                                name="gender" 
                                id="female" 
                                value="Female" />
                          </div>
                        </div>
                    </div>
                    <div className="form-group-kk">
                        <label htmlFor="">Agama</label>
                        <select onChange={this.getReligion}> 
                          <option>--- Pilih Agama ---</option>
                          {this.state.religions.map(religion => 
                            <option key={religion.value} value={religion.value}>{religion.label}</option>
                          )}
                        </select>
                    </div>
                    <div className="form-group-kk">
                        <label htmlFor="">Status Perkawinan</label>
                        <select onChange={this.getMaritalStatus}>
                          <option>--- Pilih Status Perkawinan ---</option>
                          {this.state.marital_statuses.map(maritalStatus => 
                            <option key={maritalStatus.value} value={maritalStatus.value}>{maritalStatus.label}</option>
                          )}
                        </select>
                    </div>
                    <div className="form-group-kk">
                        <label htmlFor="">Status Pendidikan Tertinggi yang Ditamatkan</label>
                        <select onChange={this.getEducationStatus}>
                        <option>--- Pilih Status Pendidikan  ---</option>
                        {this.state.education_statuses.map(educationStatus => 
                          <option key={educationStatus.value} value={educationStatus.value}>{educationStatus.label}</option>
                        )}
                        </select>
                    </div>
                    <div className="form-group-kk">
                        <label htmlFor="">Status Pekerjaan</label>
                        <select onChange={this.getJobStatus}>
                        <option>--- Pilih Status Pekerjaan ---</option>
                        {this.state.job_statuses.map(jobStatus => 
                          <option key={jobStatus.value} value={jobStatus.value}>{jobStatus.label}</option>
                        )}
                        </select>
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

export default Form1;