import { getWhishList } from "../../services/userDashboard/getWhishlist";
import { useQuery } from "react-query";
export const useWhishlist = () => {
  return useQuery("my-whishlist", getWhishList);
};
export default useWhishlist;
