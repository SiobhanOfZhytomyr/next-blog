import {
  createAction,
  configureStore,
  createReducer,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../sagas";
import { RawComment, Comment, Posts } from "../../lib/types";

const initialiseSagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware(), initialiseSagaMiddleware];

export const getAllPosts = createAction<Posts>("getPosts");
export const createComment = createAction<RawComment>("createComment");
export const createPost = createAction("createPost");
export const addComment = createAction<Comment>("addComment");
export const apiError = createAction<string>("apiErrored");

export type State = {
  posts: Posts;
  error: string | null;
};

const defaulState: State = {
  posts: [],
  error: null,
};

const rootReducer = createReducer(defaulState, (builder) => {
  builder
    .addCase(getAllPosts, (state, action) => {
      state.posts.push(...action.payload);
    })
    .addCase(addComment, (state, action) => {
      const pid = state.posts.findIndex(
        (post) => post.id === action.payload.postId
      );
      state.posts[pid].comments.push(action.payload);
    })
    .addCase(apiError, (state, action) => {
      state.error = action.payload;
    });
});

export const store = configureStore({ reducer: rootReducer, middleware });
initialiseSagaMiddleware.run(rootSaga);
