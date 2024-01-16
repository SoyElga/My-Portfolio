import './App.css'
import PageNavbar from './global_components/PageNavbar/PageNavbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Cargamos las vistas de las paginas que vamos a usar
import HomePage from './views/HomePage/HomePage';
import AboutPage from './views/AboutPage/AboutPage';
import ProjectPage from './views/Projects/ProjectPage';
import NotFoundPage from './global_components/NotFoundPage/NotFoundPage';

import AlertIcon from './assets/alert_icon.png';

function App() {

  const base_path = "/My-Portfolio"

  return (
    <>
      <Router>
      <div className='app-container'>
        <div className='navbar-container'>
          <PageNavbar />
        </div>
        <div className='content'>
        <Routes>
          <Route path={`${base_path}/`} element={<HomePage />} />
          <Route path={`${base_path}/about`} element={<AboutPage />} />
          <Route path={`${base_path}/projects/:projectName`} element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </div>
      </div>
    </Router>
    <div className='alert-message'>
      <img src={ AlertIcon } alt="Alert!" />
      <h1>This website is deigned to fit in a min 600px width page</h1>
    </div>
    </>
  )
}

export default App
