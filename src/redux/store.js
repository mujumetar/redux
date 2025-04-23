import reducer from "./reducer";
import { legacy_createStore as createStore } from "react-redux";
const store = createStore(reducer);
export default store;
