import { MOCK_MEDICINE_LIST, MOCK_ORDER_LIST, MOCK_USER_LIST } from "../mock";
import service from "./request";

const IS_MOCK = true;

// TODO 处理待确认，参数类型待确认, 不要使用any类型
 
// 获取用户列表
export function getUserList(params: any) {
  if (IS_MOCK) {
    return MOCK_MEDICINE_LIST;
  }
  return service.get("/allUser", { params: params });
}
 
// 获取订单列表
export function getOrderList(params: any) {
  if (IS_MOCK) {
    return MOCK_ORDER_LIST;
  }
  return service.get("/allOrders");
}
 
// 获取药品列表
export function getMedicineList(params: any) {
  if (IS_MOCK) {
    return MOCK_USER_LIST;
  }
  return service.get("/allMedicine");
}

export function getVerificationCode(params: any) {
  return service.get("/user/code");
}

export function register(params: any) {
  return service.post("/user/register");
}

export function login(params: any) {
  return service.post("/user/login");
}