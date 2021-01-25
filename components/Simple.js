import { Grid } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 800,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    paritialVisibilityGutter: 30
  }
};
const images = [
  "https://firebasestorage.googleapis.com/v0/b/e-commerce-7e1b8.appspot.com/o/images%2Fbanners%2Fapple-devices-800x702.jpg?alt=media&token=038ae9f5-64f1-472e-a789-45a8c8d03a5b",
  "/Mac-Pro.jpeg",
  "/watch.jpg",
  "/chromecast.jpg",
  "/airpods.jpg",
  "/galaxy.jpg",
  "/jbl.png"
];


// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Carousel
              ssr
              arrows={false}
              useKeyboardArrows
              deviceType={deviceType}
              responsive={responsive}
              itemClass="image-item"
              autoPlay={true}
              autoPlaySpeed={3000}
              infinite={true}
            >
              {images.map((image, index) => {
                return (
                  <img                
                    key={index}
                    draggable={false}
                     style={{ width: "100%", height: "100%" }}
                    src={image} />
                )
              })}
             
            </Carousel>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Simple;