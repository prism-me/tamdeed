import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        appBar: {
            position: 'relative',
            backgroundColor: "#fff",
            color: "#fff",
            boxShadow:"none"
        },
        closeIcon: {
            backgroundColor: "#1A2C52",
            color:"#fff"
        },
    }),
);
export default useStyles