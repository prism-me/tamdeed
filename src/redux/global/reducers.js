// import { types } from "./types";

let initialState = {
    counter: 12,
    name: "faiza zakir khan",
    products: [],
    currentRole: 'admin'
};

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ROLE":
            return {
                ...state,
                currentRole: action.payload.role,
            };

        default: {
            return state;
        }
    }
};
export default globalReducer;