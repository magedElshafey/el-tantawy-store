import { request } from "../axios";
export const fetchFaq = async () => {
  return await request({
    url: "/fqss",
  });
};
