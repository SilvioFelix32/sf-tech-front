import type { NextPage } from "next";
import { useState } from "react";
//components
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
//styles
import { ThemeProvider } from "styled-components";
import { Wrapper, Content } from "../styles";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

const Home: NextPage = () => {
  const [theme, setTheme] = useState(light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header toggleTheme={toggleTheme} />
        <Content>
          <h1>CONTEUDO</h1>
        </Content>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Home;
