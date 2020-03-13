import axios from "axios";
import Cookie from "js-cookie";
console.log("token in axios", Cookie.get("token"));
const instance = axios.create();
instance.defaults.headers.post["token"] = Cookie.get("token");
instance.defaults.headers.get["token"] = Cookie.get("token");
export default instance;
