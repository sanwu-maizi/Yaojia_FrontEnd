import { AxiosResponse } from "axios";
import { FetchMedicinesApiResponse, FetchOrdersApiResponse, FetchUsersApiResponse, LoginApiResponse } from "../types/index";
export const MOCK_MEDICINE_LIST = {
  data: {
    res:{
      code: 200,
      message: "success",
      data: {
        medicineList: [
          {
            id: 1,
            name: "阿莫西林",
            count: 100,
            medicinefunction: "抗生素，用于治疗细菌感染",
            price: 25.5,
            department: "抗生素部",
          },
          {
            id: 2,
            name: "布洛芬",
            count: 150,
            medicinefunction: "非甾体抗炎药，用于缓解轻至中度疼痛",
            price: 15.0,
            department: "止痛药部",
          },
          {
            id: 3,
            name: "胰岛素",
            count: 200,
            medicinefunction: "用于糖尿病患者的血糖控制",
            price: 45.75,
            department: "内分泌部",
          },
          {
            id: 4,
            name: "维生素C",
            count: 300,
            medicinefunction: "增强免疫力，预防感冒",
            price: 9.99,
            department: "维生素部",
          },
          {
            id: 5,
            name: "抗过敏药",
            count: 250,
            medicinefunction: "用于缓解过敏症状",
            price: 19.8,
            department: "抗过敏部",
          },
          // ... 更多药品数据
        ] 
      }
    }
  }
} as unknown as AxiosResponse<FetchMedicinesApiResponse>

export const MOCK_ORDER_LIST = {
  data: {
    res:{
      code: 200,
      message: "success",
      data: {
        orderList: [
          {
            id: 101,
            userName: "张三",
            medicineList: "阿莫西林, 布洛芬, 维生素C",
            status: "pending",
            diseaseInfo: "感冒发烧，需要抗生素和退烧药",
          },
          {
            id: 102,
            userName: "李四",
            medicineList: "胰岛素, 降糖药",
            status: "completed",
            diseaseInfo: "糖尿病患者，需要定期注射胰岛素",
          },
          {
            id: 103,
            userName: "王五",
            medicineList: "抗过敏药, 鼻炎喷雾",
            status: "refunded",
            diseaseInfo: "季节性过敏，伴有鼻炎症状",
          },
          {
            id: 104,
            userName: "赵六",
            medicineList: "止痛药, 消炎药",
            status: "cancelled",
            diseaseInfo: "轻微外伤，无需进一步治疗",
          },
          {
            id: 105,
            userName: "孙七",
            medicineList: "抗生素, 咳嗽药水",
            status: "pending",
            diseaseInfo: "上呼吸道感染，伴有咳嗽",
          },
        ]
      }
    }
  }
} as unknown as AxiosResponse<FetchOrdersApiResponse>


export const MOCK_USER_LIST = {
  data: {
    res:{
      code: 200,
      message: "success",
      data: {
        userList: [
          {
            id: 1,
            name: "张三",
            email: "zhangsan@example.com",
            status: "active",
            permission: "ADMIN",
            createTime: "2023-05-01 10:00:00",
          },
          {
            id: 2,
            name: "李四",
            email: "lisi@example.com",
            status: "inactive",
            permission: "USER",
            createTime: "2023-06-15 14:30:00",
          },
          {
            id: 3,
            name: "王五",
            email: "wangwu@example.com",
            status: "active",
            permission: "USER",
            createTime: "2023-07-20 09:15:00",
          },
          {
            id: 4,
            name: "赵六",
            email: "zhaoliu@example.com",
            status: "pending",
            permission: "DOCTOR",
            createTime: "2023-08-25 16:45:00",
          },
          {
            id: 5,
            name: "孙七",
            email: "sunqi@example.com",
            status: "active",
            permission: "DOCTOR",
            createTime: "2023-09-30 12:00:00",
          },
        ]
      }
    }
  }
} as unknown as AxiosResponse<FetchUsersApiResponse>

export const MOCK_LOGIN = {
  data: {
    res:{
      code: 200,
      message: "success",
      data: {
        user_name: "yue",
        permission: "admin",
        user_email: "111@qx.cn",
        token: "ds8ad7w7qe1g8sdzlcx"
      }
    }
  } 
} as unknown as AxiosResponse<LoginApiResponse>