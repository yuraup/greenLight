import styled from 'styled-components';

import MainAppstore from '../components/Main/MainAppstore';
import MainDetail from '../components/Main/MainDetail';
import MainTitle from '../components/Main/MainTitle';

const Main = () => {
  return (
    <MainWrapper>
      <MainTitle />
      <MainDetail />
      <MainAppstore />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  margin-top: 400px;
  display: flex;
  flex-direction: column;
`;

export default Main;
