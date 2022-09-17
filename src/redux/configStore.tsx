import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
  } from "redux";
  import thunk from "redux-thunk";
  import createPage from "./moduls/createPage";
  
  //import modules

  
  const middlewares = [thunk];
  const enhancer = applyMiddleware(...middlewares);
  const rootReducer = combineReducers({ createPage });
  
  const store = createStore(rootReducer, enhancer);

  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch
  
  export default store;