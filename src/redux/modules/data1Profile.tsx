import { AnyAction } from "redux";
import { profileData } from "../../types/data";

const initialState: profileData = {};

const updateProfile = (profileData: profileData) => {
  return { type: "profile/UPDATE", data: profileData };
};

export default function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case "profile/UPDATE": {
      return { ...state, profile: action.data };
    }
    default:
      return state;
  }
}
