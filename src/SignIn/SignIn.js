import React, {Component} from 'react';
import './SignIn.css';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { ValidationForm, TextInput} from "react-bootstrap4-form-validation";

class SignIn extends Component{
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
      this.props.history.push('/form1');
      // alert(JSON.stringify(formData, null, 2));
  }
  handleErrorSubmit = (e,formData, errorInputs) => {
      console.log(e,formData, errorInputs);
  }
  render(){
  return (
    <div className="login-app">
      <div className="login-form">
        <div className="title-login">
          <p className="p1">TAKALAR</p>
          <p className="p2">SEHAT</p>
        </div>

        <ValidationForm 
          onSubmit={this.handleSubmit.bind(this)} 
          onErrorSubmit={this.handleErrorSubmit}
          ref={this.formRef}
          immediate={this.state.immediate}
          setFocusOnError={this.state.setFocusOnError}
          // defaultErrorMessage={{ required: "Please enter something."}}  
          className="form-group-login">
          <div className="username-login">
            <div className="control">
              <TextInput
                name="email" 
                id="email" 
                type="email"
                placeholder="Email"
                prepend={<span className="input-group-text">@</span>}
                successMessage="Looks good!"
                errorMessage="Please enter something"
                required
              />
            </div>
          </div>

          <div className="password-login">
            <div className="control">
              <TextInput
                type="password"
                name="password"
                placeholder="Password"
                errorMessage="Please enter something"
                required
              />
            </div>
          </div>

          <div className="text-login">
            <div className="lupa-sandi">
              <p>Lupa kata sandi ?</p>
            </div>
            <div className="login">
                <button type="submit" className="button is-block is-info is-fullwidth">
                  Log In
                </button>
            </div>
            <div className="regis">
              <Link to="/signup">
                <p>
                  Belum memiliki akun ? <span className="text-bold"> Sign Up </span>
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
// const SignIn = (props) => {
//   const {values, errors, handleChange, handleSubmit} = useForm (login,validate);
//   function login () {
//     console.log (values);
//     props.history.push('/form1');
//   }

//   return (
//     <div className="login-app">
//       <div className="login-form">
//         <div className="title-login">
//           <p className="p1">TAKALAR</p>
//           <p className="p2">SEHAT</p>
//         </div>

//         <Form onSubmit={handleSubmit} noValidate className="form-group-login">
//           <div className="username-login">
//             <div className="control">
//               <input
//                 autoComplete="off"
//                 className={`input ${errors.email && 'is-danger-login'}`}
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 onChange={handleChange}
//                 value={values.email || ''}
//                 required
//               />
//             </div>
//             {errors.email && <p className="help is-danger-login">{errors.email}</p>}
//           </div>

//           <div className="password-login">
//             <div className="control">
//               <input
//                 className={`input ${errors.password && 'is-danger-login'}`}
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 onChange={handleChange}
//                 value={values.password || ''}
//                 required
//               />
//             </div>
//             {errors.password &&
//               <p className="help is-danger-login">{errors.password}</p>}
//           </div>

//           <div className="text-login">
//             <div className="lupa-sandi">
//               <p>Lupa kata sandi ?</p>
//             </div>
//             <div className="login">
//                 <button
//                   type="submit"
//                   className="button is-block is-info is-fullwidth"
//                 >
//                   Log In
//                 </button>
//             </div>
//             <div className="regis">
//               <Link to="/signup">
//                 <p>
//                   Belum memiliki akun ? <span className="text-bold"> Sign Up </span>
//                 </p>
//               </Link>
//             </div>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

export default withRouter(SignIn);
