import React, { useEffect, useState } from "react";
import BottomTabNavigator from "../components/BottomTabNavigator";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import {
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/BounceLoader";
import BackToTop from "../components/BackToTop";
import ClearIcon from '@material-ui/icons/Clear';
import { types } from "../redux/global/types";
import "./Layout.scss";
import { connect } from "react-redux";
import { Dropdown } from "react-bootstrap";


const drawerWidth = `100%`;
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

function Layout(props) {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const { global } = props;
  return (
    <div
      className={`layout ${global?.activeLanguage === "ar"
        ? "arabic-direction"
        : "english-direction"
        }`}
    >
      <div
        className={`${props.showSpinner ? "d-flex" : "d-none"
          } flex-column text-center align-items-center justify-content-center`}
        style={{
          position: "absolute",
          zIndex: 99999,
          height: "100%",
          width: "100%",
          background: "rgba(255,255,255,0.6)",
        }}
      >
        <ClipLoader color={"#1a2c52e6"} loading={true} size={80} />
      </div>

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
            <div className="d-flex justify-content-between align-items-center"
              style={{ background: "#FCB800" }}
            >
              <p className={"text-white my-0 ml-2"}>
                Menu
              </p>
              <span className="DrawerCloseIcon mr-4">
                <ClearIcon
                  onClick={() => {
                    toggleDrawer(false);
                  }}
                />
              </span>
            </div>
            <div className="drawer-menu">
              <List
                component="nav"
                aria-label="main mailbox folders"
                className="ListStyle"
              >
                <ListItem button
                  selected={true}
                >
                  <ListItemText
                    onClick={() => {
                      history.push(`#`);
                      toggleDrawer(false);
                    }}
                    primary="Shop"
                  />
                </ListItem>
                <ListItem button>
                  <ListItemText
                    onClick={() => {
                      history.push(`#`);
                      toggleDrawer(false);
                    }}
                    primary="Page1"
                  />
                </ListItem>
                <ListItem button>
                  <ListItemText
                    onClick={() => {
                      history.push(`#`);
                      toggleDrawer(false);
                    }}
                    primary="Page2"
                  />
                </ListItem>
                <ListItem button>
                  <ListItemText
                    onClick={() => {
                      history.push(`#`);
                      toggleDrawer(false);
                    }}
                    primary="Page3"
                  />
                </ListItem>
                <ListItem button>
                  <ListItemText
                    onClick={() => {
                      history.push(`#`);
                      toggleDrawer(false);
                    }}
                    primary="Page4"
                  />
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
      <BottomTabNavigator
        show={visible}
        toggleDrawer={(show) => toggleDrawer(show)}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  {
    console.log("spinner", state?.globalReducer?.showSpinner)
  }
  return {
    showSpinner: state?.globalReducer?.showSpinner,
    global: state.globalReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveLanguage: (language) =>
      dispatch({
        type: types.SET_ACTIVE_LANGUAGE,
        payload: {
          language: language,
        },
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);