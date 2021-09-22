import { React, useState } from 'react';
import vid_bg_img from "../../../assets/images/about/PrincipalMessageThumbnail.jpg";
import ModalVideo from "react-modal-video";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Container } from "react-bootstrap";

const PrincipleMessage = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className="PrincipleMessage">
            <h3 className="Title">PRINCIPAL'S MESSAGE</h3>
            <Container>
                <div className="d-flex justify-content-center align-items-center imgheight"
                    style={{ backgroundImage: `url(${vid_bg_img})` }}
                >
                    <div className="video-promo-content mt-4 ">
                        <ModalVideo channel='youtube' youtube={{ autoplay: 1, mute: 1 }} isOpen={isOpen} videoId="AmLy5qM7dEI" onClose={() => setOpen(false)} />
                        <button className="btn video-play-icon" onClick={() => setOpen(true)}>
                            <PlayArrowIcon className={"playSize"} />
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PrincipleMessage;