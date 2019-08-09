import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg, type) => {
    const payload = { msg, type };
    dispatch({ type: SET_ALERT, payload });
    setTimeout(() => removeAlert(), 5000);
  };

  const removeAlert = () => dispatch({ type: REMOVE_ALERT });

  return (
    <AlertContext.Provider value={{ setAlert, alert: state }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
