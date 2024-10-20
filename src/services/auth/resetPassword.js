import { request } from "../axios";
export const resetPassword = async (data) => {
  return await request({
    url: "/reset-password",
    method: "POST",
    data,
  });
};
