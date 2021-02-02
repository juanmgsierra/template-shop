import Button from '@material-ui/core/Button';
import Header from "../layout/header";
import { loginWithGoogle, onAuthStateChange, logOut } from "../server/firebase"
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN_REQUEST, LOGOUT } from '../src/constants/actions-types'

export default function login() {
    const [users,setUser] =useState(null);
    const dispatch = useDispatch();

    const  { user }  = useSelector(state => state.session);

    return(
        <div>
            <Header />
            { !user.displayName  && 
                <Button variant="contained" color="primary" onClick={()=>dispatch({type: LOGIN_REQUEST}) }>                
                    Login con Google            
                </Button>               
            }
            {
              user && user.email && <div>
                <strong>{user.displayName}</strong>
                <Button variant="contained" color="primary" onClick={()=>dispatch({type: LOGOUT})}>                
                    Logout            
                </Button>
              </div>
            }            
        </div>              
    )
}