import { AnyAction } from "redux";
import { introData } from "../../types/data";

const initialState: introData = {};

const updateIntro = (introData: introData) => {
  return { type: "intro/UPDATE", data: introData };
};

export default function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case "intro/UPDATE": {
      return { ...action.data };
    }
    default:
      return state;
  }
}
