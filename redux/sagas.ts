import { takeEvery, call, put } from "redux-saga/effects";
import {Comment, RawComment} from '../lib/types'
import {createComment, createPost, addComment,apiError} from './store/store'
import {postComment} from '../lib/api'

function* commentWorkerSaga(action) {
    try {
        const res = yield call(postComment, action.payload)
        yield put(addComment(res))
    }
    catch(e) {
        yield put(apiError(e))
    }
}

export function* rootSaga() {
    yield takeEvery(createComment, commentWorkerSaga);
}