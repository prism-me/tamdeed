import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Container} from "react-bootstrap";
import Documents from "../../../components/Modals/Documents/Documents";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function AdmissionProcedure (props) {
    const classes = useStyles();
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="AdmissionProcedure">
            <h1 className="Title">
                ADMISSIONS PROCEDURE
            </h1>
            <Container>
                <div className={classes.root}>
                            <Accordion className={"accordianStyle"}>
                                <AccordionSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className={"accordianBorderStyle"}
                                >
                                    <Typography className={classes.heading}>
                                        <a href={"#applyOnline"}
                                           className={"text-dark text-decoration-none"}
                                        >
                                            <b>STEP 1 </b>&mdash; Complete the online application
                                        </a>
                                    </Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion className={"accordianStyle"}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className={"accordianBorderStyle"}
                                >
                                    <Typography className={classes.heading}>
                                        <b>STEP 2 </b>&mdash; Submit required documents for assessment via email to <u><a href="mailto:admissions@ags.ae" className={"text-dark"}>admissions@ags.ae</a></u>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        For international enrollments from outside the UAE, it is important for parents of children
                                        enrolling into Grade 2 or above to finalize the Transfer Certificate and Report Cards
                                        attestation process prior to leaving the country they are residing in.
                                        <ol>
                                            <li>Copy of student’s passport</li>
                                            <li>Progress reports from the last two years (Reports must be translated to English with
                                                official stamp)</li>
                                            <li>Copy of recent Standardized Assessments results (MAP, CAT4, etc.)</li>
                                            <li>Copy of any previously identified special educational needs including individual
                                                educational plans (IEP, ILP, etc.)</li>
                                        </ol>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={"accordianStyle"}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className={"accordianBorderStyle"}
                                >
                                    <Typography className={classes.heading}>
                                        <b>STEP 3 </b>&mdash; Pay application fee and book an assessment schedule
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        An application fee of AED 525 per student (inclusive of VAT, non-refundable, nontransferable and non-deductible) must be paid after submission of documents and
                                        completion of online application form to proceed with the assessment. Please refer
                                        to here for payment details. For students based outside the UAE and unable to
                                        attend an assessment in person, they will sit for CAT4 assessments and virtual
                                        interviews. Please note that a completed application does not guarantee admission
                                        to American Gulf School; the application fee is non-refundable for denied admissions.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={"accordianStyle"}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className={"accordianBorderStyle"}
                                >
                                    <Typography className={classes.heading}>
                                        <b>STEP 4 </b>&mdash; Admissions Committee reviews assessment and student’s profile
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Once all the required documentation has been completed, submitted and checked
                                        by the Admissions Committee, a decision will be communicated to the
                                        parents/guardians of their successful or unsuccessful application via email within 2 to
                                        3 days(further interview might be required). Offer Letters will be sent to successful
                                        applicants.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={"accordianStyle"}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className={"accordianBorderStyle"}
                                >
                                    <Typography className={classes.heading}>
                                        <b>STEP 5 </b>&mdash; Acceptance
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Once the applicant is accepted, the non-refundable Registration Fee of AED
                                        2,500 will be required within 10 days to secure their seat. This fee is
                                        adjustable against the first term’s tuition fees. The first term tuition is due
                                        prior to the student’s first day of school. Completed forms and remaining
                                        documentation must be submitted to our Admissions Office with the
                                        Registration Fee.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                    <center>
                        <button
                            className={"admissionButton"}
                            onClick={() => setModalShow(true)}
                        >
                            Click here to view the documents to be submitted once a student has been accepted and enrolled</button>
                    </center>
                    <Documents show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </Container>
        </div>
    );
}

export default AdmissionProcedure;