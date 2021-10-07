import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const AccordionItem = ({ question, answer, index }) => {
  const classes = useStyles();

  return (
    <Accordion defaultActiveKey={index} className="accordianStyle">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={"faqsubTitle"}>
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          className="faqsubTitle"
          dangerouslySetInnerHTML={{ __html: answer }}
        >
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
