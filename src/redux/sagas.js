import {put, takeEvery, take, select, all, call} from 'redux-saga/effects'
import {REQUEST_POSTS, FETCH_POSTS} from './types';
import {showLoader, hideLoader, showAlert} from './actions'

function* sagaWatcherRequestPosts() {
    yield takeEvery(REQUEST_POSTS, sagaWorkerRequestPosts);
}

function* sagaWorkerRequestPosts() {

    function randomInteger(min, max) {
      // случайное число от min до (max+1)
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }

    try {
        yield put(showLoader())
        let limit = randomInteger(1, 10);
        let url = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`;
        let response = yield call(fetch, url);
        let posts = yield call(response.json.bind(response), null);
        yield put({ type: FETCH_POSTS, payload: posts })
        yield put(hideLoader())
    } catch(e) {
        yield put(showAlert(e.message));
        yield put(hideLoader())
    }
}

function* sagaLogger() {
    while (true) {
      const action = yield take('*')
      const state = yield select()
      console.log('LOGGER/action:', action)
      console.log('LOGGER/state after:', state)
  }
}

export default function* rootSaga() {
    yield all([
        sagaWatcherRequestPosts(),
        sagaLogger()
    ])
}