import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { AiOutlineHome } from "react-icons/ai";
import {
  IoMailOutline,
  IoPaperPlaneOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import ApplyNow from "../Modals/ApplyNow/ApplyNow";
import ContactMailIcon from '@material-ui/icons/ContactMail';

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function BottomTabNavigator() {
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
        <Link to="/">
          <AiOutlineHome className="tab-icon" />
        </Link>
        <Link to="#">
          <ContactMailIcon className="tab-icon" />
        </Link>
        {/*<a href="mailto:enrollment@eahm.ae">*/}
        {/*  <IoMailOutline className="tab-icon" />*/}
        {/*</a>*/}
        <Link to="#" onClick={() => setModalShow(true)}>
          <IoPaperPlaneOutline className="tab-icon" />
          <p>Apply</p>
        </Link>
      </BottomNavigation>
      <ApplyNow show={modalShow} onHide={() => setModalShow(false)} type="ug" />
    </div>
  );
}

export default BottomTabNavigator;
