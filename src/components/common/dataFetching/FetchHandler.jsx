import React from "react";
import Spinner from "../loader/Spinner";
import NotFound from "../../../pages/NotFound";
const FetchHandler = ({ queryResult, children }) => {
  const { isLoading, isError, isSuccess } = queryResult;
  return (
    <div className="main">
      {isLoading && <Spinner />}
      {isError && <NotFound />}
      {isSuccess && children}
    </div>
  );
};

export default FetchHandler;
