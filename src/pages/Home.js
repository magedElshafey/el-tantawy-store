import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
const Home = () => {
  const { data } = useGlobalContext();
  console.log("data from global", data);
  return <div>Home</div>;
};

export default Home;
