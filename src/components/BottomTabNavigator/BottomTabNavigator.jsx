import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { AiOutlineHome } from "react-icons/ai";
import InputIcon from '@material-ui/icons/Input';
import {
  IoMailOutline,
  IoPaperPlaneOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import ApplyNow from "../Modals/ApplyNow/ApplyNow";
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
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
        <Link to={`/${props.activeLanguage}/agsPortal`}>
          <button className={"BNButton d-flex justify-content-between align-items-center"}>
            <InputIcon className={"iconSize"} />
            <span>AGS Portal</span>
          </button>
        </Link>
        <Link to={`/${props.activeLanguage}/Enroll`}>
          <button className={"BNButton d-flex justify-content-between align-items-center"}>
            <PersonAddIcon className={"iconSize"} />
            <span>ENROLL</span>
          </button>
        </Link>
        <Link to={`/${props.activeLanguage}/contact`}>
          <button className={"BNButton d-flex justify-content-between align-items-center"}>
            <PhoneIcon className={"iconSize"} />
            <span>Contact Us</span>
          </button>
        </Link>
      </BottomNavigation>
    </div>
  );
}

export default BottomTabNavigator;
