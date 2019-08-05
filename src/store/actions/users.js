import * as actionTypes from "./actionTypes";
import axios from "axios";
//import url from './api';


export const clear = () => {
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


export const initUsers = (token) => {
    return dispatch => {
        //dispatch(clear());
        // const headers = {
        //     Authorization: "Bearer " + token
        // };
        axios.get('./users.json')
            .then(response => {
                console.log(response.data);
                dispatch(setUsers(response.data));
            })
            .catch(error => {
                dispatch(fetchUsersFailed());
            });
    };
};