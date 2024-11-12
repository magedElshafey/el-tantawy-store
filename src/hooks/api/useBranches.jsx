import { useQuery } from "react-query";
import { getBranches } from "../../services/static/getBranches";

const useBranches = () => {
  return useQuery("branches", getBranches);
};

export default useBranches;
