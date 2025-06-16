import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import Posts from './components/Posts';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<TaskManager />} />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App; 