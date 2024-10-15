import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";
import { request } from "../services/axios";
import NotFound from "../pages/NotFound";
import Spinner from "../components/common/loader/Spinner";
const GlobalProvider = createContext();
export const useGlobalContext = () => {
  return useContext(GlobalProvider);
};
const fetchData = async () => {
  return await request({
    url: "/home",
  });
};
const GlobalContext = ({ children }) => {
  const { isLoading, data, isError } = useQuery("home-page", fetchData);
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <NotFound />;
  }
  const value = {
    data: data?.data?.data,
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <NotFound />
      ) : (
        <GlobalProvider.Provider value={value}>
          {children}
        </GlobalProvider.Provider>
      )}
    </>
  );
};

export default GlobalContext;
