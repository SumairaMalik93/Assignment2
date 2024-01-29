import Layout from './global/layout'
import HomePage from './pages/HomePage';
import SinglePost from './pages/SinglePost';
import AuthorPage from './pages/AuthorPage';
import BlogListing from './pages/BlogListing';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogListing />} />
          <Route path="/single-post" element={<SinglePost />} />
          <Route path="/author-page" element={<AuthorPage />} />
        </Routes>
      </Layout>

    </div>
  );
}

export default App;
