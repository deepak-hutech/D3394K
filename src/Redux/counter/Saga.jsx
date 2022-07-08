import axios from "axios";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
// import Api from "https://jsonplaceholder.typicode.com/posts";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
const fetchPost = (url) => {
  return axios.get(url);
};
const addPost = (url, payload = null) => {
  return axios.post(url, payload);
};
// blogs
function* fetchUser(action) {
  try {
    const user = yield call(
      fetchPost,
      "https://jsonplaceholder.typicode.com/posts"
    );
    yield put({ type: "USER_FETCH_SUCCEEDED", result: user });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", error: e.message });
  }
}
// photos
function* fetchPhotos(action) {
  try {
    const fetchPhoto = yield call(
      fetchPost,
      "https://jsonplaceholder.typicode.com/photos"
    );
    yield put({ type: "PHOTOS_FETCH_SUCCEEDED", result: fetchPhoto });
  } catch (error) {
    yield put({ type: "PHOTOS_FETCH_FAILED", error: e.message });
  }
}
// comments
function* fetchComments(action) {
  try {
    const fetchComment = yield call(
      fetchPost,
      "https://jsonplaceholder.typicode.com/comments"
    );
    yield put({ type: "COMMENT_FETCH_SUCCEEDED", result: fetchComment });
  } catch (error) {
    yield put({ type: "COMMENT_FETCH_FAILED", error: e.message });
  }
}
// post data
function* addBlogs(action) {
  try {
    const addBlog = yield call(
      fetchPost,
      "https://jsonplaceholder.typicode.com/posts"
    );
    yield put({ type: "ADDBLOGS_FETCH_SUCCEEDED", result: addBlog });
  } catch (error) {
    yield put({ type: "ADDBLOGS_FETCH_FAILED", error: e.message });
  }
}
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
  yield takeEvery("PHOTOS_FETCH_REQUESTED", fetchPhotos);
  yield takeEvery("ADDBLOGS_FETCH_REQUESTED", addBlogs);
  yield takeEvery("COMMENT_FETCH_REQUESTED", fetchComments);
}
export default mySaga;
