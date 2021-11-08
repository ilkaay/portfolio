import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";

import Main from "./views/main/Main";
import About from "./views/about/About";
import Blog from "./views/blog/Blog";
import Skills from "./views/skills/Skills";
import Repository from "./views/repository/Repository";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/repository' element={<Repository />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
