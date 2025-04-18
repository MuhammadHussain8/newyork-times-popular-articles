import React from "react";
import moment from 'moment';
import { useNavigate } from "react-router-dom"; 

const ArticleItem = ({ article }) => {
    const navigate = useNavigate();

    let image = ""
    image = article?.media?.length > 0 ? article?.media[0]?.["media-metadata"][0]?.url : null

    return (
        <li className="mb-5 border-t-1 border-[#DFDFDF] p-2 cursor-pointer" onClick={() => navigate(`/article/${article.id}`)}>
            <article className="flex justify-start space-x-2 space-y-2">
                <div>
                    <span className="text-[11px] mr-10 leading-[13px] font-normal text-[#727272]">{moment(article?.published_date).format("MMMM D, YYYY")}</span>
                </div>
                <div className="w-[50%]">
                    <h3 className="text-[25px] leading-[30px] font-normmal mb-2 w-[470px] font-serif text-[#121212]">{article?.title}</h3>
                    <p className="text-[16px] font-normal leading-[20px] text-[#363636] w-[500px]">{article?.abstract}</p>
                    <p className="text-[11px] font-medium leading-[12px] text-[#727272] mt-5 capitalize">{article?.byline}</p>
                </div>
                <div className="ml-20">
                    {image ?
                        <div className="w-[150px] h-[150px]">
                            <img src={image} width="100%" height="100%" />
                        </div> : null}
                </div>
            </article>
        </li>
    );
};

export default ArticleItem;
