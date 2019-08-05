import * as actionTypes from "./actionTypes";
import axios from "axios";

const url = process.env.NODE_ENV === 'production' ? "/" : "http://s2288b.front.challenge.dev.monospacelabs.com/";


export const clearUsers = () => {
    return {
        type: actionTypes.CLEAR_USERS,
    };
};


export const setUsers = (userData) => {
    return {
        type: actionTypes.SET_USERS,
        userData: userData
    };
};

export const fetchUsersFailed = () => {
    return {
        type: actionTypes.FETCH_USERS_FAILED
    };
};


export const initUsers = () => {
    return dispatch => {
        dispatch(clearUsers());
        axios.get(`${url}users`)
            .then(response => {
                dispatch(setUsers(response.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(fetchUsersFailed());
            });
    };
};

export const statusChange = (id, active) => {
    return dispatch => {
        const userDats = {
            active: active,
        };

        axios.put(`${url}users/${id}/`, userDats)
            .catch(error => {
                console.log(error);
                dispatch(fetchUsersFailed());
            });
    };
};
