import React from 'react'
import Navbar from './components/navbar/Navbar'
import News from './components/news/News'
import Lista from './components/lista/Lista'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/lista" element={<Lista />} />
          <Route path="/" element={<News />} /> {/* Rruga parazgjedhëse */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
