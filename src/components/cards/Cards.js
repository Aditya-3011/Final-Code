import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

import Owner from "../images/1.png";
import Distributer from "../images/image-distributor.jpg";
import Supplier from "../images/4.png";
import Manufacturer from "../images/2.png";
import Transporter from "../images/3.jpg";
import Wholesaler from "../images/image-wholesaler.jpg";

import SignIn from "../login/SignIn";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const useStyles = makeStyles({
  // root1: {
  //   maxWidth: 450,
  //   marginLeft: 30,
  //   marginBottom:30,
  //   marginTop: 10,
  // },
  // root2: {
  //   marginTop: 10,
  //   marginBottom: 30,
  //   maxWidth: 450,
  //   marginLeft: 30,
  // },
  // root3: {
  //   marginTop: 10,
  //   marginBottom: 30,
  //   maxWidth: 450,
  //   marginLeft: 30,
  // },
  // root4: {
  //   marginBottom: 30,
  //   maxWidth: 450,
  //   marginLeft: 30,
  // },
  // root5: {
  //   marginBottom: 30,
  //   maxWidth: 450,
  //   marginLeft: 30,
  // },
  // root6: {
  //   marginBottom: 30,
  //   maxWidth: 450,
  //   marginLeft: 30,
  // },
  // media: {
  //   height: 280,
  //   paddingLeft: 20,
  // },
  root1: {
    maxWidth: 450,
    margin: '30px 30px 30px 30px',
    borderRadius: '20px',
  },
  root2: {
    axWidth: 450,
    margin: '30px 30px 30px 30px',
    borderRadius: '20px'
  },
  root3: {
    axWidth: 450,
    margin: '30px 30px 30px 30px',
    borderRadius: '20px'
  },
  root4: {
    axWidth: 450,
    margin: '30px 30px 30px 30px',
    borderRadius: '20px'
  },
  root5: {
    axWidth: 450,
    margin: '30px 30px 30px 30px',
    borderRadius: '20px'

  },
  root6: {
    axWidth: 450,
    margin: '30px 30px 30px 30px',
    borderRadius: '20px'
  },
  media: {
    height: 280,
    paddingLeft: 20,
  },


});

const handleClick = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};
function Cards() {
  const classes = useStyles();

  return (
    <Router>
      <Grid container>
        <Grid item md={4}>
          <Card className={classes.root1}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Owner}
                title="Owner"
              />
              <CardContent>
                {/* { <Typography gutterBottom variant="h5" component="h2">
                  Admin
                </Typography>  */
                <Typography 
  gutterBottom 
  variant="h5" 
  component="h2"
  style={{
    marginTop: '0', /* Remove top margin */
    marginBottom: '0', /* Remove bottom margin */
  }}
>
  Admin
</Typography>
}
                {/* <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
              </Typography> */}
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Button href="/owner" size="small" color="primary">
                {" "}
                Proceed as Admin{" "}
              </Button> */
              <Button 
  href="/owner" 
  size="small" 
  color="primary"
  style={{
    backgroundColor: '#0093E9', /* Green background */
    border: 'none', /* Remove borders */
    color: 'white', /* White text */
    padding: '8px 30px', /* Some padding */
    textAlign: 'center', /* Centered text */
    textDecoration: 'none', /* Remove underline */
    display: 'inline-block', /* Inline-block */
    fontSize: '16px', /* Change font size */
    margin: '4px 4px', /* Some margin */
    cursor: 'pointer', /* Pointer/hand cursor on hover */
    borderRadius: '12px', /* Rounded corners */
    transitionDuration: '0.4s', /* Transition effects */
    boxShadow: '0 3px 2px 0 rgba(0,0,0,0.24)', /* Add shadow effect */
  }}
>
  proceed as Admin
</Button>
}
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={4}>
          <Card className={classes.root2}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Supplier}
                title="Supplier"
              />
              <CardContent>
                {/* <Typography gutterBottom variant="h5" component="h2">
                  Supplier
                </Typography> */
                <Typography 
  gutterBottom 
  variant="h5" 
  component="h2"
  style={{
    marginTop: '0', /* Remove top margin */
    marginBottom: '0', /* Remove bottom margin */
  }}
>
Supplier
</Typography>}
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Button href="/supplier" size="small" color="primary">
                Proceed as Supplier
              </Button> */
              <Button 
  href="/owner" 
  size="small" 
  color="primary"
  style={{
    backgroundColor: '#0093E9', /* Green background */
    border: 'none', /* Remove borders */
    color: 'white', /* White text */
    padding: '8px 30px', /* Some padding */
    textAlign: 'center', /* Centered text */
    textDecoration: 'none', /* Remove underline */
    display: 'inline-block', /* Inline-block */
    fontSize: '16px', /* Change font size */
    margin: '4px 4px', /* Some margin */
    cursor: 'pointer', /* Pointer/hand cursor on hover */
    borderRadius: '12px', /* Rounded corners */
    transitionDuration: '0.4s', /* Transition effects */
    boxShadow: '0 3px 2px 0 rgba(0,0,0,0.24)', /* Add shadow effect */
  }}
>
  proceed as Supplier
