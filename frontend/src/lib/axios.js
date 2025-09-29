import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.mode === "development" ? "http://localhost:3002/api" : "/api",
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;
