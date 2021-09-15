import React from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import useStyles from "./style";
import { Container } from "react-bootstrap";

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="left" ref={ref} {...props} />;
// });

export default function ApplyOnlineForm({ open, setOpen, }) {
    // const classes = useStyles();
    // const handleClose = () => {
    //     setOpen(false);
    // };
    return (
        <div className={"home-page"}>
            {/*<Dialog*/}
            {/*    fullScreen*/}
            {/*    open={open}*/}
            {/*    onClose={handleClose}*/}
            {/*    TransitionComponent={Transition}*/}
            {/*>*/}
            {/*    <AppBar className={classes.appBar}>*/}
            {/*        <Toolbar>*/}
            {/*            <IconButton*/}
            {/*                edge="start"*/}
            {/*                onClick={handleClose}*/}
            {/*                aria-label="close"*/}
            {/*                className={classes.closeIcon}*/}
            {/*            >*/}
            {/*                <CloseIcon />*/}
            {/*            </IconButton>*/}
            {/*        </Toolbar>*/}
            {/*    </AppBar>*/}
            <Container>
                <p className="SubTitleOfForm">
                    Thank you for your interest in American Gulf School, we look forward to receiving your application. Please use this form to submit an application for your son/daughter. Once your application has been received, a member of the admissions team will contact you to request the essential supporting documents required to process your son/daughter’s application. Please note, your application will become ‘active’ once all of the essential supporting documents are received.
                </p>
                <div iw-id="admissions-enquiry">
                </div>
            </Container>
            {/*</Dialog>*/}
        </div>
    );
}