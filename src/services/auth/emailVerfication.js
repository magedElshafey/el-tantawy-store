import { request } from "../axios";
export const emailVerfication = async (data) => {
  return await request({
    url: "/activate",
    method: "patch",
    data,
  });
};
