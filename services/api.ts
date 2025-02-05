import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { Platform } from "react-native";

const url = "http://192.168.1.115:8082"; // Use this for both Android and iOS

// const url =
//   Platform.OS === "android"
//     ? "http:// 192.168.1.115:8082"
//     : "http://127.0.0.1:8082";

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
