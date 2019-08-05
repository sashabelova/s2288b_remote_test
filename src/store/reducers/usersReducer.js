import * as actionTypes from "../actions/actionTypes";

const initialState = {
    users: [],
    error: false
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.SET_USERS:
            const usersInited = action.userData;
            return {
                ...state,
                users: state.users.concat( usersInited ),
                error: false,

            };


        case actionTypes.FETCH_USERS_FAILED:
            return {
                ...state,
                error: true
            };

        default:
            return state;
    }

};

export default usersReducer;

