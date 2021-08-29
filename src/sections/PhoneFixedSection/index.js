import React, { Fragment } from "react";
import "./style.scss";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";

function PhoneFixedSection() {
  return (
    <Fragment>
        <a href='tel:06 000000'> 
        <p className='fixed_phone'>
        <PhoneOutlinedIcon /> 06 000000
        </p>
      </a>
    </Fragment>
  );
}
export default PhoneFixedSection;
