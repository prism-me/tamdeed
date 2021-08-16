import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
// import ScrollUpButton from "react-scroll-up-button";

const BackToTop = () => {
  return (
    <div className="back-to-top">
      {/* <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={150}
        EasingType="easeOutCubic"
        AnimationDuration={500}
        ContainerClassName="ScrollUpButton__Container"
        TransitionClassName="ScrollUpButton__Toggled"
        style={{}}
        ToggledStyle={{}}
      ></ScrollUpButton> */}
      <div
        className="outer-circle"
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      >
        <div className="circle">
          <AiOutlineArrowUp color="#ffffff" />
        </div>
      </div>
    </div>
  );
};

export default BackToTop;
