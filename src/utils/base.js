import da from "simple-react-lightbox";

export const STRINGS = {
    ROUTES: {
        ABOUT_US: "/about",
        ACADEMICS: "/academics",
        AGS_PORTAL: "/agsPortal",
        STUDENT_CARE: "/Student-care",
        CONTACT_US: "/contact",
        CAREERS: "/careers",
        ENROLL: "/Enroll",
        PRIMARYSCHOOL: "/Primary-school",
        MIDDLE_SCHOOL: "/Middle-school",
        KINDERGARTEN: "/KinderGarten",
        FAQ: "/FAQ",
        ONLINE_FORM: "OnlineForm"
    },
    REQUEST_STATUS: 200,
    REGEX: {
        EMAIL: /\S+@\S+\.\S+/
    }
}

export function currentDate() {
    let date = new Date();
    let today = (date.getFullYear() + "-" + (("0" + (date.getMonth() + 1)).slice(-2)) + "-" + ("0" + date.getDate()).slice(-2));
    return today
}

export function convertedDate(st) {
    //22-08-2021
    let d = new Date(st);
    let date = ("0" + d.getDate()).slice(-2) + "-" + (("0" + (d.getMonth() + 1)).slice(-2)) + "-" + (d.getFullYear());
    return date
}