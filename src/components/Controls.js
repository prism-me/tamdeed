import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import FullScreen from "@material-ui/icons/Fullscreen";
import ags1 from "../assets/images/LifeInAGS/ags1.png";

const useStyles = makeStyles((theme) => ({
    controlsWrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    controlIcons: {
        color: "#fff",
        fontSize: 50,
        transform: "scale(0.9)",
        "&:hover": {
            color: "#fff",
            transform: "scale(1)",
        },
    },
}));

const Controls = forwardRef(
    (
        {
            onPlayPause,
            playing,
            onToggleFullScreen,
        },
        ref
    ) => {
        const classes = useStyles();
        const [anchorEl, setAnchorEl] = React.useState(null);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        const open = Boolean(anchorEl);
        const id = open ? "simple-popover" : undefined;

        return (
            <div ref={ref} className={classes.controlsWrapper}
            >
                <div
                    className={"d-flex justify-content-center align-items-center"}
                >
                        <div className="video-promo-content">
                            {/*<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="RBZutrFFhTA" onClose={() => setOpen(false)} />*/}
                            <button className="btn video-play-icon" onClick={onPlayPause}>
                                {playing ? (
                                    <PauseIcon fontSize="playSize" />
                                ) : (
                                    <PlayArrowIcon fontSize="playSize" />
                                )}
                                {/*<PlayArrowIcon className={"playSize"}/>*/}
                            </button>
                           <div className={"d-flex justify-content-start align-items-center"}>
                               <h5 className={"overview-heading"}>
                                   heading
                               </h5>
                           </div>
                        </div>
                </div>
            </div>
        );
    }
);

Controls.propTypes = {
    onSeek: PropTypes.func,
    onSeekMouseDown: PropTypes.func,
    onSeekMouseUp: PropTypes.func,
    onDuration: PropTypes.func,
    onRewind: PropTypes.func,
    onPlayPause: PropTypes.func,
    onFastForward: PropTypes.func,
    onVolumeSeekDown: PropTypes.func,
    onChangeDispayFormat: PropTypes.func,
    onPlaybackRateChange: PropTypes.func,
    onToggleFullScreen: PropTypes.func,
    onMute: PropTypes.func,
    playing: PropTypes.bool,
    played: PropTypes.number,
    elapsedTime: PropTypes.string,
    totalDuration: PropTypes.string,
    muted: PropTypes.bool,
    playbackRate: PropTypes.number,
};
export default Controls;
