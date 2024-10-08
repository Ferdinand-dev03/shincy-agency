import { createGlobalStyle } from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../Context';

const StyledGlobalStyle = createGlobalStyle`
div {
  font-family: 'Trebuchet Ms ', Helvetica, sans-serif;
}
  body {
    background-color: ${({ isDarkMode })=> ( isDarkMode ? '#2F2E41' : 'white')}

  }
`


const GlobalStyle = ()=> {

  const { theme } = useContext(ThemeContext)

  return <StyledGlobalStyle isDarkMode={ theme === 'dark'}/>
}

export default GlobalStyle