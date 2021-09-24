import React from "react";
import { useTranslation } from "react-i18next";

import { connect } from "react-redux";
import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: "10rem",
  },
}));

function Home(props) {
  const { t } = useTranslation();
  const { user } = props?.currentUser;

  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={6} md={3}>
        <TableContainer className={classes.root} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{t("name")}</TableCell>
                <TableCell>{t("caste")}</TableCell>
                <TableCell>{t("email")}</TableCell>
                <TableCell>{t("post")}</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>{user?.first_name}</TableCell>
                <TableCell>{user?.last_name}</TableCell>
                <TableCell>{user?.email}</TableCell>
                <TableCell>{user?.designation}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.userSigninReducer.currentUser,
  };
};
export default connect(mapStateToProps)(Home);
