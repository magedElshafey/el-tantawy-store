import { request } from "../axios";
export const regester = async (data) => {
  return await request({
    url: "/sign-up",
    method: "POST",
    data,
  });
};
