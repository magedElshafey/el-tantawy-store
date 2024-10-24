import { request } from "../axios";
export const getWhishList = async () => {
  return await request({
    url: "/get-wishlist",
  });
};
