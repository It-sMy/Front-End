import { AnyAction } from "redux";
import { blogData } from "../../types/data";

const initialState: blogData = {};

const updateBlog = (blogData: blogData) => {
  return { type: "blog/UPDATE", data: blogData };
};

export default function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case "blog/UPDATE": {
      return { ...state, blog: action.data };
    }
    default:
      return state;
  }
}
