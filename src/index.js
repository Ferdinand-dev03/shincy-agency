import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ClientForm from './components/ClientFrom'
import Error from './components/Error'
import Footer from './components/Footer'
import FreelanceForm from './components/FreelanceForm'
import Header from './components/Header'
import './index.css'
import Freelances from './pages/Freelance'
import Home from './pages/Home'
import Results from './pages/Results'
import Survey from './pages/Survey'
import { SurveyProvider, ThemeProvider } from './uttils/Context'
import GlobalStyle from './uttils/style/GlobaStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Survey/:questionNumber" element={<Survey />}>
              <Route path="client" element={<ClientForm />} />
              <Route path="freelance" element={<FreelanceForm />} />
              <Route path="Results" element={<Results />} />
            </Route>

            <Route path="freelance" element={<Freelances />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