</Button>}
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={4}>
          <Card className={classes.root3}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Transporter}
                title="Transporter"
              />
              <CardContent>
                {/* <Typography gutterBottom variant="h5" component="h2">
                  Transporter
                </Typography> */
                <Typography 
  gutterBottom 
  variant="h5" 
  component="h2"
  style={{
    marginTop: '0', /* Remove top margin */
    marginBottom: '0', /* Remove bottom margin */
  }}
>
Transporter
</Typography>}
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Button href="/transporter" size="small" color="primary">
              Proceed as Transporter  
              </Button> */
              <Button 
  href="/owner" 
  size="small" 
  color="primary"
  style={{
    backgroundColor: '#0093E9', /* Green background */
    border: 'none', /* Remove borders */
    color: 'white', /* White text */
    padding: '8px 30px', /* Some padding */
    textAlign: 'center', /* Centered text */
    textDecoration: 'none', /* Remove underline */
    display: 'inline-block', /* Inline-block */
    fontSize: '16px', /* Change font size */
    margin: '4px 4px', /* Some margin */
    cursor: 'pointer', /* Pointer/hand cursor on hover */
    borderRadius: '12px', /* Rounded corners */
    transitionDuration: '0.4s', /* Transition effects */
    boxShadow: '0 3px 2px 0 rgba(0,0,0,0.24)', /* Add shadow effect */
  }}
>
  proceed as Transporter
</Button>}
            </CardActions>
          </Card>
        </Grid>

        <br />
        <Grid item md={4}>
          <Card className={classes.root4}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Manufacturer}
                title="Manufacturer"
              />
              <CardContent>
                {/* <Typography gutterBottom variant="h5" component="h2">
                  Manufacturer
                </Typography> */
                <Typography 
  gutterBottom 
  variant="h5" 
  component="h2"
  style={{
    marginTop: '0', /* Remove top margin */
    marginBottom: '0', /* Remove bottom margin */
  }}
>
Manufacturer
</Typography>}
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Button href="/manufacturer" size="small" color="primary">
              Proceed as Manufacturer 
              </Button> */
              <Button 
  href="/owner" 
  size="small" 
  color="primary"
  style={{
    backgroundColor: '#0093E9', /* Green background */
    border: 'none', /* Remove borders */
    color: 'white', /* White text */
    padding: '8px 30px', /* Some padding */
    textAlign: 'center', /* Centered text */
    textDecoration: 'none', /* Remove underline */
    display: 'inline-block', /* Inline-block */
    fontSize: '16px', /* Change font size */
    margin: '4px 4px', /* Some margin */
    cursor: 'pointer', /* Pointer/hand cursor on hover */
    borderRadius: '12px', /* Rounded corners */
    transitionDuration: '0.4s', /* Transition effects */
    boxShadow: '0 3px 2px 0 rgba(0,0,0,0.24)', /* Add shadow effect */
  }}
>
  proceed as Manufacturer
</Button>}
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={4}>
          <Card className={classes.root5}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Wholesaler}
                title="Wholesaler"
              />
              <CardContent>
                {/* <Typography gutterBottom variant="h5" component="h2">
                  Wholesaler
                </Typography> */
                <Typography 
  gutterBottom 
  variant="h5" 
  component="h2"
  style={{
    marginTop: '0', /* Remove top margin */
    marginBottom: '0', /* Remove bottom margin */
  }}
>
Wholesaler
</Typography>}
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Button href="/wholesaler" size="small" color="primary">
                Proceed as Wholesaler  
              </Button> */
              <Button 
  href="/owner" 
  size="small" 
  color="primary"
  style={{
    backgroundColor: '#0093E9', /* Green background */
    border: 'none', /* Remove borders */
    color: 'white', /* White text */
    padding: '8px 30px', /* Some padding */
    textAlign: 'center', /* Centered text */
    textDecoration: 'none', /* Remove underline */
    display: 'inline-block', /* Inline-block */
    fontSize: '16px', /* Change font size */
    margin: '4px 4px', /* Some margin */
    cursor: 'pointer', /* Pointer/hand cursor on hover */
    borderRadius: '12px', /* Rounded corners */
    transitionDuration: '0.4s', /* Transition effects */
    boxShadow: '0 3px 2px 0 rgba(0,0,0,0.24)', /* Add shadow effect */
  }}
>
  proceed as Wholesaler
</Button>}
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={4}>
          <Card className={classes.root6}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Distributer}
                title="Distributor"
              />
              <CardContent>
                {/* <Typography gutterBottom variant="h5" component="h2">
                  Distributor
                </Typography> */
                <Typography 
  gutterBottom 
  variant="h5" 
  component="h2"
  style={{
    marginTop: '0', /* Remove top margin */
    marginBottom: '0', /* Remove bottom margin */
  }}
>
Distributor
</Typography>}
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Button href="/distributor" size="small" color="primary">
              Proceed as Distributor  
              </Button> */
              <Button 
  href="/owner" 
  size="small" 
  color="primary"
  style={{
    backgroundColor: '#0093E9', /* Green background */
    border: 'none', /* Remove borders */
    color: 'white', /* White text */
    padding: '8px 30px', /* Some padding */
    textAlign: 'center', /* Centered text */
    textDecoration: 'none', /* Remove underline */
    display: 'inline-block', /* Inline-block */
    fontSize: '16px', /* Change font size */
    margin: '4px 4px', /* Some margin */
    cursor: 'pointer', /* Pointer/hand cursor on hover */
    borderRadius: '12px', /* Rounded corners */
    transitionDuration: '0.4s', /* Transition effects */
    boxShadow: '0 3px 2px 0 rgba(0,0,0,0.24)', /* Add shadow effect */
  }}
>
  proceed as Distributor
</Button>}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Router>
  );
}
export default Cards;
