import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Button } from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import LockIcon from "@material-ui/icons/Lock";

// REDUX
import { userLogin } from "../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

import { useStyles } from "./Custom Styles/contentForm";

const DetailsScreen = ({ history }) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phn, setPhn] = useState("");
  const [dob, setDob] = useState("");

  // REDUX
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  // redirect to home page if logged in
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [history, userInfo]);

  // submit handler
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.heading} variant="h1" component="h4">
        Details Secrets
      </Typography>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Paper elevation={18} className={classes.paper}>
            {/*// FORM FOR LOGIN //*/}
            <Grid container spacing={10}>
              {/* LEFT SIDE */}
              <Grid item xs={12} md={6}>
                <FormControl variant="outlined" className={classes.input}>
                  <InputLabel htmlFor="outlined-adornment-name">
                    Name
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-name"
                    placeholder="Name"
                    required
                    type="text"
                    value={name}
                    multiline
                    rows={1}
                    onChange={(e) => setName(e.target.value)}
                    labelWidth={65}
                  />
                </FormControl>

                <FormControl variant="outlined" className={classes.input}>
                  <InputLabel htmlFor="outlined-adornment-bio">Bio</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-bio"
                    placeholder="Bio"
                    required
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    multiline
                    rows={4}
                    labelWidth={40}
                  />
                </FormControl>

                <FormControl variant="outlined" className={classes.input}>
                  <InputLabel htmlFor="outlined-adornment-address">
                    Address
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-address"
                    placeholder="Address"
                    required
                    type="text"
                    value={address}
                    multiline
                    rows={1}
                    onChange={(e) => setAddress(e.target.value)}
                    labelWidth={98}
                  />
                </FormControl>

                {/*//////////////////////     VALIDATION ERROR MESSAGE     ////////////////////////*/}
                {/* {error && <Message varient="error">{error}</Message>} */}
              </Grid>

              {/* RIGHT SIDE */}
              <Grid item xs={12} md={6}>
                <FormControl variant="outlined" className={classes.input}>
                  <InputLabel htmlFor="outlined-adornment-email">
                    Email
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-email"
                    placeholder="Email Address"
                    required
                    type="text"
                    value={email}
                    multiline
                    rows={1}
                    onChange={(e) => setEmail(e.target.value)}
                    labelWidth={66}
                  />
                </FormControl>

                <FormControl variant="outlined" className={classes.input}>
                  <InputLabel htmlFor="outlined-adornment-phn">
                    Phone
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-phn"
                    placeholder="Phone"
                    required
                    type="text"
                    value={phn}
                    multiline
                    rows={1}
                    onChange={(e) => setPhn(e.target.value)}
                    labelWidth={78}
                  />
                </FormControl>

                <FormControl variant="outlined" className={classes.input}>
                  <InputLabel htmlFor="outlined-adornment-dob">DOB</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-dob"
                    placeholder="Date Of Birth"
                    required
                    type="text"
                    value={dob}
                    multiline
                    rows={1}
                    onChange={(e) => setDob(e.target.value)}
                    labelWidth={55}
                  />
                </FormControl>

                {/*//////////////////////     VALIDATION ERROR MESSAGE     ////////////////////////*/}
                {/* {error && <Message varient="error">{error}</Message>} */}
              </Grid>
            </Grid>
            <Button
              className={classes.button}
              onClick={submitHandler}
              size="large"
              variant="contained"
              color="primary"
            >
              UPDATE
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DetailsScreen;