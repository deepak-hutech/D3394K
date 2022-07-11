import axios from "axios";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
// import Api from "https://jsonplaceholder.typicode.com/posts";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
const fetchData = (url) => {
  return axios.get(url);
  // console.log(url);
};

// post method
const addData = (url, payload = null) => {
  return axios.post(url, payload);
};
// blogs
function* fetchBlog(action) {
  try {
    const user = yield call(
      fetchData,
      "https://jsonplaceholder.typicode.com/posts"
    );
    yield put({ type: "POST_FETCH_SUCCEEDED", result: user });
  } catch (e) {
    yield put({ type: "POST_FETCH_FAILED", error: e.message });
  }
}
// photos
function* fetchPhotos(action) {
  try {
    const fetchPhoto = yield call(
      fetchData,
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
      fetchData,
      "https://jsonplaceholder.typicode.com/comments"
    );
    yield put({ type: "COMMENT_FETCH_SUCCEEDED", result: fetchComment });
  } catch (error) {
    yield put({ type: "COMMENT_FETCH_FAILED", error: e.message });
  }
}

// post data
function* addBlogs(action) {
  console.log(action);
  try {
    const addBlog = yield call(
      addData,
      "https://jsonplaceholder.typicode.com/posts",
      action.payload
    );
    yield put({ type: "ADDBLOGS_POST_SUCCEEDED", result: addBlog });
  } catch (error) {
    yield put({ type: "ADDBLOGS_POST_FAILED", error: e.message });
  }
}

// post contact us
function* addContactUs(action) {
  console.log(action);
  try {
    const addContactUs = yield call(
      addData,
      "https://jsonplaceholder.typicode.com/posts",
      action.payload
    );
    yield put({ type: "ADDBLOGS_POST_SUCCEEDED", result: addContactUs });
  } catch (error) {
    yield put({ type: "ADDBLOGS_POST_FAILED", error: e.message });
  }
}

// post comments
function* addComments(action) {
  console.log(action);
  try {
    const addComment = yield call(
      addData,
      "https://jsonplaceholder.typicode.com/posts",
      action.payload
    );
    yield put({ type: "ADDBLOGS_POST_SUCCEEDED", result: addComment });
  } catch (error) {
    yield put({ type: "ADDBLOGS_POST_FAILED", error: e.message });
  }
}
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("POST_FETCH_REQUESTED", fetchBlog);
  yield takeEvery("PHOTOS_FETCH_REQUESTED", fetchPhotos);
  yield takeEvery("COMMENT_FETCH_REQUESTED", fetchComments);
  yield takeEvery("ADDBLOGS_POST_REQUESTED", addBlogs);
  yield takeEvery("ADDCONTACTUS_POST_REQUESTED", addContactUs);
  yield takeEvery("ADDCOMMENTS_POST_REQUESTED", addComments);
}
export default mySaga;
