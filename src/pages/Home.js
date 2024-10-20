import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import CategoriesBannersSlider from "../components/home/CategoriesBannersSlider";
import FeatuersCard from "../components/home/FeatuersCard";
import ProductSlider from "../components/common/products/ProductSlider";
const Home = () => {
  const { data } = useGlobalContext();
  return (
    <>
      <div className="container my-8">
        <CategoriesBannersSlider data={data?.banners} />
        <div className="my-4 md:my-6 lg:my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {data?.features?.map((item, index) => (
            <FeatuersCard key={index} data={item} />
          ))}
        </div>
      </div>
      <div className="w-full overflow-x-hidden bg-graySection relative py-3 flex items-center my-4 md:my-6 lg:my-8">
        <div className="container">
          <ProductSlider data={data?.productsForYou} />
        </div>
      </div>
    </>
  );
};

export default Home;
