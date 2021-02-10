import Button from '@material-ui/core/Button';
import Header from "../layout/header";
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN_REQUEST_GOOGLE, LOGIN_REQUEST_FACEBOOK, LOGOUT, LOGIN_REQUEST } from '../src/constants/actions-types'
import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const initialState = {
    email: "",
    password: ""
}

export default function login() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [usuario, setUsuario] = useState(initialState)

    const { user } = useSelector(state => state.session);

    const onChange = e => {
        const { name, value } = e.target;
        setUsuario((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

 
    const login = async (e) => {
        e.preventDefault();        
        const { email, password } = usuario;
        if (!email || !password) {
            return alert("Ingrese sus credenciales");
        }   
        dispatch({ type: LOGIN_REQUEST, usuario })    
    }

    return (
        <div>
            <Header />

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Iniciar Sesión
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Dirección de correo"
                            name="email"
                            value={usuario.email}
                            onChange={onChange}
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Clave"
                            type="password"
                            value={usuario.password}
                            autoComplete="current-password"
                            onChange={onChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={login}
                            className={classes.submit}
                        >
                            Ingresar
                        </Button>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <Button variant="contained" color="primary" fullWidth className={classes.submit} onClick={() => dispatch({ type: LOGIN_REQUEST_GOOGLE, provider:"google"})}>
                                    Login con Google
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} >
                                <Button variant="contained" color="primary" fullWidth className={classes.submit} onClick={() => dispatch({ type: LOGIN_REQUEST_FACEBOOK, provider:"facebook" })}>
                                    Login con Facebook
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Olvidaste tu clave?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"No tienes cuenta? Registrate"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
            { !user.displayName &&
                <>


                </>
            }
            {
                user && user.email && <div>
                    <strong>{user.displayName}</strong>
                    <Button variant="contained" color="primary" onClick={() => dispatch({ type: LOGOUT })}>
                        Logout
                </Button>
                </div>
            }
        </div>
    )
}