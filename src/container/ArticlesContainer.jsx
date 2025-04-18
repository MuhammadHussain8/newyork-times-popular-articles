import { useEffect, useContext } from "react";
import axios from "axios";
import { ArticlesContext } from "./../context/ArticlesContext";
import ArticleList from "../components/ArticleList"


const API_KEY = import.meta.env.VITE_NYT_API_KEY;

const filters = [
  { key: "Latest", value: 1 },
  { key: "Last 7 days", value: 7 },
  { key: "Last Month", value: 30 }
]


const ArticlesContainer = () => {
  const { setArticles, setFilterArticle, filterArticle, setLoading } = useContext(ArticlesContext);

  console.log("filters", filterArticle)

  useEffect(() => {
    const API_URL = `${import.meta.env.VITE_NYT_API_URL}${filterArticle}.json?api-key=${API_KEY}`;
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        setArticles(response.data.results);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false)
      }
    };

    fetchArticles();

  }, [setArticles, filterArticle]);

  return (
    <div className="p-10">
      <h1 className="mb-10 w-full text-[30px]">NY Times Most Popular</h1>
      <ul className="flex">
        {filters?.map((item) => (
          <li
            key={item.value}
            className={`text-[14px] text-[#363636] font-normal mr-5 cursor-pointer transition duration-200 ${filterArticle === item.value ? "font-semibold underline text-black" : ""
              }`}
            onClick={() => setFilterArticle(item.value)}
          >
            {item.key}
          </li>
        ))}
      </ul>
      <div className="h-screen">
        <ArticleList />
      </div>
    </div >
  );
};

export default ArticlesContainer;
