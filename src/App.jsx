import './App.css'
import { Routes, Route } from 'react-router-dom';
import ArticleDetail from "./components/ArticleDetail";
import ArticlesContainer from "./container/ArticlesContainer";

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<ArticlesContainer />} />
      <Route path="/article/:id" element={<ArticleDetail />} />
    </Routes>
    </>
  )
}

export default App
