import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.value, isValid: action.value.includes('@')};
  }
  if(action.type === 'INPUT_BLUR'){
    return {value: state.value, isValid: state.value.includes('@')};
  }
  return { 
    value: '', 
    isValid: false };
};

const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {passwordValue: action.passwordValue, isValid: action.passwordValue.length > 6};
  }
  if(action.type === 'INPUT_BLUR'){
    return {passwordValue: state.passwordValue, isValid: state.passwordValue.length > 6};
  }
  return { 
    passwordValue: '', 
    isValid: false };
};

const INIT_EMAIL_STATE = {
  value: '',
  isValid: false
}

const INIT_PASSWORD_STATE = {
  passwordValue: '',
  isValid: false
}

const Login = (props) => {
  //const [enteredEmail, setEnteredEmail] = useState('');
  //const [emailIsValid, setEmailIsValid] = useState();
  //const [enteredPassword, setEnteredPassword] = useState('');
  //const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const[emailState, dispatchEmail] = useReducer(emailReducer, INIT_EMAIL_STATE);
  const[passwordState, dispatchPassword] = useReducer(passwordReducer, INIT_PASSWORD_STATE);

  useEffect(() => {
    console.log('EFFECT RUNNING');
    return () => {
      console.log('EFFECT CLEANUP');
    };
  });

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('Checking form validity');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500 );

  //   return () => {
  //     console.log("CLEANUP");
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type:'USER_INPUT', value: event.target.value });

    setFormIsValid(
      passwordState.isValid && event.target.value.includes('@')
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', passwordValue: event.target.value });

    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.passwordValue);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.passwordValue}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
