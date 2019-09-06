import React, {Component} from 'react'
import {Navbar} from 'react-bootstrap';
import { ValidationForm, TextInput} from "react-bootstrap4-form-validation";
import './Form1.css'
import { faChevronLeft,  faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';
import axios from 'axios'
import Select from 'react-select'


class EditDataIndividu extends Component{
    constructor(props){
        super(props);
        this.formRef = React.createRef();
        this.state = {
            immediate:true,
            setFocusOnError:true,
            clearInputOnReset:false,
            household_id:'',
            name:'',
            nik:'',
            birthplace:'',
            birthdate:'',
            age:'',
            get_gender:'',
            gender:'',
            religion_id:'',
            religions:[],
            religion_value: {},
            relation_id:'',
            relations:[],
            relation_value:{},
            marital_status_id:'',
            marital_statuses:[],
            marital_status_value:{},
            education_status_id:'',
            education_statuses:[],
            education_status_value:{},
            job_status_id:'',
            job_statuses:[],
            job_status_value:{},
            checked:false,
            checked2:false,
            dataResident:'',
        }
      }

      async componentDidMount(){
        // this.getDefaultGender()
        await this.getEditData()
        this.getDataReligions()
        this.getDefaultReligion()
        this.getDataRelations()
        this.getDefaultRelation()
        this.getDataMaritalStatuses()
        this.getDefaultMaritalStatus()
        this.getDataEducationStatuses()
        this.getDefaultEducationStatus()
        this.getDataJobStatuses()
        this.getDefaultJobStatus()
        
      }


     

      // THIS FUNCTION IS TO GET THE DATA OF FEMALE RADIO BUTTON
      femaleHandler = async(e) =>{
        await this.setState({
          checked:true,
          checked2:false
        })
        if(this.state.checked){
          this.setState({
            gender:'female',
            get_gender:''
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
            gender:'male',
            get_gender:''
          })
        }     
      }

      // THIS FUNCTION IS TO GET THE CURRENT DATA OF RELIGIONS
      getDefaultReligion = async(e) => {
        const religion_id = this.state.religion_id
        let getDefaultReligion = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/religions?id=${religion_id}`)
        this.setState({
          religion_value:{
            label:getDefaultReligion.data.religions[0].name,
            value:getDefaultReligion.data.religions[0].id,
          }
        })
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
          religions:getReligion,
        })
      }

      // THIS FUNCTION IS TO CHANGE THE STATE OF RELIGION
      getReligion = async(value) =>{
        await this.setState({
          religion_value:value,
          religion_id:value.value
        })
        console.log(this.state.religion_id)
      }

       // THIS FUNCTION IS TO GET THE CURRENT DATA OF RELATION
       getDefaultRelation = async(e) => {
        const relation_id = this.state.relation_id
        let getDefaultRelation = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/relation_to_head_of_households?id=${relation_id}`)
        this.setState({
          relation_value:{
            label:getDefaultRelation.data.relationToHeadOfHouseholds[0].name,
            value:getDefaultRelation.data.relationToHeadOfHouseholds[0].id,
          }
        })
      }

       // THIS FUNCTION IS TO GET THE DATA OF RELATIONS
       getDataRelations = async(e) => {
        let relationsMap = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/relation_to_head_of_households`)
        let getRelation = relationsMap.data.relationToHeadOfHouseholds.map(relation=>(
          {
            value:relation.id,
            label:relation.name
          }
        ))
        await this.setState({
          relations:getRelation,
        })
      }

      // THIS FUNCTION IS TO CHANGE THE STATE OF RELATION
      getRelation = async(value) =>{
        await this.setState({
          relation_value:value,
          relation_id:value.value
        })
      }
      
      // THIS FUNCTION IS TO GET THE CURRENT DATA OF MARITAL STATUS
      getDefaultMaritalStatus = async(e) => {
        const marital_status_id = this.state.marital_status_id
        let getDefaultMaritalStatuses = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/marital_statuses?id=${marital_status_id}`)
        this.setState({
          marital_status_value:{
            label:getDefaultMaritalStatuses.data.maritalStatuses[0].name,
            value:getDefaultMaritalStatuses.data.maritalStatuses[0].id,
          }
        })
      }

       // THIS FUNCTION IS TO GET THE DATA OF MARITAL STATUSES
       getDataMaritalStatuses = async(e) => {
        let maritalStatusMap = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/marital_statuses`)
        let getMaritalStatus = maritalStatusMap.data.maritalStatuses.map(marital_status=>(
          {
            value:marital_status.id,
            label:marital_status.name
          }
        ))
        await this.setState({
          marital_statuses:getMaritalStatus,
        })
        
      }

      // THIS FUNCTION IS TO CHANGE THE STATE OF MARITAL STATUS
      getMaritalStatus = async(value) =>{
        await this.setState({
          marital_status_value:value,
          marital_status_id:value.value
        })
      }
      

       // THIS FUNCTION IS TO GET THE CURRENT DATA OF RELATION
       getDefaultEducationStatus = async(e) => {
        const education_status_id = this.state.education_status_id
        let getDefaultEducationStatus = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/education_statuses?id=${education_status_id}`)
        this.setState({
          education_status_value:{
            label:getDefaultEducationStatus.data.educationStatuses[0].name,
            value:getDefaultEducationStatus.data.educationStatuses[0].id,
          }
        })
      }

       // THIS FUNCTION IS TO GET THE DATA OF RELATIONS
       getDataEducationStatuses = async(e) => {
        let educationStatusesMap = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/education_statuses`)
        let getEducationStatus = educationStatusesMap.data.educationStatuses.map(education_status=>(
          {
            value:education_status.id,
            label:education_status.name
          }
        ))
        await this.setState({
          education_statuses:getEducationStatus,
        })
      }

      // THIS FUNCTION IS TO CHANGE THE STATE OF RELATION
      getEducationStatus = async(value) =>{
        await this.setState({
          education_status_value:value,
          education_status_id:value.value
        })
      }

      // THIS FUNCTION IS TO GET THE CURRENT DATA OF RELIGIONS
      getDefaultJobStatus = async(e) => {
        const job_status_id = this.state.job_status_id
        let getDefaultJobStatus = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/job_statuses?id=${job_status_id}`)
        this.setState({
          job_status_value:{
            label:getDefaultJobStatus.data.jobStatuses[0].name,
            value:getDefaultJobStatus.data.jobStatuses[0].id,
          }
        })
      }

       // THIS FUNCTION IS TO GET THE DATA OF RELIGIONS
       getDataJobStatuses = async(e) => {
        let jobStatusesMap = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/job_statuses`)
        let getJobStatus = jobStatusesMap.data.jobStatuses.map(job_status=>(
          {
            value:job_status.id,
            label:job_status.name
          }
        ))
        await this.setState({
          job_statuses:getJobStatus,
        })
      }

      // THIS FUNCTION IS TO CHANGE THE STATE OF RELIGION
      getJobStatus = async(value) =>{
        await this.setState({
          job_status_value:value,
          job_status_id:value.value
        })
      }

      // DELETE
      // GET EDIT DATA
      getEditData = async(e) =>{
        let page_id = this.props.match.params.value
        let getData = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/residents?id=${page_id}`);
        this.setState({
          household_id:getData.data.residents[0].household_id,
          name:getData.data.residents[0].name,
          nik: getData.data.residents[0].nik,
          birthplace: getData.data.residents[0].birthplace,
          birthdate: getData.data.residents[0].birthdate,
          age: getData.data.residents[0].age,
          get_gender: getData.data.residents[0].gender,
          religion_id: getData.data.residents[0].religion_id,
          relation_id:getData.data.residents[0].relation_to_head_of_household_id,
          marital_status_id: getData.data.residents[0].marital_status_id,
          education_status_id: getData.data.residents[0].highest_education_status_id,
          job_status_id: getData.data.residents[0].job_status_id,
        })
        this.getDefaultGender()
      }

      getDefaultGender = async(e) =>{
        this.setState({
          gender:this.state.get_gender
        })
      }


      updateData = async(e) =>{
        e.preventDefault();
        const updateData = {
          _method:'PATCH',
          household_id: this.state.household_id,
          name : this.state.name,
          nik : this.state.nik,
          birthplace : this.state.birthplace,
          birthdate : this.state.birthdate,
          age : this.state.age,
          religion_id: this.state.religion_id,
          relation_to_head_of_household_id : this.state.relation_id,
          marital_status_id : this.state.marital_status_id,
          highest_education_status_id : this.state.education_status_id,
          job_status_id :this.state.job_status_id,
          gender : this.state.gender,
        }
        let update_id = this.props.match.params.value
        axios.put(`https://vps.carakde.id/api_takalarsehat/api/v1/residents/${update_id}`,updateData)
        .then(res => console.log(res.data)).catch(err=>console.log(err));
        this.props.history.push(`/detaildata/${this.state.household_id}`)
        // console.log(updateData)
      }
      // NAME HANDLER WHEN INPUT ONCHANGE
      nameHandler = async(e) =>{
      await this.setState({
         name:e.target.value
       })
       console.log(this.state.name)
      }

       // NIK HANDLER WHEN INPUT ONCHANGE
       nikHandler = async(e) =>{
       await this.setState({
          nik:e.target.value
        })
        console.log(this.state.nik)
       }

       // NIK HANDLER WHEN INPUT ONCHANGE
       birthplaceHandler = async(e) =>{
        await this.setState({
           birthplace:e.target.value
         })
         console.log(this.state.birthplace)
        }
 
        // NIK HANDLER WHEN INPUT ONCHANGE
       birthdateHandler = async(e) =>{
        await this.setState({
           birthdate:e.target.value
         })
         console.log(this.state.birthdate)
        }

        // NIK HANDLER WHEN INPUT ONCHANGE
       ageHandler = async(e) =>{
        await this.setState({
           age:e.target.value
         })
         console.log(this.state.age)
        }
      
    render(){

      // CUSTOM STYLES UNTUK REACT-SELECT
      const customStyles = {
        control: (base, state) => ({
          ...base,
          background: "#EDF5F8",
          // match with the menu
          // Overwrittes the different states of border
          borderColor: "#69B5D2",
          // Removes weird border around container
          boxShadow: state.isFocused ? null : null,
          "&:hover": {
            // Overwrittes the different states of border
            borderColor: state.isFocused ? "red" : "blue",
          }
        }),
        menu: base => ({
          ...base,
          // override border radius to match the box
          borderRadius: 0,
          // kill the gap
          marginTop: 0
        }),
        menuList: base => ({
          ...base,
          // kill the white space on first and last option
          padding: 0
        })
      };

      const {name, nik, birthplace, birthdate, age} = this.state
        return(
        <div>
            <Navbar className="navbar-kk">
              <Link to="/table">
                <FontAwesomeIcon icon={faChevronLeft} className="left-icon" />
              </Link>
              <h5 className="brand-kk" href="#home">Data Individu</h5>
              <FontAwesomeIcon icon={faEllipsisV} className="form-menu-icon" />
            </Navbar>
            <ValidationForm 
                        onSubmit={this.updateData}
                        onErrorSubmit={this.handleErrorSubmit}
                        ref={this.formRef}
                        immediate={this.state.immediate}
                        setFocusOnError={this.state.setFocusOnError}>
                <div className="form-kk">
                    <div className="form-group-kk">
                        <label htmlFor="">Nama Responden</label>
                        <TextInput
                            type="text"
                            name="name"
                            className="form-control col-sm-11 input-kk"
                            value={name}
                            onChange={this.nameHandler}
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
                            value={nik}
                            onChange={this.nikHandler}
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
                            value={birthplace}
                            onChange={this.birthplaceHandler}
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
                            value={birthdate}
                            onChange={this.birthdateHandler}
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
                            className="form-control col-sm-11 input-kk"
                            value={age}
                            onChange={this.ageHandler}
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
                            style={{
                              background: (this.state.checked2 === true) || (this.state.get_gender === 'male') ? '#1BAEC9 ' : '#DCEEF5', 
                              color: (this.state.checked2 === true) || (this.state.get_gender === 'male') ? 'white':'black'}} >
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
                            style={{
                              backgroundColor: (this.state.checked === true) || (this.state.get_gender === 'female') ? '#1BAEC9' : '#DCEEF5', 
                              color: (this.state.checked === true) || (this.state.get_gender === 'female') ? 'white':'black',
                            }}>
                            <label htmlFor="female" >Female</label>
                            <input 
                                type="radio"
                                name="gender" 
                                id="female" 
                                value="Female" 
                                />   
                          </div>
                        </div>
                    </div>
                    <div className="form-group-kk">
                        <label htmlFor="">Agama</label>
                        {/* <select onChange={this.getReligion}>
                        {this.state.religions.map(religion => 
                            <option 
                              key={religion.value} 
                              defaultValue={{label:this.state.religion_name, value:this.state.religion_id}}
                              value={religion.value}>
                                {religion.label}
                            </option>
                          )}
                        </select> */}
                        <Select
                          options={this.state.religions}
                          value={this.state.religion_value}
                          onChange={value => this.getReligion(value)}
                          className="select-selector"
                          styles={customStyles}
                        />
                    </div>
                    <div className="form-group-kk">
                        <label htmlFor="">Hubungan dengan Kepala Rumah Tangga</label>
                        {/* <select onChange={this.getRelation}>
                          <option>--- Pilih Status Hubungan ---</option>
                          {this.state.relations.map(relation => 
                            <option key={relation.value} value={relation.value}>{relation.label}</option>
                          )}
                        </select> */}
                        <Select
                          options={this.state.relations}
                          value={this.state.relation_value}
                          onChange={value => this.getRelation(value)}
                          className="select-selector"
                          styles={customStyles}
                        />
                    </div>
                    <div className="form-group-kk">
                        <label htmlFor="">Status Perkawinan</label>
                        {/* <select onChange={this.getMaritalStatus}>
                        <option>--- Pilih Status Perkawinan ---</option>
                          {this.state.marital_statuses.map(maritalStatus => 
                            <option key={maritalStatus.value} value={maritalStatus.value}>{maritalStatus.label}</option>
                          )}
                        </select> */}
                        <Select
                          options={this.state.marital_statuses}
                          value={this.state.marital_status_value}
                          onChange={value => this.getMaritalStatus(value)}
                          className="select-selector"
                          styles={customStyles}
                        />
                    </div>
                    <div className="form-group-kk">
                        <label htmlFor="">Status Pendidikan Tertinggi yang Ditamatkan</label>
                        {/* <select onChange={this.getEducationStatus}>
                          <option>--- Pilih Status Pendidikan  ---</option>
                          {this.state.education_statuses.map(educationStatus => 
                            <option key={educationStatus.value} value={educationStatus.value}>{educationStatus.label}</option>
                          )}
                        </select> */}
                        <Select
                          options={this.state.education_statuses}
                          value={this.state.education_status_value}
                          onChange={value => this.getEducationStatus(value)}
                          className="select-selector"
                          styles={customStyles}
                        />
                    </div>
                    <div className="form-group-kk">
                        <label htmlFor="">Status Pekerjaan</label>
                        {/* <select onChange={this.getJobStatus}>
                        <option>--- Pilih Status Pekerjaan ---</option>
                        {this.state.job_statuses.map(jobStatus => 
                          <option key={jobStatus.value} value={jobStatus.value}>{jobStatus.label}</option>
                        )}
                        </select> */}
                        <Select
                          options={this.state.job_statuses}
                          value={this.state.job_status_value}
                          onChange={value => this.getJobStatus(value)}
                          className="select-selector"
                          styles={customStyles}
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

export default EditDataIndividu;