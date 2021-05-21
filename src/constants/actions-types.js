export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_REQUEST_GOOGLE = 'LOGIN_REQUEST_GOOGLE';
export const LOGIN_REQUEST_FACEBOOK = 'LOGIN_REQUEST_FACEBOOK';
export const LOGOUT = 'LOGOUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const SESSION_REQUEST = 'SESSION_REQUEST';
export const SESSION_SUCCESS = 'SESSION_SUCCESS';
export const SESSION_ERROR = 'SESSION_ERROR';
export const ADDRESS_REQUEST = 'ADDRESS_REQUEST';
export const ADDRESS_SUCCESS = 'ADDRESS_SUCCESS';
export const SAVE_ADDRESS = 'SAVE_ADDRESS';
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
export const ADDRESS_ERROR = 'ADDRESS_ERROR';
export const CART_REQUEST = 'CART_REQUEST';
export const CART_SUCCESS = 'CART_SUCCESS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CART_ERROR = 'CART_ERROR';
export const LOAD_ADDRESS = 'LOAD_ADDRESS';
export const UPDATING_ADDRESS = 'UPDATING_ADDRESS';
export const ADD_ADDRESS = "ADD_ADDRESS";
export const REMOVE_ADDRESS = "REMOVE_ADDRESS";
export const PREDETERMINED_ADDRESS = "PREDETERMINED_ADDRESS";
export const WATCH_UPDATE_ADDRESS = "WATCH_UPDATE_ADDRESS";
export const WATCH_SAVE_ADDRESS = "WATCH_SAVE_ADDRESS";
export const WATCH_PREDETERMINED_ADDRESS = "WATCH_PREDETERMINED_ADDRESS";
export const WATCH_DELETE_ADDRESS = "WATCH_DELETE_ADDRESS";

export const firebaseErrors = {
    'auth/invalid-email': 'Correo electrónico no valido',
    'auth/user-disabled': 'Correo electrónico dado ha sido deshabilitado',
    'auth/user-not-found':'No hay ningún usuario que corresponda al correo electrónico dado',
    'auth/wrong-password': 'La cuenta correspondiente al correo electrónico no tiene una contraseña configurada',
    'auth/account-exists-with-different-credential':'Ya existe una cuenta con la dirección de correo electrónico afirmada por la credencial',
    'auth/operation-not-allowed':'El tipo de cuenta correspondiente a la credencial no está habilitado',
    'auth/popup-blocked':'El navegador bloqueó la ventana emergente',
    'auth/popup-closed-by-user':'No se completo el inicio de sesión en el proveedor',    
  }; 