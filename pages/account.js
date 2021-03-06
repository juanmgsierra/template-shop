import { useState } from 'react';
import Header from "../layout/header";
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel'
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { SESSION_REQUEST } from '../src/constants/actions-types'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        height: 600,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Account() {
    const classes = useStyles();
    const { user } = useSelector(state => state.session);
    const dispatch = useDispatch();
    const [value, setValue] = useState("1");
    const [usuario, setUsuario] = useState(user)


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const onChange = e => {
        const { name, value } = e.target;
        setUsuario((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const updateProfile = async (e) => {
        e.preventDefault();
        const { celular, nombre } = usuario;
        if (!celular || !nombre) {
            return alert("Complete los campos");
        }
        dispatch({ type: SESSION_REQUEST, usuario })
    }

    return (
        <>
            <Header />
            <div className={classes.root}>
                <TabContext value={value}>
                    <AppBar position="static" color="default" >
                        <TabList onChange={handleChange} aria-label="simple tabs example" centered>
                            <Tab label="Cuenta" value="1" />
                            <Tab label="Direcciones" value="2" />
                            <Tab label="Ordenes" value="3" />
                        </TabList>
                    </AppBar>
                    <TabPanel value="1">
                        <form className={classes.form} noValidate>
                            <Grid container spacing={1}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Nombre completo"
                                    name="nombre"
                                    value={usuario.nombre || ''}
                                    onChange={onChange}
                                    autoComplete="nombre"
                                    autoFocus
                                />
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Correo"
                                        name="email"
                                        value={usuario.email}
                                        disabled
                                        onChange={onChange}
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="celular"
                                        label="Celular"
                                        value={usuario.celular || ''}
                                        onChange={onChange}
                                    />
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    onClick={updateProfile}
                                    className={classes.submit}
                                >
                                    Guardar
                                </Button>
                            </Grid>
                        </form>
                    </TabPanel>
                    <TabPanel value="2">
                        Item Two
                    </TabPanel>
                    <TabPanel value="3">
                        Item Three
                    </TabPanel>
                </TabContext>
            </div>
        </>
    );
}