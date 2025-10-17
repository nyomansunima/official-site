import axios from "axios";
import { loadConfig } from "./config";

const config = loadConfig();

export const kitClient = axios.create({
  baseURL: "https://api.kit.com/v4",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Kit-Api-Key": config.kit.key,
  },
});
