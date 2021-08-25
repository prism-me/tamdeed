import React from 'react';
import exp_bg_img from "../../../assets/images/about/exp_bg_img.jpg";

const AgsExperience = () => {
    return (
        <div className="ex-paths">
            <h2 className="InfoTitle">ABOUT THE AGS EXPERIENCE</h2>
            <div className="ex-content">
                <div className="ex-img-hld" >
                    <img alt={"#"} src={exp_bg_img}
                         className="exp-img"/>
                </div>
                <div className="text-content">
                    <div className="d-flex txt-c" >
                        <p>At American Gulf School, we believe that a diverse curriculum broadens not only minds but
                            opportunities too. Our learners are encouraged to question and experiment to find answers to
                            critical thinking questions, giving each student confidence within their own ability to
                            achieve their full potential. It is designed and delivered to bring out the best in our
                            learners, both academically and personally.<br/> Our curriculum is standard driven delivered
                            through project-based learning that has been adapted to incorporate Arabic and Islamic
                            studies. We believe that learners should develop life skills in conjunction with their
                            academic skills.</p>
                    </div>
                    <div className="d-flex btn-h">
                        <button className={"viewButton"}>View more ></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgsExperience;