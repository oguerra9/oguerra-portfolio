import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Welcome from './pages/Welcome';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";

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


  // return (
  //     <div className="flex-column justify-center align-center min-100-vh">
  //       <NavBar handlePageChange={handlePageChange} />
  //       {renderPage()}
  //     </div>
  // );
  // return (
  //   <Router>
  //     <div>
  //       <NavBar />
  //       <Routes>
  //         <Route 
  //           path="/" 
  //           element={<Welcome />}
  //         />
  //         <Route 
  //           path="/welcome" 
  //           element={<Welcome />}
  //         />
  //         <Route 
  //           path="/projects" 
  //           element={<Projects />}
  //         />
  //         <Route 
  //           path="/resume" 
  //           element={<Resume />}
  //         />
  //       </Routes>
  //     </div>
  //   </Router>
  // );

  return (
      <HashRouter basename="/">
        <nav>
          <div className='d-flex'>
            <div className='m-2'>
              <Link to="/welcome">Welcome</Link>
            </div>
            <div className='m-2'>
              <Link to="/projects">Projects</Link>
            </div>
            <div className='m-2'>
              <Link to="/resume">Resume</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/welcome" element={<Welcome />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </HashRouter>
  );

}

export default App;
