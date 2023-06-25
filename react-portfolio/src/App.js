import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Welcome from './pages/Welcome';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {

  const [currPage, setCurrentPage] = useState('');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currPage === 'Resume') {
      return <Resume />;
    } else if (currPage === 'Projects') {
      return <Projects />;
    } else {
      return <Welcome />
    }
  };


  return (
      <div className="flex-column justify-center align-center min-100-vh">
        <NavBar handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
  );
}

export default App;
