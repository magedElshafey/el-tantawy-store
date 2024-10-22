import { fetchFaq } from "../../services/static/fetchFaq";
import { useQuery } from "react-query";
const useFaq = () => {
  return useQuery("faq", fetchFaq);
};
export default useFaq;
