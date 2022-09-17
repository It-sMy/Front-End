import { AnyAction } from "redux";
import { auth } from "../../firebase";
import { userData } from "../../types/user";

const KEEP = "user/KEEP" as const;
const AWAY = "user/AWAY" as const;

const initialState: userData = {
  userName: "",
  id: "",
  userProfile: "",
  uid: "",
};

const keepUserData = (userData: userData) => {
  return { type: KEEP, userData: userData };
};
const awayUserData = () => {
  return { type: AWAY };
};

export const userDataCheckFB = () => {
  return function (dispatch: any) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          keepUserData({
            userName: user.displayName,
            userProfile: "",
            id: user.email,
            uid: user.uid,
          })
        );
      } else {
        dispatch(awayUserData());
      }
    });
  };
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "user/KEEP": {
      return { ...action.userData };
    }
    case "user/AWAY": {
      const cleanData = { userName: "", id: "", userProfile: "", uid: "" };
      return {...cleanData};
    }
    default:
      return state;
  }
}
