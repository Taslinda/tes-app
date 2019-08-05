import React from 'react';
import './SignIn.css';
import {Form} from 'reactstrap';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import validate from '../Form/FormValidationLogin';
import useForm from '../Form/UseFormLogin';

const SignIn = (props) => {
  const {values, errors, handleChange, handleSubmit} = useForm (login,validate);
  function login () {
    console.log (values);
    props.history.push('/form1');
  }

  return (
    <div className="login-app">
      <div className="login-form">
        <div className="title-login">
          <p className="p1">TAKALAR</p>
          <p className="p2">SEHAT</p>
        </div>

        <Form onSubmit={handleSubmit} noValidate className="form-group-login">
          <div className="username-login">
            <div className="control">
              <input
                autoComplete="off"
                className={`input ${errors.email && 'is-danger-login'}`}
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={values.email || ''}
                required
              />
            </div>
            {errors.email && <p className="help is-danger-login">{errors.email}</p>}
          </div>

          <div className="password-login">
            <div className="control">
              <input
                className={`input ${errors.password && 'is-danger-login'}`}
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={values.password || ''}
                required
              />
            </div>
            {errors.password &&
              <p className="help is-danger-login">{errors.password}</p>}
          </div>

          <div className="text-login">
            <div className="lupa-sandi">
              <p>Lupa kata sandi ?</p>
            </div>
            <div className="login">
                <button
                  type="submit"
                  className="button is-block is-info is-fullwidth"
                >
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
        </Form>
      </div>
    </div>
  );
};

export default withRouter(SignIn);
