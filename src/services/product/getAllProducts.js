import { request } from "../axios";
export const getAllProducts = async (keyword) => {
  return await request({
    url: `/all-products?keyword=${keyword}`,
  });
};
