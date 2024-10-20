import { request } from "../axios";
export const resendEmailActivationCode = async (email) => {
  return await request({
    url: `/resend-code?email=${email}`,
  });
};
