import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../redux/actions/users";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
  makeStyles,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { VisibilityOff, Visibility } from "@material-ui/icons";

const useStyles = makeStyles({
  button: {
    marginTop: "0.8rem",
    marginBottom: "0.5rem",
    width: "16rem",
  },
});

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const history = useHistory();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("please enter a valid email")
      .required("Required"),
    password: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const payload = { email: values.username, password: values.password };

      dispatch(signin(payload, history));
    },
  });

  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={10} style={{ padding: "2rem" }}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <h2 id="h2">Sign In</h2>
            </Grid>
          </Grid>

          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="username"
              label="Username"
              name="username"
              type="username"
              placeholder="Enter Your Name"
              onChange={formik.handleChange}
              helperText={formik.errors.username}
              error={formik.errors.username}
              fullWidth
              required
            />

            <TextField
              label="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              onChange={formik.handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              helperText={formik.errors.password}
              error={formik.errors.username}
              fullWidth
              required
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!(formik.isValid && formik.dirty)}
              className={classes.button}
            >
              {" "}
              Sign In
            </Button>
            <Button
              onClick={() => {
                alert("hello");
              }}
              variant="contained"
              color="primary"
              disabled={!(formik.isValid && formik.dirty)}
              className={classes.button}
            >
              {" "}
              Log In
            </Button>
            <Typography>
              <Link href="#">Forgot password?</Link>
            </Typography>

            {/* <Typography>
              Create new account? <Link href="#">Register</Link>
            </Typography> */}
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
