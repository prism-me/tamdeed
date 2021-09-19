import React from 'react';
import exp_bg_img from "../../../assets/images/about/About the AGS Experience Photo.JPG";

const AgsExperience = () => {
    return (
        <div className="ex-paths">
            <h2 className="InfoTitle">ABOUT THE AGS EXPERIENCE</h2>
            <div className="ex-content">
                <div className="ex-img-hld" >
                    <img alt={"#"} src={exp_bg_img}
                        className="exp-img" />
                </div>
                <div className="text-content">
                    <div className="d-flex txt-c" >
                        <p>At American Gulf School, an American Curriculum School in Sharjah, we believe that a diverse curriculum broadens not only minds but opportunities too. Our learners are encouraged to question and experiment to find answers to critical thinking questions, giving each learner confidence within their own ability to achieve their full potential. It is designed and delivered to bring out the best in our learners, both academically and personally. We pride ourselves on being one of the best international schools in the UAE.</p>
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