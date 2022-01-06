import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function BottomTabNavigator(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

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
        <Link to={`/`}>
          <div className={"d-flex flex-column justify-content-center align-items-center"}>
            <HomeIcon className={"iconSize"} />
            <p className={"textSize"}>
              Home
            </p>
          </div>
        </Link>
        <Link to={`#`}>
          <div className={"d-flex flex-column justify-content-center align-items-center"}>
            <CategoryIcon className={"iconSize"} />
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
            <PhoneIcon className={"iconSize"} />
            <p className={"textSize"}>
              Phone
            </p>
          </div>
        </Link>
      </BottomNavigation>
    </div>
  );
}

export default BottomTabNavigator;
