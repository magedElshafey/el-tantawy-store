import { request } from "../axios";
export const handleLogin = async (data) => {
  return await request({
    url: "/sign-in",
    method: "POST",
    data,
  });
};
