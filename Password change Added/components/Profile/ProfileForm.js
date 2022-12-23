import classes from './ProfileForm.module.css';
import { useContext,useRef } from 'react';
import AuthContext from '../store/auth-Context';

const ProfileForm = () => {
  const passwordChangeRef = useRef();
  const authContexts = useContext(AuthContext);

  const FormSubmitHandler = (event) => {
    event.preventDefault(event)
    const newPassword = passwordChangeRef.current.value;
    
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCuy-Lt3HWAxoHO24zpXtjYsK_V4u1vAdE',{
      method : 'POST',
      body : JSON.stringify({
        idToken : authContexts.token,
        password : newPassword,
        returnSecureToken : true,
      }),
      headers: {
        'Content-Type' : 'application/json'
      }

    }).then(res => {

    });
  }



  return (
    <form className={classes.form} onSubmit={FormSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={passwordChangeRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
