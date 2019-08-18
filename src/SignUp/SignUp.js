import React, {Component} from 'react';
import './SignUp.css';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { ValidationForm, TextInput } from 'react-bootstrap4-form-validation';


class SignUp extends Component{
  constructor(props){
    super(props);
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
      this.props.history.push('/');
      // alert(JSON.stringify(formData, null, 2));
  }
  handleErrorSubmit = (e,formData, errorInputs) => {
      console.log(e,formData, errorInputs);
  }
  render(){
    
  return (
    <div className="regis-app">
      <div className="regis-form">
        <div className="title-regis">
          <p>TAKALAR</p>
          <p>SEHAT</p>
        </div>
        <ValidationForm 
          onSubmit={this.handleSubmit.bind(this)} 
          onErrorSubmit={this.handleErrorSubmit}
          ref={this.formRef}
          immediate={this.state.immediate}
          setFocusOnError={this.state.setFocusOnError}
          // defaultErrorMessage={{ required: "Please enter something."}} 
          className="form-group-regis">
          <div className="username-regis">
            <div className="control">
              <TextInput
                type="username" 
                name="username"
                id="email"
                placeholder="Nama Lengkap" 
                successMessage="Looks good!"
                errorMessage="Please enter something"
                required />
            </div>
            </div>
          <div className="email-regis">
            <div className="control">
              <TextInput 
                name="email" 
                id="email" 
                type="email"
                placeholder="Email"
                prepend={<span className="input-group-text">@</span>}
                successMessage="Looks good!"
                errorMessage="Please enter something"
                required />
            </div>
          </div>
          <div className="password-regis">
          <div className="control">
            <TextInput 
               type="password"
                name="password"
                placeholder="Password"
                errorMessage="Please enter something"
                required/>
            </div>
             </div>
        
        <div className="text-regis">
          <div className="regis">
              <button type="submit" className="button-regis">Sign Up</button>
          </div>
          <div className="login-regis-page">
            <Link to="/">
              <p>
                Sudah punya akun ? <span className="text-bold">Sign In</span>
              </p>
            </Link>
          </div>
        </div>
        </ValidationForm>
      </div>
    </div>
  );
}
}
// const SignUp = (props) => {
//   const {values, errors, handleChange, handleSubmit} = useForm (
//     signup,
//     validate
//   );
//   function signup () {
//     console.log (values);
//     props.history.push('/');
//   }
  
//   return (
//     <div className="regis-app">
//       <div className="regis-form">
//         <div className="title-regis">
//           <p>TAKALAR</p>
//           <p>SEHAT</p>
//         </div>
//         <Form onSubmit={handleSubmit} noValidate className="form-group-regis">
//           <div className="username-regis">
//             <div className="control">
//               <input 
//                 type="username" 
//                 name="username"
//                 placeholder="Nama Lengkap" 
//                 onChange={handleChange}
//                 className={`input ${errors.username && 'is-danger-regis'}`}
//                 required />
//             </div>
//             {errors.username && <p className="help is-danger-regis">{errors.username}</p>}
//           </div>
//           <div className="email-regis">
//             <div className="control">
//               <input 
//                 type="email" 
//                 name="email"
//                 placeholder="Alamat Email" 
//                 onChange={handleChange}
//                 className={`input ${errors.email && 'is-danger-regis'}`}
//                 required />
//             </div>
//             {errors.email && <p className="help is-danger-regis">{errors.email}</p>}
//           </div>
//           <div className="password-regis">
//           <div className="control">
//             <input 
//               type="password" 
//               name="password"
//               placeholder="Password"
//               onChange={handleChange} 
//               className={`input ${errors.email && 'is-danger-regis'}`}

//               required/>
//             </div>
//             {errors.password &&
//               <p className="help is-danger-regis">{errors.password}</p>}
//           </div>
        
//         <div className="text-regis">
//           <div className="regis">
//               <button type="submit" className="button-regis">Sign Up</button>
//           </div>
//           <div className="login-regis-page">
//             <Link to="/">
//               <p>
//                 Sudah punya akun ? <span className="text-bold">Sign In</span>
//               </p>
//             </Link>
//           </div>
//         </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

export default withRouter(SignUp);
