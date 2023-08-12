import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, styled } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Main from './pages/Main';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Header from './components/Header';

const App = () => {
  return (
    <ThemeProvider theme={GlobalStyle}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Frame>
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/info" element={<Info />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Frame>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;

const Layout = styled.div`
  width: 393px;
  margin: 0 auto;
`;

const Frame = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
