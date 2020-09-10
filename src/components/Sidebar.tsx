import * as React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import MusicVideoIcon from "@material-ui/icons/MusicVideo";
import PersonIcon from "@material-ui/icons/Person";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import MessageIcon from "@material-ui/icons/Message";
import ExploreIcon from "@material-ui/icons/Explore";
import SettingsIcon from "@material-ui/icons/Settings";

export const Sidebar = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between">
      <Box display="flex" justifyContent="center" flexDirection="column">
        <MusicVideoIcon fontSize="large" />
        <Typography component="span" variant="h5" color="textPrimary">
          WeMusic
        </Typography>
      </Box>
      <List component="nav">
        <ListItem alignItems="center" button>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Me" />
            </Box>
          </Box>
        </ListItem>
        <ListItem button>
          <Box display="flex" flexDirection="column">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </Box>
        </ListItem>
        <ListItem button>
          <Box display="flex" flexDirection="column">
            <ListItemIcon>
              <ExploreIcon />
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </Box>
        </ListItem>
        <ListItem button>
          <Box display="flex" flexDirection="column">
            <ListItemIcon>
              <MusicNoteIcon />
            </ListItemIcon>
            <ListItemText primary="Collaborate" />
          </Box>
        </ListItem>
        <ListItem button>
          <Box display="flex" flexDirection="column">
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </Box>
        </ListItem>
        <ListItem button>
          <Box
            display="flex"
            marginTop="auto"
            flexDirection="column"
            justifyContent="center"
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </Box>
        </ListItem>
      </List>
    </Box>
  );
};
