import * as React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      alignItems: "center",
      flexGrow: 1,
    },
    drawerPaper: {
      width: "inherit",
      height: "100%",
      overflowX: "hidden",
      overflowY: "hidden",
    },
    menuIconClosed: {
      position: "absolute",
      left: 0,
      top: 0,
    },
    menuIconOpen: {
      position: "absolute",
      right: 0,
      top: 0,
    },
    avatar: {
      top: "30px",
      alignSelf: "center",
      width: "150px",
      height: "150px",
    },
    profileName: {
      paddingTop: "50px",
    },
    cardsGrid: {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    card: {
      backgroundColor: "#F2EFF4",
      paddingLeft: "5px",
      paddingBottom: "30%",
    },
  })
);

export const RightBar = () => {
  const classes = useStyles();

  const [showProfile, setShowProfile] = React.useState(false);

  let profile;
  let menuIcon = (
    <MenuRoundedIcon
      fontSize="large"
      onClick={() => setShowProfile(!showProfile)}
    />
  );

  if (showProfile) {
    profile = (
      <div className={classes.root}>
        <Drawer
          style={{
            width: "25%",
            minHeight: "100vh",
            overflowY: "hidden",
            padding: 8,
          }}
          variant="persistent"
          anchor="right"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <IconButton className={classes.menuIconClosed}>{menuIcon}</IconButton>
          <Box display="flex" justifyContent="center">
            <Avatar className={classes.avatar} src=""></Avatar>
          </Box>
          <Grid
            container
            spacing={4}
            justify="center"
            className={classes.cardsGrid}
          >
            <Grid item xs={12}>
              <Typography className={classes.profileName}>
                <Box
                  textAlign="center"
                  fontWeight={"fontWeightBold"}
                  fontSize="24px"
                >
                  User Name
                </Box>
              </Typography>
              <Typography>
                <Box textAlign="center" fontSize="16px">
                  User description goes here.
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Card variant="outlined" className={classes.card}>
                <Typography>
                  <Box textAlign="left">
                    Liked Collabs
                    <IconButton>
                      <ArrowForwardRoundedIcon />
                    </IconButton>
                  </Box>
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card variant="outlined" className={classes.card}>
                <Typography>
                  <Box textAlign="left">
                    Your Collabs
                    <IconButton>
                      <ArrowForwardRoundedIcon />
                    </IconButton>
                  </Box>
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Drawer>
      </div>
    );
  }

  return (
    <>
      <IconButton className={classes.menuIconOpen}>
        {menuIcon}
        {profile}
      </IconButton>
    </>
  );
};
