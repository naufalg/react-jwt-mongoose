import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

export default function Home() {
  return (
    <div>
      <Typography variant="h3">Home Page</Typography>
      <Link to="/sign-up">
        <Typography variant="h5">Register</Typography>
      </Link>
      <Link to="/sign-in">
        <Typography variant="h5">Login</Typography>
      </Link>
    </div>
  );
}
