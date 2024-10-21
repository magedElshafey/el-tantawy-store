import { request } from "../axios";
export const getProductById = async (id) => {
  return await request({
    url: `/product-details/${id}`,
  });
};
