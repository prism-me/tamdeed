import React, { useState, useEffect } from "react";
import BottomTabNavigator from "../components/BottomTabNavigator";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import logo from "../assets/images/logo/logo.png";
import {
  makeStyles
} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";
import BackToTop from "../components/BackToTop";
import ClearIcon from '@material-ui/icons/Clear';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const drawerWidth = 280;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
  nested: { paddingLeft: theme.spacing(4) }
}));


export default function Layout(props) {
  const history = useHistory();
  const classes = useStyles();
  const [visible, setVisible] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState("/");

  //.......dropdown code
  const [openDropDown, setOpenDropDown] = useState(false);
  const handleDropClick = () => {
    setOpenDropDown(!openDropDown);
  };

  useEffect(() => {
    // console.log()
    return history.listen((location) => {
      if (location.pathname) {
        setCurrentLink(location.pathname)
      }
    })
  }, [history])


  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <div>
      <Hidden mdUp>
        <nav className={classes.drawer}>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor={"left"}
            open={drawerOpen}
            onClose={() => toggleDrawer(false)}
          >
            <div className="d-flex justify-content-end align-items-center">
              <span className="DrawerCloseIcon">
                <ClearIcon
                  onClick={() => {
                    toggleDrawer(false);
                  }}
                />
              </span>
            </div>
            <div className="drawer-menu">
              <div className="drawer-logo d-flex justify-content-center align-items-center">
                <img
                  src={logo}
                  alt="AGS Logo"
                  style={{ width: "65%" }}
                  onClick={() => {
                    history.push("/");
                    toggleDrawer(false);
                  }}
                />
              </div>
              <List
                component="nav"
                aria-label="main mailbox folders"
                className="ListStyle"
              >
                <ListItem button >
                  <ListItemText
                    onClick={() => {
                      history.push(`/about`);
                      toggleDrawer(false);
                    }}
                    primary="About"
                  />
                </ListItem>
                <ListItem button>
                  <ListItemText
                    onClick={() => {
                      history.push(`/solution-service`);
                      toggleDrawer(false);
                    }}
                    primary="Solutions & Services"
                  />
                </ListItem>
                <ListItem button>
                  <ListItemText
                    onClick={() => {
                      history.push(`/`);
                      toggleDrawer(false);
                    }}
                    primary="Industries"
                  />
                </ListItem>
                <ListItem button>
                  <ListItemText
                    onClick={() => {
                      history.push(`/contact`);
                      toggleDrawer(false);
                    }}
                    primary="Contact us"
                  />
                </ListItem>
                <ListItem button>
                  <ListItemText
                    onClick={() => {
                      history.push(`/media-center`);
                      toggleDrawer(false);
                    }}
                    primary="Media Center"
                  />
                </ListItem>
                {/* <ListItem button onClick={handleDropClick}>
                  <ListItemText
                    primary="Media Center"
                  />
                  {openDropDown ? <ExpandLess /> : <ExpandMore />}
                </ListItem> */}
                <Collapse in={openDropDown} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary="Media Center"
                        onClick={() => {
                          history.push("/media-center");
                          toggleDrawer(false);
                        }}
                      />
                    </ListItem>
                  </List>
                </Collapse>
                <ListItem button>
                  <ListItemText
                    onClick={() => {
                      history.push(`/`);
                      toggleDrawer(false);
                    }}
                  >
                    <a href="mailto:info@tamdeed.ae"
                      style={{
                        background: "#2C8F8F",
                        border: "none",
                        color: "white",
                        padding: "0.5rem 0rem",
                        borderRadius: "60px",
                        width: "100%"
                      }}
                      className="text-decoration-none">Enquiries</a>
                  </ListItemText>
                </ListItem>
              </List>
            </div>
          </Drawer>
        </nav>
      </Hidden>

      <Navbar
        show={visible}
        toggleDrawer={(show) => toggleDrawer(show)}
      />
      {props.children}
      <BackToTop />
      <Footer />
      <BottomTabNavigator />
    </div>
  );
}