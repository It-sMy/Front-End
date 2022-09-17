import { AnyAction } from "redux";
import { projectData } from "../../types/data";

const initialState: projectData = [];

const updateProject = (projectData: projectData) => {
  return { type: "project/UPDATE", data: projectData };
};

export default function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case "project/UPDATE": {
      return { ...state, project: action.data };
    }
    default:
      return state;
  }
}
