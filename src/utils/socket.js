// import io from "socket.io-client";
// // import { BASE_URL } from "./constants";
// const BASE_URL = import.meta.env.VITE_BASE_URL

// export const createSocketConnection = () => {
//   if (location.hostname === "localhost") {
//     return io(BASE_URL);
//   } else {
//     return io("/", { path: "/api/socket.io" });
//   }
// };
import io from "socket.io-client";
const BASE_URL = import.meta.env.VITE_BASE_URL
// import { BASE_URL } from "./constants";

export const createSocketConnection = () => {
  return io(BASE_URL, {
    withCredentials: true,
    path: "/socket.io", // If your backend is not using a custom path
  });
};
