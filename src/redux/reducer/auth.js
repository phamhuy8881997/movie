import * as typess from "../constant/index";
let initial = {
  statusLogin: "",
};
const login = (state = initial, action) => {
  let { type } = action;
  switch (type) {
    case typess.LOGIN:
      return { ...state };
    default:
      return { ...state };
  }
};
export default login;
