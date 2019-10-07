import authReducer from "./authReducer";
import notificationReducer from "./notificationReducer";
import { combineReducers } from "redux"
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  notification: notificationReducer,
  firestore: firestoreReducer
});

export default rootReducer
