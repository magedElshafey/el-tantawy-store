import { request } from "../axios";
export const toggleWhishList = async (data) => {
  return await request({
    url: "/wishlist",
    method: "POST",
    data,
  });
};
