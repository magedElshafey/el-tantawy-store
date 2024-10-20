import { request } from "../axios";
export const sendForgetPasswordCode = async (data) => {
  return await request({
    url: "/forget-password-send-code",
    method: "POST",
    data,
  });
};
