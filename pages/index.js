import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Header from "../layout/header";
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { LOGOUT } from '../src/constants/actions-types'

export default function IndexPage() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.session);
  return (
    <div>
      <Header />
      <Typography variant="h2">Pagina principal</Typography>
      <Link href="/about">
        <a>About</a>
      </Link>
      {
        user && user.email && <div>
          <strong>{user.displayName}</strong>
          <Button variant="contained" color="primary" onClick={() => dispatch({ type: LOGOUT })}>
            Logout
                </Button>
        </div>
      }
    </div>
  );
}
