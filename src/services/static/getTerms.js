import { request } from "../axios";
export const getTerms = async () => {
  return await request({
    url: "/terms",
  });
};
