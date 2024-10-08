import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Survey from './pages/Survey';
import Header from './components/Header';
import ClientForm from './components/ClientFrom';
import FreelanceForm from './components/FreelanceForm';
import Error from './components/Error';
import Resultat from './pages/Resultats';
import Freelances from './pages/Freelance';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
div {
  font-family: 'Trebuchet Ms ', Helvetica, sans-serif;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Survey/:questionNumber' element={<Survey/>}>
          <Route path='client' element={<ClientForm/>}/>
          <Route path='freelance' element={<FreelanceForm/>}/>
          <Route path='resultat' element={<Resultat/>}/>
        </Route>
       
        <Route path='freelance' element={<Freelances/>}/>
        <Route path='*' element={<Error/>} />

      </Routes>
    </Router>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

