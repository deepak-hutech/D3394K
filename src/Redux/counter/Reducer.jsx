import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
const initialStatePost = {
  fetching: false,
  result: null,
  error: null,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
// post
const listPost = (state = initialStatePost, action) => {
  switch (action.type) {
    case "POST_FETCH_REQUESTED":
      return {
        ...state,
        fetching: true,
        result: null,
        error: null,
      };
    case "POST_FETCH_SUCCEEDED":
      return {
        ...state,
        fetching: false,
        result: action.result.data,
        error: null,
      };

    case "POST_FETCH_FAILED":
      return {
        ...state,
        fetching: false,
        result: null,
        error: action.error,
      };
    default:
      return state;
  }
};
// photos
const listPhotos = (state = initialStatePost, action) => {
  switch (action.type) {
    case "PHOTOS_FETCH_REQUESTED":
      return {
        ...state,
        fetching: true,
        result: null,
        error: null,
      };
    case "PHOTOS_FETCH_SUCCEEDED":
      return {
        ...state,
        fetching: false,
        result: action.result.data,
        error: null,
      };

    case "PHOTOS_FETCH_FAILED":
      return {
        ...state,
        fetching: false,
        result: null,
        error: state.error,
      };
    default:
      return state;
  }
};
// blogs
const postBlog = (state = initialStatePost, action) => {
  switch (action.type) {
    case "ADDBLOGS_FETCH_REQUESTED":
      return {
        ...state,
        fetching: true,
        result: null,
        error: null,
      };
    case "ADDBLOGS_FETCH_SUCCEEDED":
      return {
        ...state,
        fetching: false,
        result: action.result.data,
        error: null,
      };

    case "ADDBLOGS_FETCH_FAILED":
      return {
        ...state,
        fetching: false,
        result: null,
        error: state.error,
      };
    default:
      return state;
  }
};
// comment
const listComments = (state = initialStatePost, action) => {
  console.log(action.type);
  switch (action.type) {
    case "COMMENT_FETCH_REQUESTED":
      return {
        ...state,
        fetching: true,
        result: null,
        error: null,
      };
    case "COMMENT_FETCH_SUCCEEDED":
      return {
        ...state,
        fetching: false,
        result: action.result.data,
        error: null,
      };

    case "COMMENT_FETCH_FAILED":
      return {
        ...state,
        fetching: false,
        result: null,
        error: action.er,
      };
    default:
      return state;
  }
};
// comments
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default combineReducers({
  counterSlice,
  listPost,
  listPhotos,
  postBlog,
  listComments,
});
