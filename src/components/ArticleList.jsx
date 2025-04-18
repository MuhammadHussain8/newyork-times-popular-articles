import React, { useContext } from "react";
import { ArticlesContext } from "./../context/ArticlesContext";
import ArticleItem from "./ArticleItem";
import Loader from "./Loader";

const ArticleList = () => {
  const { articles, setSelectedArticle, Loading } =
    useContext(ArticlesContext);

  return (
    <div >
      <ul>
        {Loading ? (
          <Loader/>
        ) : (
          articles.map((article) => (
            <ArticleItem
              key={article.id}
              article={article}
              onSelect={setSelectedArticle}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default ArticleList;
