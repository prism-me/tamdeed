import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Container} from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function FAQMain (props) {
    const classes = useStyles();
    return (
        <div className="FAQMain">
            <h1 className="FAQTitle">
                FREQUENTLY ASKED QUESTIONS
            </h1>
            <Container>
                <div className={classes.root}>
                    {
                        props.faqList?.map((x, i) => (
                    <Accordion className={"accordianStyle"}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                {x.question}
                                {/**/}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {x.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                        ))
                    }
                </div>
            </Container>
        </div>
    );
}

export default FAQMain;