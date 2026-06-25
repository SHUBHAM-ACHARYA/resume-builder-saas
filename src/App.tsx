import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './routes/index';
import Builder from './routes/Builder';
import Templates from './routes/Templates';
import ResumeView from './routes/ResumeView';
import Settings from './routes/Settings';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/resume/:id" element={<ResumeView />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
}

export default App;
