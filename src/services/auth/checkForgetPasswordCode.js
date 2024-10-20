import { request } from "../axios";
export const checkForgetPasswordCode = async (data) => {
  return await request({
    url: "/forget-password-check-code",
    method: "POST",
    data,
  });
};
