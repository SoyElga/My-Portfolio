import './App.css'
import PageNavbar from './global_components/PageNavbar/PageNavbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Cargamos las vistas de las paginas que vamos a usar
import HomePage from './views/HomePage/HomePage';
import AboutPage from './views/AboutPage/AboutPage';
import ProjectPage from './views/Projects/ProjectPage';
import NotFoundPage from './global_components/NotFoundPage/NotFoundPage';

function App() {
  return (
    <>
      <div className='navbar-container'>
      </div>
      <Router>
      <div>
        <PageNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/:projectName" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
