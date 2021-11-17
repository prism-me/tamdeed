import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
// import ScrollUpButton from "react-scroll-up-button";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);
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
            {isVisible &&
                <div
                    className="outer-circle"
                    onClick={scrollToTop}
                // onClick={() =>
                //   window.scrollTo({ top: 0, behavior: "smooth" })
                // }
                >
                    <div className="circle">
                        <AiOutlineArrowUp className={"iconcolor"} />
                    </div>
                </div>
            }
        </div>
    );
};

export default BackToTop;
