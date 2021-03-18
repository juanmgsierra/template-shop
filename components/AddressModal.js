import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SAVE_ADDRESS, UPDATE_ADDRESS } from '../src/constants/actions-types'
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles    
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

}));


export default function AddressModal({ uid, direction }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const [address, setAddress] = useState(direction);

  const onChange = e => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const guardarCambios = async e => {
    e.preventDefault();
    address.userId = uid;
    const actionType = address.id ? UPDATE_ADDRESS : SAVE_ADDRESS
  
    dispatch({ type: actionType, address })
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>
        +
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Agregar dirección</DialogTitle>
        <DialogContent>
          <form className={classes.form} noValidate>
            <Grid container spacing={1}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Nombre"
                name="name"
                value={address.name}
                onChange={onChange} 
                autoFocus
              />
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Departamento"
                  name="province"
                  value={address.province}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="city"
                  value={address.city}
                  onChange={onChange}
                  label="Ciudad"
                />
              </Grid>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Dirección"
                name="street"
                value={address.street}
                onChange={onChange}

              /> <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Telefono"
                value={address.phone}
                onChange={onChange}
                name="phone"   
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={guardarCambios}
              >
                Guardar
            </Button>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}