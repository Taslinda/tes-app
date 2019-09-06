import React, {Component} from 'react'
import {Navbar, ProgressBar, Table} from 'react-bootstrap'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChevronLeft,  faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import axios from 'axios'
import './detail_data.css'

    class DetailDataIndividu extends Component{
    state={
        household_id:'',
        id:'',
        progress:40,
        nik:'',
        name:'',
        birthplace:'',
        birthdate:'',
        age:'',
        gender:'',
        religion_id:'',
        religion_name:'',
        marital_status_id:'',
        marital_status_name:'',
        education_status_id:'',
        education_status_name:'',
        job_status_id:'',
        job_status_name:''
    }

    componentDidMount(){
        this.getDetailData()
    }

    // DELETE HANDLER
    deleteHandler = async(e) =>{
      let delete_value = this.props.match.params.value
      await axios.delete(`https://vps.carakde.id/api_takalarsehat/api/v1/residents/${delete_value}`)
      this.props.history.push(`/table`)
      
    }
    
    getDetailData = async(e) =>{
        const page_value = this.props.match.params
        const getData = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/residents?id=${page_value.value}`)
        this.setState({
            household_id: getData.data.residents[0].household_id,
            id: getData.data.residents[0].id,
            nik: getData.data.residents[0].nik,
            name:getData.data.residents[0].name,
            birthplace:getData.data.residents[0].birthplace,
            birthdate:getData.data.residents[0].birthdate,
            age:getData.data.residents[0].age,
            gender:getData.data.residents[0].gender,
            religion_id:getData.data.residents[0].religion_id,
            marital_status_id:getData.data.residents[0].marital_status_id,
            education_status_id:getData.data.residents[0].highest_education_status_id,
            job_status_id:getData.data.residents[0].job_status_id
        })
        console.log(this.state.id)
        this.getReligion()
        this.getMaritalStatus()
        this.getEducationStatus()
        this.getJobStatus()
    }

    getReligion = async(e) =>{
        const religion_id = this.state.religion_id
        const getDataReligion = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/religions?id=${religion_id}`)
        this.setState({
            religion_name:getDataReligion.data.religions[0].name
        })
    }

    getMaritalStatus = async(e) =>{
        const marital_status_id = this.state.marital_status_id
        const getDataMaritalStatus = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/marital_statuses?id=${marital_status_id}`)
        this.setState({
            marital_status_name:getDataMaritalStatus.data.maritalStatuses[0].name
        })

    }

    getEducationStatus = async(e) =>{
        const education_status_id = this.state.education_status_id
        const getDataEducationStatus = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/education_statuses?id=${education_status_id}`)
        this.setState({
            education_status_name:getDataEducationStatus.data.educationStatuses[0].name
        })
    }

    getJobStatus = async(e) =>{
        const job_status_id = this.state.job_status_id
        const getDataJobStatus = await axios.get(`https://vps.carakde.id/api_takalarsehat/api/v1/job_statuses?id=${job_status_id}`)
        this.setState({
            job_status_name:getDataJobStatus.data.jobStatuses[0].name
        })
    }
    render(){
      const {household_id, id} = this.state
        return(
            <div>
            <Navbar className="navbar-kk">
              <Link to={`/biodatakeluarga/${household_id}`}>
                <FontAwesomeIcon icon={faChevronLeft} className="left-icon" />
              </Link>
              <h5 className="brand-kk" href="#home">Detail Data Individu</h5>
              <Link to={`/editdata/${id}`}>
                <FontAwesomeIcon icon={faEdit} className="data-edit-icon" />
              </Link>
              <FontAwesomeIcon onClick={ () => {this.deleteHandler()}} icon={faTrashAlt} className="data-trash-icon" />
            </Navbar>
           <Table striped bordered hover className="data-table">
            <tbody>
              <tr>
                <td>NIK</td>
                <td>{this.state.nik}</td>
              </tr>
              <tr>
                <td>Nama</td>
                <td>{this.state.name}</td>
              </tr>
              <tr>
                <td>Tempat Lahir</td>
                <td>{this.state.birthplace}</td>
              </tr>
              <tr>
                <td>Tanggal Lahir</td>
                <td>{this.state.birthdate}</td>
              </tr>
              <tr>
                <td>Umur</td>
                <td>{this.state.age}</td>
              </tr>
              <tr>
                <td>Jenis Kelamin</td>
                <td>{this.state.gender}</td>
              </tr>
              <tr>
                <td>Agama</td>
                <td>{this.state.religion_name}</td>
              </tr>
              <tr>
                <td>Status Nikah</td>
                <td>{this.state.marital_status_name}</td>
              </tr>
              <tr>
                <td>Pendidikan Terakhir</td>
                <td>{this.state.education_status_name}</td>
              </tr>
              <tr>
                <td>Status Pekerjaan</td>
                <td>{this.state.job_status_name}</td>
              </tr>
            </tbody>
        </Table>
        <br/><br/><br/>
        <hr className="devided-line"/>
        <br/><br/>
        <h1 className="survey-result">Hasil Survei</h1> <br/>
        <div className="data-wrapper">
          <div>
            <ProgressBar now={this.state.progress} label={100} srOnly className="progress"/>
          </div>
          <div>
            <p className="percentage">{this.state.progress}%</p>
          </div>
        </div>
        <br/><br/>
        <button className="survey-button">Survei</button>
      </div>

        )
    }
}

export default DetailDataIndividu