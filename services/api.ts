import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { Platform } from "react-native";

const url = "http://IP_ADDRESS:8082"; // enter your device ip address to connect to backend (if using physical device then use your laptops ip address)

const Api: AxiosInstance = axios.create({ baseURL: url + "/api" });

Api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");

  if (token) config.headers.set("Authorization", `Bearer ${token}`);

  return config;
});

Api.interceptors.response.use(
  async (res: AxiosResponse) => res.data,
  async (err: AxiosError) => Promise.reject(err)
);

export { Api };
