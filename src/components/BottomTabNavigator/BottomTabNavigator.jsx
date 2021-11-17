import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import ListIcon from '@material-ui/icons/List';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function BottomTabNavigator(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [modalShow, setModalShow] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bottom-navigator-wrapper">
      <BottomNavigation
        showLabels={false}
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <Link to={`#`}>
          <div className={"d-flex flex-column justify-content-center align-items-center"}
            onClick={() => props.toggleDrawer(true)}
          >
            <MenuIcon className={"iconSize"} />
            <p className={"textSize"}>
              Menu
            </p>
          </div>
        </Link>
        <Link to={`#`}>
          <div className={"d-flex flex-column justify-content-center align-items-center"}>
            <ListIcon className={"iconSize"} />
            <p className={"textSize"}>
              Categories
            </p>
          </div>
        </Link>
        <Link to={`#`}>
          <div className={"d-flex flex-column justify-content-center align-items-center"}>
            <SearchIcon className={"iconSize"} />
            <p className={"textSize"}>
              Search
            </p>
          </div>
        </Link>
        <Link to={`#`}>
          <div className={"d-flex flex-column justify-content-center align-items-center"}>
            <LocalMallIcon className={"iconSize"} />
            <p className={"textSize"}>
              Cart
            </p>
          </div>
        </Link>
      </BottomNavigation>
    </div>
  );
}

export default BottomTabNavigator;
