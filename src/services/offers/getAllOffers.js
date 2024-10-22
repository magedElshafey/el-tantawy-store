import { request } from "../axios";
export const getOffers = async () => {
  return await request({
    url: "/offers",
  });
};
