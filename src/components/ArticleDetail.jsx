import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArticlesContext } from "../context/ArticlesContext";
import moment from 'moment';

const ArticleDetail = () => {
    const { id } = useParams();
    const { articles } = useContext(ArticlesContext);
    const navigate = useNavigate();

    const article = articles.find(item => item.id === Number(id));

    let image = ""
    image = article && article?.media?.length > 0 ? article?.media[0]?.["media-metadata"][0]?.url : null

    if (!article) {
        return <p className="text-center p-10">Article not found. <button onClick={() => navigate("/")}>Go back</button></p>;
    }

    return (
        <div className="w-[50%] m-auto mt-10">
            <h2 className="text-[46px] font-bold mb-4 leading-[50px] w-[600px]">{article.title}</h2>
            <p className="mb-4 text-[24px] font-normal leading-[35px] w-[600px]">{article.abstract}</p>

            <div className="flex justify-between w-[600px]">
                <span className="text-[16px] mr-10 leading-[13px] font-normal text-[#727272]">{moment(article?.published_date).format("MMMM D, YYYY")}</span>
                <p className="mb-2 text-gray-600 font-normal">{article.byline}</p>
            </div>
            {image && (
                <div className="w-[600px] h-[400px]">
                    <img
                        src={image}
                        className=" w-full h-full"
                        alt={article?.title}
                    />
                </div>
            )}
            <div className="flex justify-between w-[600px] mt-5">
                <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                >
                    Read Full Article →
                </a>
                <button onClick={() => navigate("/")} className="cursor-pointer">Go back</button>
            </div>
        </div>
    );
};

export default ArticleDetail;

