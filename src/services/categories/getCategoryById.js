import { request } from "../axios";
export const getCategoryById = async (id) => {
  return await request({
    url: `/categories/${id}`,
  });
};
