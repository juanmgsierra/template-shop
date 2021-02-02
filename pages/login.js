import Button from '@material-ui/core/Button';
import Header from "../layout/header";
import { loginWithGoogle, onAuthStateChange, logOut } from "../server/firebase"
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN_REQUEST } from '../src/constants/actions-types'

export default function login() {
    const [user,setUser] =useState(null);
    const dispatch = useDispatch();

    const handleClick = () => {

        dispatch({type: LOGIN_REQUEST})
       /* loginWithGoogle().then(user => setUser(user))
        .catch(err => {
            console.log(err)
        }) */
    }
    return(
        <div>
            <Header />
            { user === null && 
                <Button variant="contained" color="primary" onClick={handleClick}>                
                    Login con Google            
                </Button>               
            }
            {
              user && user.email && <div>
                <strong>{user.displayName}</strong>
                <Button variant="contained" color="primary" onClick={logOut}>                
                    Logout            
                </Button>
              </div>
            }            
        </div>              
    )
}