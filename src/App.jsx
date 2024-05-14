import styled from "styled-components";
import Logo from "./Components/Logo";
import TextBox from "./Components/TextBox";
import SearchBox from "./Components/SearchBox";
import Footer from "./Components/Footer";

const StyledApp = styled.div`
  padding-top: 4.8rem;
  text-align: center;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Imagebox = styled.div`
  width: 100%;

  & img {
    max-width: 100%;
  }
`;

function App() {
  return (
    <StyledApp>
      <Logo />
      <TextBox />
      <SearchBox />
      <Imagebox>
        <img src="/illustration-dashboard.png" alt="slack notification graph" />
      </Imagebox>
      <Footer />
    </StyledApp>
  );
}

export default App;
