import { request } from "../axios";
export const getBranches = async () => {
  return await request({
    url: "/branches",
  });
};
