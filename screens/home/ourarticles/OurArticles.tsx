import React from "react";
import ArticleCard from "../components/ArticleCard";

const OurArticles = () => {
  return (
    <section className="mt-12 ">
      <h1 className="mb-4 font-semibold text-gray-800 text-2xl">
        Our Articles
      </h1>
      <div className="grid grid-cols-4 gap-x-3 p-3 bg-white">
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
      </div>
    </section>
  );
};

export default OurArticles;
