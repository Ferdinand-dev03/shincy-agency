import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({ children })=>{

  const [theme, setTheme] = useState('light')
  const toggleTheme = ()=> {
    setTheme( theme === 'light' ? 'dark' : 'light')
  }

  return(
    
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const SurveyContext = createContext()

export const SurveyProvider = ({children})=>{
  const [answers, setAnwers] = useState({})
  const SaveAnswers = (newAnswers) => {
    setAnwers({...answers, ...newAnswers})
  }

  return (
    <SurveyContext.Provider value={[answers, SaveAnswers]  }>
      {children}
    </SurveyContext.Provider>
  )
}
// export const useTheme = () => {
//   const context = useContext(ThemeContext);
  
//   if (context === undefined) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }

//   return context;
// };

