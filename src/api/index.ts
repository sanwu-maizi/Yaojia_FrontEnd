import { MOCK_LOGIN, MOCK_MEDICINE_LIST, MOCK_ORDER_LIST, MOCK_USER_LIST } from "../mock";
import service from "./request";
import { FetchCode, FetchMedicinesParams, FetchOrdersParams, FetchUsersParams, LoginApiResponse, FetchLoginParams, FetchRegisterParams } from "../types/index";
const IS_MOCK = true;

export async function getMedicineList(params: FetchMedicinesParams) {
  if (IS_MOCK) {
    return Promise.resolve(MOCK_MEDICINE_LIST);
  }
  return service.get(`/allMedicine?size=${params?.size}&offset=${params?.offset}&token=${params?.token}`);
}

export function getUserList(params: FetchUsersParams){
  if (IS_MOCK) {
    return Promise.resolve(MOCK_USER_LIST);
  }
  return service.get("/getUserList?size=${params?.size}&offset=${params?.offset}&token=${params?.token}");
}
 
export function getOrderList(params: FetchOrdersParams) {
  if (IS_MOCK) {
    return Promise.resolve(MOCK_ORDER_LIST);
  }
  return service.get("/getOrderList?size=${params?.size}&offset=${params?.offset}&token=${params?.token}",);
}

export function getVerificationCode(params: FetchCode) {
  return service.get(`/user/code?user_email=${params.user_email}`);
}


export function register(params: FetchRegisterParams) {
  return service.post("/user/register", { params: params });
}

export function login(params: FetchLoginParams){
  if (IS_MOCK) {
    return Promise.resolve(MOCK_LOGIN)
  }
  return service.post<LoginApiResponse>("/user/login");
}