import {createStore,applyMiddleware} from "redux"
 import bigReducer from "./index"
 import sagaMiddeleWareCreator from "redux-saga"
 import saga from "./saga/index.js"
 import {composeWithDevTools} from "redux-devtools-extension"
 const sagaMiddeleWare = sagaMiddeleWareCreator()
 // Create store warehouse
 const store = createStore(bigReducer,composeWithDevTools(applyMiddleware(sagaMiddeleWare)))
 sagaMiddeleWare.run(saga)
 ​
 export default store