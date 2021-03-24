import { useState, useEffect } from 'react';
import Header from "../layout/header";
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { useSelector, useDispatch } from 'react-redux';
import { SESSION_REQUEST, ADDRESS_REQUEST } from '../src/constants/actions-types'
import AddressModal from '../components/AddressModal';
import {
    AppBar,
    TextField,
    Button,
    Grid,
    Card,
    CardActions,
    CardContent,
    makeStyles,
    Typography,
    CircularProgress,
    Tab
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
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
    card: {
        //Width: 20,
        //display: 'flex',
    },
    gridContainer: {
        paddingLeft: "40px",
        paddingRight: "40px"
    }
}));

const initialAddress = {

    name: "",
    province: "",
    city: "",
    street: "",
    phone: ""

}

export default function Account() {
    const classes = useStyles();
    const { user } = useSelector(state => state.session);
    const { address, fetching } = useSelector(state => state.userAddress);
    const dispatch = useDispatch();
    const [value, setValue] = useState("1");
    const [usuario, setUsuario] = useState(user);

    useEffect(() => {
        if (user.id) {
            dispatch({ type: ADDRESS_REQUEST, usuario })
        }

    }, [])

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
                        <div style={{ margin: 'auto', maxWidth: 600 }}>
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
                        </div>
                    </TabPanel>
                    <TabPanel value="2">
                        <Grid
                            container
                            spacing={4}
                            className={classes.gridContainer}
                            alignItems="center"
                        //justify="center"
                        >
                            <Grid item xs={12} sm={6} md={4}  >
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography className={classes.pos} color="textSecondary">
                                            <br />
                                            <br />
                                        </Typography>
                                        <Typography align="center" variant="h5" component="h2">
                                            Añadir Dirección
                                        </Typography>
                                        <CardActions style={{ justifyContent: 'center' }} >
                                            < AddressModal uid={usuario.id} direction={initialAddress} />
                                        </CardActions>
                                        <Typography variant="body2" component="p">
                                            <br />
                                            <br />
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {!fetching ?
                            <>
                                <Grid item xs={12} sm={6} md={4} >
                                    <CircularProgress />
                                </Grid>
                                     <Grid item xs={6} sm={6} md={4} >
                                     <CircularProgress />
                                 </Grid>                                
                                  </>
                                : address ? address.map((row, id) => (
                                    <Grid item xs={12} sm={6} md={4} key={id} >
                                        <Card className={classes.card} >
                                            <CardContent>
                                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                    {row.name}
                                                </Typography>
                                                <Typography variant="h5" component="h2">
                                                    {row.province}
                                                </Typography>
                                                <Typography className={classes.pos} color="textSecondary">
                                                    {row.city}
                                                </Typography>
                                                <Typography variant="body2" component="p">
                                                    {row.street}
                                                    <br />
                                                    {row.numberHouse}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                < AddressModal uid={usuario.id} direction={row} />
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )) : ""}
                        </Grid>
                    </TabPanel>
                    <TabPanel value="3">
                        Item Three
                    </TabPanel>
                </TabContext>
            </div>
        </>
    );
}