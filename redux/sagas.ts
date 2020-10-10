import { takeEvery, call, put, all } from 'redux-saga/effects';
import { createComment, createPost, addComment, apiError, addPost } from './store/store';
import { postComment, postPost } from '../lib/api';

function* commentWorkerSaga(action) {
    try {
        const res = yield call(postComment, action.payload);
        yield put(addComment(res));
    } catch (e) {
        yield put(apiError(e));
    }
}

function* postWorkerSaga(action) {
    try {
        const res = yield call(postPost, action.payload);
        const prep = { ...res, comments: [] };
        yield put(addPost(prep));
    } catch (e) {
        yield put(apiError(e));
    }
}

function* postSaga() {
    yield takeEvery(createPost, postWorkerSaga);
}

function* commentSaga() {
    yield takeEvery(createComment, commentWorkerSaga);
}

export function* rootSaga() {
    yield all([postSaga(), commentSaga()]);
}
