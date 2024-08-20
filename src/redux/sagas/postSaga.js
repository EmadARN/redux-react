import { takeEvery, call, put } from "@redux-saga/core/effects";
import axios from "axios";
import { fetchPostsFailure, fetchPostsSuccess } from "../posts/postActions";
import { FETCH_POSTS_REQUEST } from "../posts/postTypes";

function* fetchPost(action) {
  try {
    const apiEndPoint = `https://jsonplaceholder.typicode.com/posts/${action.payload}`;
    const response = yield call(() => axios.get(apiEndPoint));
    yield put(fetchPostsSuccess(response.data));
  } catch (e) {
    yield put(fetchPostsFailure(e.message));
  }
}

export function* watchFetchPost() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPost);
}
