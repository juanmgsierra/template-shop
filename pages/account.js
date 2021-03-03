import Header from "../layout/header";
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../components/TabPanel'
import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';

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

const initialState = {
    email: "",
    password: ""
}

export default function Account() {
    const classes = useStyles();    
    const { user } = useSelector(state => state.session);
    const [value, setValue] = useState(0);
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

    return (
        <>
            <Header />
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollButtons="auto"
                        centered
                        //variant="fullWidth"
                    >
                        <Tab label="Cuenta" />
                        <Tab label="Direcciones" />
                        <Tab label="Ordenes" />                        
                    </Tabs>
                </AppBar>
                {value === 0 && <TabPanel>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={1}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Nombre completo"
                                name="email"
                                value={usuario.nombre}
                                onChange={onChange}
                                autoComplete="email"
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
                                name="password"
                                label="Celular"
                                type="password"
                                value={usuario.celular}
                                autoComplete="current-password"
                                onChange={onChange}
                            />
                        </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                //onClick={login}
                                className={classes.submit}
                            >
                                Guardar
                        </Button>
                        </Grid>
                    </form>
                </TabPanel>}
                {value === 1 && <TabPanel>Item Two</TabPanel>}
                {value === 2 && <TabPanel>Item Three</TabPanel>}

            </div>
        </>
    );
}