import React from "react";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import BuildIcon from '@material-ui/icons/Build';
import { makeStyles, Typography, Toolbar, IconButton } from "@material-ui/core";
import Appbar from "@material-ui/core/AppBar";

// MUI Styling
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: "auto",
    marginRight: theme.spacing(2),
  },
}));

// Main export
function Navbar() {
  // Use imported inline styling
  const classes = useStyles();
  
  // Open or close the drawer
  const [drawerOpen, setDrawer] = React.useState(false);

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    console.log("clicked");
    console.log(drawerOpen);
    setDrawer(drawerOpen ? false : true);
  };

  // List of links for drawer
  const itemList = [
    {
      text: "About",
      icon: <AccountCircle/>
    },
    {
      text: "Projects",
      icon: <BuildIcon/>
    },
    {
      text: "Blog"
    },
    {
      text: "Contact"
    },
  ]

  return (
    <div className={classes.root}>
      <Appbar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
            <Drawer open={drawerOpen}>
              <List>
                {itemList.map((item, index) => {
                    const { text, icon } = item;
                    return(
                      <ListItem button key={text}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    )
                })}
              </List>
            </Drawer>
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Avery Stahl's Portfolio
          </Typography>
        </Toolbar>
      </Appbar>
    </div>
  );
}

export default Navbar;
