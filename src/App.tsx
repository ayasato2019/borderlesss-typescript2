import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//ルーティング
import Home from './pages/Home';
import Works from './pages/Works';
import Service from './pages/Service';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './assets/styles/style.css';
import Particles from './components/Particles';

const App: React.FC = () => {
  const worksData = {
    worksWebsite: [
      { id: '1', title: 'Website Project A', image_path: 'website_a' },
      { id: '2', title: 'Website Project B', image_path: 'website_b' },
    ],
    worksApp: [
      { id: '3', title: 'App Project A', image_path: 'app_a' },
      { id: '4', title: 'App Project B', image_path: 'app_b' },
    ],
    worksOther: [
      { id: '5', title: 'Other Project A', image_path: 'other_a' },
    ],
  };

  return (
    <Router>
        <Particles />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/works" element={<Works />} /> */}
          <Route path="/works" element={<Works {...worksData} />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/blog" element={<Blog {...blogData} />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/contact" element={<Contact {...contactData} />} /> */}
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />

        </Routes>
    </Router>
  );
};

export default App;
