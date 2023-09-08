import { Course } from "../types/types";
import axiosClient from "./axiosClient";

const coursesApi = {
  // lấy ra các khóa học do instructor tạo ra
  async createCourse(data: Course): Promise<[]> { 
    const url = 'course'; 
    return axiosClient.post(url, data); 
  },
    // lấy ra các khóa học do instructor tạo ra
  async getMyCoursesCreated(): Promise<[]> { 
    const url = 'course/v1/me'; 
    return axiosClient.get(url); 
  },



// lấy ra các khóa học được sinh viên đăng ký
  async getMyCoursesRegistered(): Promise<[]> { 
    const url = 'course/v1/registered'; 
    return axiosClient.get(url); 
  },



    
};

export default coursesApi;