import Service from "./Service";
import { API_URL } from "../config";

const resource = `${API_URL}/users`; 
 
 export default {
	getAllUsers() {
    return Service.get(`${resource}`)
	.then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    });
  },
  getProductData(id) {
    return Service.get(`${resource}/products/${id}`)
	.then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    });
  },
}