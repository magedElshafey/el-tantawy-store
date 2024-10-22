import { request } from "../axios";
export const getProductsByCategoryId = async (id) => {
  return await request({
    url: `/products/${id}`,
  });
};
