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

const useStyles = makeStyles((theme) => ({
    controlsWrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: "100%",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    controlIcons: {
        color: "#777",

        fontSize: 50,
        transform: "scale(0.9)",
        "&:hover": {
            color: "#fff",
            transform: "scale(1)",
        },
    },

    bottomIcons: {
        color: "#999",
        "&:hover": {
            color: "#fff",
        },
    },

    volumeSlider: {
        width: 100,
    },
}));

const PrettoSlider = withStyles({
    root: {
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: "#fff",
        border: "2px solid currentColor",
        marginTop: -8,
        marginLeft: -12,
        "&:focus, &:hover, &$active": {
            boxShadow: "inherit",
        },
    },
    active: {},
    valueLabel: {
        left: "calc(-50% + 4px)",
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

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
            <div ref={ref} className={classes.controlsWrapper}>
                <div
                    className={"d-flex justify-content-center align-items-center"}
                >
                        <div className="video-promo-content mt-4 ">
                            {/*<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="RBZutrFFhTA" onClose={() => setOpen(false)} />*/}
                            <button className="btn video-play-icon" onClick={onPlayPause}>
                                {playing ? (
                                    <PauseIcon fontSize="playSize" />
                                ) : (
                                    <PlayArrowIcon fontSize="playSize" />
                                )}
                                {/*<PlayArrowIcon className={"playSize"}/>*/}
                            </button>
                           <div className={"d-flex justify-content-between align-items-center"}>
                               <h5 className={"overview-heading"}>
                                   heading
                               </h5>
                               <IconButton
                                   onClick={onToggleFullScreen}
                                   className={classes.bottomIcons}
                               >
                                   <FullScreen fontSize="large" />
                               </IconButton>
                           </div>
                        </div>
                        {/*<IconButton*/}
                        {/*    onClick={onPlayPause}*/}
                        {/*    className={classes.controlIcons}*/}
                        {/*    aria-label="play"*/}
                        {/*>*/}
                        {/*    {playing ? (*/}
                        {/*        <PauseIcon fontSize="inherit" />*/}
                        {/*    ) : (*/}
                        {/*        <PlayArrowIcon fontSize="inherit" />*/}
                        {/*    )}*/}
                        {/*</IconButton>*/}
                </div>
                {/*<Grid*/}
                {/*    container*/}
                {/*    direction="row"*/}
                {/*    justify="flex-end"*/}
                {/*    alignItems="center"*/}
                {/*    style={{ padding: 16 }}*/}
                {/*>*/}
                {/*    <Grid item>*/}
                {/*        <IconButton*/}
                {/*            onClick={onToggleFullScreen}*/}
                {/*            className={classes.bottomIcons}*/}
                {/*        >*/}
                {/*            <FullScreen fontSize="large" />*/}
                {/*        </IconButton>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}
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
