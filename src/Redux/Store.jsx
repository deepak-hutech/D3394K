import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import counterReducer from "../Redux/counter/Reducer";
import createSagaMiddleware from "redux-saga";
import mySaga from "./counter/Saga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: { counter: counterReducer },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(mySaga);
