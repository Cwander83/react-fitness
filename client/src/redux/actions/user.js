import * as constants from "../constants";

export const recieveUser = data => ({
   type: constants.RECIEVE_USER,
   data
});

export const logoutUser = id => ({
    type: constants.LOGOUT_USER,
    id
 });
 export const signInUser = () => {
    return dispatch => {
       fetch("/auth/isAuthenticated")
          .then(response => response.json())
          .then(data => dispatch(recieveUser(data)))
          .then(data => console.log(data));
    };
 };
 
export const authenticatedUser = () => {
   return dispatch => {
      fetch("/auth/isAuthenticated")
         .then(response => response.json())
         .then(data => dispatch(recieveUser(data)))
         .then(data => console.log(data));
   };
};
