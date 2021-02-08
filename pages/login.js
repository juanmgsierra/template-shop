import Button from '@material-ui/core/Button';
import Header from "../layout/header";
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN_REQUEST_GOOGLE, LOGIN_REQUEST_FACEBOOK, LOGOUT } from '../src/constants/actions-types'

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

export default function login() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.session);
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
                            id="email"
                            label="Dirección de correo"
                            name="email"
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
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Ingresar
                        </Button>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <Button variant="contained" color="primary"  fullWidth className={classes.submit} onClick={() => dispatch({ type: LOGIN_REQUEST_GOOGLE })}>
                                    Login con Google
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} >
                                <Button variant="contained" color="primary"  fullWidth className={classes.submit} onClick={() => dispatch({ type: LOGIN_REQUEST_FACEBOOK })}>
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