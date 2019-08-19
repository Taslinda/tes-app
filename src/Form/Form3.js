import React, {Component} from 'react';
import './Form3.css'
import { withRouter } from 'react-router-dom';
import { ValidationForm, TextInput} from "react-bootstrap4-form-validation";
import { faChevronLeft,  faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';

class Form3 extends Component{
  constructor(props){
    super(props);
    // If you want to use the reset state function, you need to have a reference to the ValidationForm component
    //If your React < 16.3, check https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
    this.formRef = React.createRef();
    this.state = {
        immediate:true,
        setFocusOnError:true,
        clearInputOnReset:false,
        head_of_family:'',
        family_card_number:'',
        number_of_family_members:'',
        number_of_toddlers:''
    }
    }

    handleSubmit = (e, formData, inputs) => {
        e.preventDefault();
        console.log(formData);
        this.props.history.push('/soal');
        // alert(JSON.stringify(formData, null, 2));
    }

    handleErrorSubmit2 = (e,formData, errorInputs) => {
        console.log(e,formData, errorInputs)
    }
    getData2 = async(e) =>{
      e.preventDefault();
      const head_of_family = e.target.elements.head_of_family.value;
      const family_card_number = e.target.elements.family_card_number.value;
      const number_of_family_members = e.target.elements.number_of_family_members.value;
      const number_of_toddlers = e.target.elements.number_of_toddlers.value;
      const api_call = await fetch(`https://vps.carakde.id/api_takalarsehat/api/v1/households`);
      const data = await api_call.json();
  
      if(head_of_family&&family_card_number&&number_of_family_members&&number_of_toddlers){
        console.log(data);
        this.setState({
          head_of_family:data.households[0].head_id,
          family_card_number:data.households[0].family_card_number,
          number_of_family_members:data.households[0].number_of_family_members,
          number_of_toddlers:data.households[0].number_of_toddlers,
          error:''
        })
      }
      this.props.history.push('/biodatakeluarga');
    }
  render(){
    return(
      <div>
      <Navbar className="navbar-kk">
              <Link to="/table">
                <FontAwesomeIcon icon={faChevronLeft} className="left-icon" />
              </Link>
              <h5 className="brand-kk" href="#home">Keterangan Rumah Tangga</h5>
              <FontAwesomeIcon icon={faEllipsisV} className="form-menu-icon" />
            </Navbar>
      <ValidationForm onSubmit={this.getData2} 
                        onErrorSubmit={this.handleErrorSubmit2}
                        ref={this.formRef}
                        immediate={this.state.immediate}
                        setFocusOnError={this.state.setFocusOnError}
                        // defaultErrorMessage={{ required: "Please enter something."}} 
                        >
        <div className="form-page-content2">
          <div className="form-page-group2">
            <label htmlFor="">Nama Kepala Rumah Tangga</label>
            <TextInput 
              type="text" 
              name="head_of_family"
              className="form-control col-sm-11 input-text2" 
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
              className="form-control col-sm-11 input-text2"
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
              className="form-control col-sm-11 input-text2"
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
              className="form-control col-sm-11 input-text2"
              placeholder="00"
              successMessage="Looks good!"
              errorMessage="Please enter something"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn2 primary btn">SIMPAN</button>
          </div>
        </div>
        </ValidationForm>
      </div>
    );
  }
}

export default withRouter(Form3);

