import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { logout } from "../redux/actions/users";
import { useDispatch, connect } from "react-redux";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  active: {
    backgroundColor: "#A9A9A9",
  },
  formcontrol: {
    minWidth: 100,
    color: "#ffffff",
    marginBottom: "1.2rem",
    marginRight: "2rem",
  },
}));

const NavBar = (props) => {
  const history = useHistory();
  const location = useLocation();

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { user } = props?.currentUser;

  const languages = [
    {
      code: "ne",
      name: "Nepali",
    },
    {
      code: "en",
      name: "English",
    },
  ];

  const itemList = [
    {
      text: t("home"),
      path: "/home",
    },
    {
      text: t("about"),
      path: "/about",
    },
  ];
  const [ln, setLn] = useState("");

  const handleChange = (event) => {
    setLn(event.target.value);
  };

  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(true);
  };

  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  const classes = useStyles();

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            onClick={handleDrawer}
            color="inherit"
            edge="start"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {t("app")}
          </Typography>
          <FormControl>
            <InputLabel className={classes.formcontrol}>Language</InputLabel>

            <Select
              className={classes.formcontrol}
              value={ln}
              onChange={handleChange}
            >
              {languages.map((item) => {
                const { code, name } = item;
                return (
                  <MenuItem
                    key={code}
                    value={code}
                    onClick={() => i18next.changeLanguage(code)}
                  >
                    {name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          {user ? (
            <Button onClick={handleLogout} color="inherit">
              {t("logout")}
            </Button>
          ) : (
            <Button onClick={() => history.push("/")} color="inherit">
              {t("login")}
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div style={{ width: "10rem" }}>
          <List>
            {itemList.map((item) => {
              const { text, path } = item;
              return (
                <ListItem
                  button
                  key={text}
                  onClick={() => history.push(path)}
                  className={location.pathname === path ? classes.active : null}
                >
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
          </List>
        </div>
      </Drawer>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUser: state.userSigninReducer.currentUser,
  };
};
export default connect(mapStateToProps)(NavBar);
