import React from "react";
import { Link } from "react-router-dom";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3">Home Page</Typography>
      <Link to="/sign-up">
        <Button color="primary" variant="contained" className={classes.submit}>
          Register
        </Button>
      </Link>
      <Link to="/sign-in">
        <Button color="secondary" variant="contained" className={classes.submit}>
          Login
        </Button>
      </Link>
    </div>
  );
}
