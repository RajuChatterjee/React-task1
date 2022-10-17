// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// //import App from './App.js';
// //import Counter from './Components/Counter';
// import App from './Components/App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();





// route



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import "./Components/App.css"
// import './index.css'
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(

// <React.StrictMode>
// <Home/>
// </React.StrictMode>
// );

// function Home(){
//   return(
//     <div>
//       <h1>home page</h1>
//       </div>
//   );
// }
// reportWebVitals();





// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import "./Components/App.css"
// import './index.css'
// import reportWebVitals from './reportWebVitals';

// import{BrowserRouter as Router,Routes,Route} from "react-router-dom";



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(

// <Router>
//   <Routes>
//      <Route path="/" element={<Home/>}/>

//   </Routes>
// </Router>,
// document.getElementById("root")
// );

// function Home(){
//   return(
//     <div>
//       <h1>home page</h1>
//       </div>
//   );
// }
// reportWebVitals();





// import React from "react";
// import ReactDOM from 'react-dom/client';
// import "./index.css"
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
// <Router>
//   <Routes>
//      <Route path="/" element={<Home/>}/>
//   </Routes>
// </Router>, 
//        document.getElementById("root")
// );

// function Home(){
//   return(
//     <div>
//       <h1>helllooooo</h1>
//       </div>
//   );
// }
// reportWebVitals();




// import React from "react";
// import ReactDOM from 'react-dom/client';
// import "./index.css"
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//     </Routes>
//   </Router>,
//   document.getElementById("root")
// );

// function Home() {
//   return (
//     <div>
//       <h1>helllooooo</h1>
//     </div>
//   );
// }
// reportWebVitals();



// import React from "react";
// import ReactDOM from 'react-dom/client';
// import "./index.css"
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/myapp" element={<Learn />} />
//       <Route path="/learn" element={<Learn />} />
//     </Routes>
//   </Router>,
//   document.getElementById("root")
// );

// function Home() {
//   return (
//     <div>
//       <h1>home component</h1>
//     </div>
//   );
// }
// function Learn() {
//   return (
//     <div>
//       <h1>learn</h1>
//     </div>
//   );
// }
// reportWebVitals();



// import React from "react";
// import ReactDOM from 'react-dom/client';
// import "./index.css"
// import reportWebVitals from './reportWebVitals';
// import { 
//    BrowserRouter as Router,
//    Routes, 
//    Route 
//   } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/myapp" element={<Learn />} />
//       <Route path="/learn" element={<Learn />} />
//     </Routes>
//   </Router>,
//   document.getElementById("root")
// );

// function Home() {
//   return (
//     <div>
//       <h1>home component</h1>
//       <h1>get more </h1>
//     </div>
//   );
// }
// function Learn() {
//   return (
//     <div>
//       <h1>learn</h1>
//     </div>
//   );
// }
// reportWebVitals();


// import React from "react";
// import ReactDOM from 'react-dom/client';
// import "./index.css"
// import reportWebVitals from './reportWebVitals';
// import { 
//    BrowserRouter as Router,
//    Routes, 
//    Route,
//    Navigate, 
//   } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/myapp" element={<Navigate to ="/learn" />} />
//       <Route path="/learn" element={<Learn />} />
//     </Routes>
//   </Router>,
//   document.getElementById("root")
// );

// function Home() {
//   return (
//     <div>
//       <h1>home component</h1>
//       <h1>get more </h1>
//     </div>
//   );
// }
// function Learn() {
//   return (
//     <div>
//       <h1>learn</h1>
//     </div>
//   );
// }
// reportWebVitals();


// import React from "react";
// import ReactDOM from 'react-dom/client';
// import "./index.css"
// import reportWebVitals from './reportWebVitals';
// import { 
//    BrowserRouter as Router,
//    Routes, 
//    Route,
//    Navigate, 
//   } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/myapp" element={<Navigate replace ="/learn" />} />
//       <Route path="/learn" element={<Learn />} />
//     </Routes>
//   </Router>,
//   document.getElementById("root")
// );

// function Home() {
//   return (
//     <div>
//       <h1>home component</h1>
//       <h1>get more </h1>
//     </div>
//   );
// }
// function Learn() {
//   return (
//     <div>
//       <h1>learn</h1>
//     </div>
//   );
// }
// reportWebVitals();

// import React from "react";
// import ReactDOM from 'react-dom/client';
// import "./index.css"
// import reportWebVitals from './reportWebVitals';
// import { 
//    BrowserRouter as Router,
//    Routes, 
//    Route,
//    Navigate,
//    Link

//   } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/myapp" element={<Navigate replace ="/learn" />} />
//       <Route path="/learn" element={<Learn />} />
//     </Routes>
//   </Router>,
//   document.getElementById("root")
// );

// function Home() {
//   return (
//     <div>
//       <h1>home component</h1>
//       <h1>get more </h1>
//       {/* <Link to="/learn/course">Courses</Link>
//       <Link to="/learn/subjects">Subjects</Link> */}


//       {/* <Link className="text-white" to="/learn/course">Courses<br></br></Link>
//       <Link className="text-white" to="/learn/subjects">Subjects</Link> */}
     
//      <Link className="btn btn-primary" to="/learn/course">Courses</Link>
//       <Link className="btn btn-success" to="/learn/subjects">Subjects</Link>
      
//     </div>
//   );
// }
// function Learn() {
//   return (
//     <div>
//       <h1>learn</h1>
//     </div>
//   );
// }
// reportWebVitals();

// import React from "react";
// import ReactDOM from 'react-dom/client';
// import "./index.css"
// import reportWebVitals from './reportWebVitals';
// import { 
//    BrowserRouter as Router,
//    Routes, 
//    Route,
//    Navigate,
//    Link,
//    Outlet,

//   } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/myapp" element={<Navigate replace ="/learn" />} />
//       <Route path="/learn" element={<Learn />} />
//       <Route path="/course" element={<Course />} />
//       <Route path="/subject" element={<Subject />} />
//     </Routes>
//   </Router>,
//   document.getElementById("root")
// );

// function Home() {
//   return (
//     <div>
//       <h1>home component</h1>
//       <h1>get more </h1>
      
     
//      <Link className="btn btn-primary" to="/learn/course">Courses</Link>
//       <Link className="btn btn-success" to="/learn/subjects">Subjects</Link>
//       <Outlet/>
//     </div>
//   );
// }
// function Learn() {
//   return (
//     <div>
//       <h1>learn</h1>
//     </div>
//   );
// }
// function Course() {
//   return (
//     <div>
//       <h1>course is here</h1>
//     </div>
//   );
// }
// function Subject() {
//   return (
//     <div>
//       <h1>course is here</h1>
//     </div>
//   );
// }
// reportWebVitals();





import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css"
import "./App.css";
import reportWebVitals from './reportWebVitals';
import { 
   BrowserRouter as Router,
   Routes, 
   Route 
  } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

function Home() {
  return (
    <div>
      <h1>Home</h1>
      
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}
function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}
reportWebVitals();