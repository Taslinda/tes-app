export default function validate (values) {
  let errors = {};
  if (!values.username) {
    errors.username = 'Username address is required';
  } 
  // else if (values.username.length<5) {
  //   errors.username = 'username address is invalid';
  // }
  
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test (values.email)) {
    errors.email = 'Email address is invalid';
  }
  // else if (values.email){
  // success.message = 'Looks good!';}

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 or more characters';
  }
  return errors;
}
