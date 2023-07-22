import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
  withCredentials: true,
});

const ROUTE_WITHOUT_TOKEN = ["register", "login"];

newRequest.interceptors.request.use(
  (request) => {
    const authRoutes = ROUTE_WITHOUT_TOKEN.some((i) =>
      request?.url?.includes(i)
    );
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const authToken = currentUser?.authToken;

    if (!authRoutes && request.headers && authToken) {
      request.headers.Authorization = `Bearer ${authToken}`;
    }
    return request;
  },
  (error) => Promise.reject(error)
);

export default newRequest;
