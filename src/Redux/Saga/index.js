import { call, put, takeEvery } from "redux-saga/effects"
import axios from "axios"
function* asyncPost({ payload }) {
    //Initiate a login request and return the result
    const res = yield call(axios.get, "https://jsonplaceholder.typicode.com/posts")
    //Get the results
    const payload = res.data.data
    //     Execute distribution
    yield put({ type: "FETCH_POSTS", payload: payload })
}
​
export default function* index() {
    //type of monitoring action
    yield takeEvery("FETCH_POSTS", asyncPost)
}