import { types } from "./types";

const initialState = {
    currentLng: "en"
};

const globalCurrentLanguageCodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ACTIVE_LANGUAGE: {
            return {
                ...state,
                currentLng: action.payload.code
            }
        }
        default:
            return state
    }
}

export default globalCurrentLanguageCodeReducer;