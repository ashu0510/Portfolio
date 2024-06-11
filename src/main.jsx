// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import Home from './Components/Home/Home.jsx'
// import About from './Components/About/About.jsx'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Projects from './Components/Projects/Projects.jsx'
// import Contact from './Components/Contact/Contact.jsx'

// const router = createBrowserRouter([

//   {path: "/",
//     element: <App/>,
//     children:[
//       {
//         path:"/",
//         element: <Home/>
//       },
//       {
//         path:"/about",
//         element: <About/>
//       },
//       {
//         path:"/projects",
//         element: <Projects/>
//       },
//       {
//         path:"/contacts",
//         element: <Contact/>
//       },
//     ]
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <div className='bg-black min-h-screen'>
//       <RouterProvider/>
//       {/* <App /> */}
//     </div>
//   </React.StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom/client'; // Change the import statement
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and related components
import App from './App.jsx';
import './index.css';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Skills from './Components/Skills/Skills.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-black min-h-screen'>
      <Router> {/* Wrap your routes with Router */}
        <Routes> {/* Use Routes component for defining routes */}
          <Route path="/" element={<App />}>
            <Route index element={<Home />} /> {/* Use nested routes */}
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
          </Route>
        </Routes>
      </Router>
    </div>
  </React.StrictMode>,
);
