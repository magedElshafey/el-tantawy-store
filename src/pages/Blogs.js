import React from "react";
import SingleBanner from "../components/common/banners/SingleBanner";
import blogImg from "../assets/مقالات.png";
const Blogs = () => {
  return (
    <div>
      <SingleBanner alt="blogs" src={blogImg} />
      <div className="container my-4 md:my-6 lg:my-8 xl:my-12"></div>
    </div>
  );
};

export default Blogs;
