import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerActions } from "../../redux/actions/users.action";
import { useHistory } from "react-router-dom";

// material ui
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Paper from "@material-ui/core/Paper";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// style
const useStyles = makeStyles((theme) => ({
  // paper: {
  //   marginTop: theme.spacing(8),
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  // },
  // avatar: {
  //   margin: theme.spacing(1),
  //   backgroundColor: theme.palette.secondary.main,
  // },
  // form: {
  //   width: "100%", // Fix IE 11 issue.
  //   marginTop: theme.spacing(3),
  // },
  // submit: {
  //   margin: theme.spacing(3, 0, 2),
  // },

  root: {
    height: "100vh",
  },
  image: {
    // width:"50%",
    backgroundImage:
      "url(https://live.staticflickr.com/65535/48804388517_eb49e696dc_k.jpg)",
    // 'url(https://source.unsplash.com/random)'
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const classes = useStyles();

  // const [valueRadio, setValueRadio] = React.useState("M");

  // const radioChange = (event) => {
  //   setValueRadio(event.target.value);
  // };

  const dispatch = useDispatch();
  const history = useHistory();

  const [registerState, setRegisterState] = useState({
    fullname: "",
    email: "",
    password: "",
    address: "",
    gender: "M",
  });

  const handleChange = (event) => {
    // console.log("event", event);
    setRegisterState({
      ...registerState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Grid container component="main" className={classes.root}>
      {/* <Container component="main" maxWidth="xs"> */}
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PersonAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(event) => {
              dispatch(registerActions(registerState, event, history));
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="fullname"
                  variant="outlined"
                  required
                  fullWidth
                  id="fullname"
                  label="Full Name"
                  autoFocus
                  onChange={(event) => handleChange(event)}
                  value={registerState.fullname}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => handleChange(event)}
                  value={registerState.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(event) => handleChange(event)}
                  value={registerState.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  multiline
                  rows={4}
                  onChange={(event) => handleChange(event)}
                  value={registerState.address}
                />
              </Grid>
              <Grid>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender"
                    value={registerState.gender}
                    onChange={(event) => handleChange(event)}
                  >
                    <FormControlLabel
                      value="M"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="F"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Just a mere lil checkbox"
              />
            </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/sign-in" variant="body2">
                  Already have an account? Sign in &#8640;
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>{/* <Copyright /> */}</Box>
        {/* // </Container> */}
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  );
}
