import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        appBar: {
            position: 'relative',
            backgroundColor: "#fff",
            color: "#fff",
            boxShadow:"none"
        },
        title: {
            marginLeft: theme.spacing(2),
            flex: 1,
            color: "black"
        },
        closeIcon: {
            backgroundColor: "#1A2C52",
            color:"#fff"
        },
    }),
);
export default useStyles