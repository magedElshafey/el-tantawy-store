import React from "react";
import SingleBanner from "../components/common/banners/SingleBanner";
import useFaq from "../hooks/api/useFaq";
import Spinner from "../components/common/loader/Spinner";
import Faqs from "../components/common/faq/Faq";
import faqsImg from "../assets/الاسئلة-الشائعة.png";
const Faq = () => {
  const { isLoading, data } = useFaq();
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <SingleBanner alt="faq" src={faqsImg} />
          <div className="container mt-4">
            <div className="mb-4 md:mb-6 lg:mb-8 xl:mb-12">
              <div className="w-full p-4 rounded-md bg-white shadow-md">
                <Faqs data={data?.data?.data?.fqss} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Faq;
