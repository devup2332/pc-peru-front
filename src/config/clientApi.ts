import axios from "axios";
import { API_URL } from "./enviroments";

export const instance = axios.create({
	baseURL: API_URL,
});
