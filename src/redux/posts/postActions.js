import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from "./postTypes";

export const fetchPostsRequest = (id) => {
  return {
    type: FETCH_POSTS_REQUEST,
    payload: id,
  };
};

export const fetchPostsSuccess = (users) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: users,
  };
};

export const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

// export const fetchUsers = () => {
//   return (dispatch) => {
//     dispatch(fetchUsersRequest());
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         dispatch(fetchUsersSuccess(response.data));
//       })
//       .catch((error) => {
//         dispatch(fetchUsersFailure(error.message));
//       });
//   };
// };
