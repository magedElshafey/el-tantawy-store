import { request } from "./axios";
export const getAboutData = async () => {
  return await request({
    url: "/about",
  });
};
