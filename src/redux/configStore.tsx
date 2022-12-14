import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
  } from "redux";
  import thunk from "redux-thunk";
  import createPage from "./moduls/createPage";
  
  //import modules
import users from "./modules/users"
  
  const middlewares = [thunk];
  const enhancer = applyMiddleware(...middlewares);
  const rootReducer = combineReducers({ users });
  
  const store = createStore(rootReducer, enhancer);

  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch
  
  export default store;