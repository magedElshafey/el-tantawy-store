import { request } from "../axios";
export const handleLogout = async () => {
  return await request({
    url: "/sign-out",
    method: "DELETE",
  });
};
