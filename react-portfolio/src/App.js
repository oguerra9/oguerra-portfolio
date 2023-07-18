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
        <Routes>
          {/* <Route path="/welcome" element={<Welcome />}/> */}
          <Route path="/projects" element={<Projects />}/>
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<Projects />} />
        </Routes>
      </HashRouter>
  );

}

export default App;
