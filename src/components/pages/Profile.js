import React from "react";
import jwtDecode from "jwt-decode";
import { useHistory } from "react-router-dom";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Profile() {
  const history = useHistory();
//   const dispatch = useDispatch();

  const userToken = localStorage.getItem("token");
  const decodedToken = jwtDecode(userToken);
  console.log("decodedToken", decodedToken);

//   gender
 const genderCheck =  decodedToken.gender === "M" ? "Male" : "Female"

  //   logout
  const logoutFunction = (event, history) => {
    event.preventDefault();
    localStorage.clear();
    history.push("/");
  };

  // material ui
  const classes = useStyles();
  return (
    <div>
      <Container component="main" maxWidth="md">
        <Typography variant="h3">My Profile</Typography>
        <br />
        <Typography variant="h4">Hello {decodedToken.fullname}</Typography>
        <Typography variant="h6">
          Your email is: {decodedToken.email}
        </Typography>
        <Typography variant="h6">
          I'd assume you are a {genderCheck} and <br/> live in {decodedToken.address}, right?
        </Typography>
        <form
          onSubmit={(event) => {
            logoutFunction(event, history);
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log Out
          </Button>
        </form>
      </Container>
    </div>
  );
}
