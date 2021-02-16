import Button from '@material-ui/core/Button';
import Header from "../layout/header";
import { useDispatch } from 'react-redux';
import { LOGIN_REQUEST_GOOGLE, LOGIN_REQUEST_FACEBOOK, LOGOUT, LOGIN_REQUEST } from '../src/constants/actions-types'
import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: `${theme.spacing(2)}px auto`,
        padding: theme.spacing(3),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const initialState = {
    email: "",
    password: "",
    repassword:""
}

export default function login() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [usuario, setUsuario] = useState(initialState)

    const onChange = e => {
        const { name, value } = e.target;
        setUsuario((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const register = async (e) => {
        e.preventDefault();
        const { email, password, repassword } = usuario;
        if (!email || !password) {
            return alert("No deje campos en blanco");
        }

        if(password != repassword){
            return alert("La clave es distinta");
        }

        //dispatch({ type: LOGIN_REQUEST, usuario })
    }

    return (
        <div>
            <Header />

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Registrate
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
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="repassword"
                            label="Repetir Clave"
                            type="password"
                            value={usuario.repassword}
                            autoComplete="current-password"
                            onChange={onChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={register}
                            className={classes.submit}
                        >
                            Registrarse
                        </Button>                                      
                    </form>
                </Paper>
            </Container>
        </div>
    )
}