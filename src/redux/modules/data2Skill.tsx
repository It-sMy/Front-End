import { AnyAction } from "redux";
import { skillData } from "../../types/data";

const initialState: skillData = {};

const updateSkill = (skillData: skillData) => {
  return { type: "skill/UPDATE", data: skillData };
};

export default function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case "skill/UPDATE": {
      return { ...state, skill: action.data };
    }
    default:
      return state;
  }
}
