import React from "react";
import { withRouter } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import { Divider, Hidden } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountBox from "@material-ui/icons/AccountBoxTwoTone";
import MenuIcon from "@material-ui/icons/Menu";
import BuildIcon from '@material-ui/icons/BuildTwoTone';
import BookIcon from '@material-ui/icons/BookTwoTone';
import ForumIcon from '@material-ui/icons/ForumTwoTone';
import { makeStyles, Typography, Toolbar, IconButton } from "@material-ui/core";
import Appbar from "@material-ui/core/AppBar";

// MUI Styling
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  navStyle: {
    backgroundColor: "#303030",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: "20rem",
    backgroundColor: "#7A2626",
    marginRight: theme.spacing(2)
  },
  divider: {
    marginTop: "auto",
    marginBottom: "auto"
  },
  listItems: {
    paddingTop: "2.25rem",
    paddingBottom: "2.25rem",
  },
  listText: {
    color: "#ECF4F9",
  },
  listIcon: {
    color: "#ECF4F9"
  },
  title: {
    marginLeft: "auto",
    marginRight: theme.spacing(2),
    padding: ".5rem",
    color: "#ECF4F9",
    flexWrap: 'wrap',
    fontSize: '2rem',
  },
  drawerTitle: {
    align:'center',
    color: "blue"
  }
}));

// Main export
function Navbar (props) {
  
  // Utilize React Router Dom history to display correct component with url
  const { history } = props;
  
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
      icon: <AccountBox/>,
      urlClick: () => history.push("/")
    },
    {
      text: "Projects",
      icon: <BuildIcon/>,
      urlClick: () => history.push("/projects")
    },
    {
      text: "Blog",
      icon: <BookIcon/>,
      urlClick: () => history.push("/blog")
    },
    {
      text: "Contact",
      icon: <ForumIcon/>,
      urlClick: () => history.push("/contact")
    },
  ]

  // Drawer container
  const drawer = (
    <div className={classes.divider}>
      <Typography className={classes.drawerTitle}>
        Avery Stahl
        \n Full Stack Web Developer
      </Typography>
      <Divider className={classes.divider}/>
      <List >
        {itemList.map((item, index) => {
          const { text, icon, urlClick } = item;
          return(
            <ListItem button className={classes.listItems} key={text} onClick={urlClick}>
              <ListItemIcon className={classes.listIcon}>{icon}</ListItemIcon>
              <ListItemText className={classes.listText} primary={text} />
            </ListItem>
          )
        })}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      {/* DESKTOP */}
      <Hidden mdUp implementation="js">
      <Appbar position="static" className={classes.navStyle}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
            <Drawer classes={{paper: classes.drawer}} open={drawerOpen} ModalProps={{keepMounted:true}}>
              {drawer}
            </Drawer>
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Avery Stahl's Portfolio
          </Typography>
        </Toolbar>
      </Appbar>
      </Hidden>

      {/* MOBILE */}
      <Hidden smDown implementation="js">
        <Drawer classes={{paper: classes.drawer}} variant="permanent" anchor="left">
          {drawer}
        </Drawer>
        <Appbar position="static" className={classes.navStyle}>
          <Typography variant="h4" className={classes.title}>
            Avery Stahl's Portfolio
          </Typography>
        </Appbar>
      </Hidden>
    </div>
  );
}

export default withRouter(Navbar);
