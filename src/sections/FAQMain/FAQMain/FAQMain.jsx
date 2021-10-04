import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container } from "react-bootstrap";
import AccordionItem from "../../../components/AccordionItem";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function FAQMain(props) {
    const classes = useStyles();
    return (
        <div className="FAQMain">
            <h1 className="FAQTitle">
                FREQUENTLY ASKED QUESTIONS
            </h1>
            <Container>
                <div className={classes.root}>
                    {props.faqData?.map((x, index) => (
                        <AccordionItem
                            key={index + x.questions}
                            question={x.questions}
                            answer={x.answers}
                            index={index}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default FAQMain;