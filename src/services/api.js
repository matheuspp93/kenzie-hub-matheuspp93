import axios from "axios";
import { baseURl } from "../constants/endpoints";

export const api = axios.create({
  baseURL: baseURl,
});
