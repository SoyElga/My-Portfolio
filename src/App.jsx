import './App.css'
import PageNavbar from './global_components/PageNavbar/PageNavbar';
import { RouterProvider } from 'react-router-dom';

import AlertIcon from './assets/alert_icon.png';

function App({ router }) {
  return (
    <>
      <div className='app-container'>
        <div className='navbar-container'>
          <PageNavbar />
        </div>
        <div className='content'>
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/:projectName" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes> */}
        <RouterProvider router={router} />
        </div>
      </div>
      <div className='alert-message'>
        <img src={ AlertIcon } alt="Alert!" />
        <h1>This website is deigned to fit in a min 600px width page</h1>
      </div>
    </>
  )
}

export default App
