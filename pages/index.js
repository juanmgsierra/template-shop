import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Header from "../layout/header";

export default function IndexPage() {

  return (
    <div>
      <Header />
      <Typography variant="h2">Pagina principal</Typography>
      <Link href="/about">
        <a>About</a>
      </Link>      
    </div>
  );
}
