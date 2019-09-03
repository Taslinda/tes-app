import React, {Component} from 'react'
import {Navbar} from 'react-bootstrap';
import { ValidationForm, TextInput} from "react-bootstrap4-form-validation";
import './Form1.css'
import { faChevronLeft,  faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';
import axios from 'axios'
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
            birthplace:'',
            birthdate:'',
            age:'',
            gender:'',
            religion:'',
            religions:[],
            relation:'',
            relations:[],
            marital_status:'',
            marital_statuses:[],
            education_status:'',
            education_statuses:[],
            job_status:'',
            job_statuses:[],
            checked:false,
            checked2:false 
        }
      }

      componentDidMount(){
        this.getDataReligions()
        this.getDataRelations()
        this.getDataMaritalStatuses()
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
      
      // THIS FUNCTION IS TO GET THE DATA OF RELATION_TO_HEAD_OF_HOUSEHOLDS
      getDataRelations = async(e) =>{
        let relationsMap = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/relation_to_head_of_households`)
        let getRelationStatuses = await relationsMap.data.relationToHeadOfHouseholds.map(relationStatus => (
          {
            value:relationStatus.id,
            label:relationStatus.name
          }
        ))
        await this.setState({
          relations:getRelationStatuses
        })
      }

      // THIS FUNCTION IS TO CHANGE THE STATE OF RELATION_TO_HEAD_OF_HOUSEHOLDS
      getRelation = async(e) =>{
        await this.setState({
          relation:e.target.value
        })
      }

      // THIS FUNCTION IS TO GET THE DATA OF MARTIAL STATUSES
      getDataMaritalStatuses = async(e) =>{
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


      // SUBMIT CONTROLLER
      getData3 = async(e) =>{
        e.preventDefault();
        const serveport = {
            name : e.target.elements.head_name.value,
            nik : e.target.elements.nik.value,
            birthplace : e.target.elements.birthdate.value,
            birthdate : e.target.elements.birthdate.value,
            age : e.target.elements.age.value,
            religion_id: this.state.religion,
            relation_to_head_of_household_id : this.state.relation,
            marital_status_id : this.state.marital_status,
            highest_education_status_id : this.state.education_status,
            job_status_id :this.state.job_status,
            gender : e.target.elements.gender.value,
            
        }
        console.log("head:", serveport.name)
        console.log("nik:", serveport.nik)
        console.log("birthplace:", serveport.birthplace)
        console.log("birthdate:", serveport.birthdate)
        console.log("age:", serveport.age)
        console.log("gender:", serveport.gender)
        console.log("religion:", serveport.religion_id)
        console.log("relation:", serveport.relation_to_head_of_household)
        console.log("marital_status:", serveport.marital_status_id)
        console.log("education_status:", serveport.highest_education_status_id)
        console.log("job_status:", serveport.job_status_id)

        const thisvalue= this.props.match.params;       
        localStorage.setItem("dataForm", "1")
        axios.post(`https://vps.carakde.id/api_takalarsehat/api/v1/residents?household_id=${thisvalue.addvalue}`,serveport)
        .then(res => console.log(res.data)).catch(err=>console.log(err));
        // this.props.history.push(`/biodatakeluarga/${back_to_family_data}`);
        this.props.history.push(`/biodatakeluarga/${thisvalue.addvalue}`);
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
                            // onChange={this.handleChange}
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
                            // onChange={this.handleChange}
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
                            name="birthdate"
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
                            id="birthdate"
                            name="birthdate"
                            onChange={(e)=>this.birthdateHandler(e)}
                            className="form-control col-sm-11 input-kk"
                            placeholder="YYYY-MM-DD"
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
                            // onChange={this.handleChange}
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
                        <label htmlFor="">Hubungan dengan Kepala Rumah Tangga</label>
                        <select onChange={this.getRelation}>
                          <option>--- Pilih Status Hubungan ---</option>
                          {this.state.relations.map(relation => 
                            <option key={relation.value} value={relation.value}>{relation.label}</option>
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

export default DataIndividu;