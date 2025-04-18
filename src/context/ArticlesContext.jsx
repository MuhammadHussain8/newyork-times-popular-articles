import { createContext, useState } from "react";

export const ArticlesContext = createContext();

export const ArticlesProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [filterArticle, setFilterArticle] = useState(1);
    const [Loading, setLoading] = useState(false);

    return (
        <ArticlesContext.Provider value={{
            articles,
            setArticles,
            selectedArticle,
            setSelectedArticle,
            setFilterArticle,
            filterArticle,
            Loading,
            setLoading
        }}>
            {children}
        </ArticlesContext.Provider>
    );
};
