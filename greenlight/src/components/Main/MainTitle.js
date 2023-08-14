import styled from 'styled-components';

import { ReactComponent as MainTopImg } from '../../imgs/mainTopImg.svg';

const MainTitle = () => {
  return (
    <MainTitleWrapper>
      <TextBox>
        <BoldTitle>더 나은 소비를</BoldTitle>
        <BoldTitle>위한 나만의 에코 비서</BoldTitle>
        <Text>다회용기로 식품을 포장할 수 있는 우리 지역 에코 매장을 찾아보세요!</Text>
      </TextBox>
      <BackgroundImg />
    </MainTitleWrapper>
  );
};

const MainTitleWrapper = styled.div`
  width: 1280px;
  height: 1200px;
  margin-top: 334px;
`;

const TextBox = styled.div`
  margin-left: 100px;
  z-index: 100;
  position: relative;
`;

const BoldTitle = styled.p`
  font-family: Inter;
  font-size: 50px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  background: linear-gradient(
    180deg,
    #51c884 0%,
    rgba(61, 192, 156, 0.7) 29%,
    rgba(80, 207, 215, 0.66) 55%,
    rgba(32, 156, 182, 0.71) 83%,
    rgba(54, 122, 185, 0) 99%,
    rgba(22, 84, 140, 0) 99.99%,
    rgba(63, 97, 128, 0.54) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  z-index: 100;
`;

const Text = styled.p`
  color: var(--unnamed, #464646);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  z-index: 100;
`;

const BackgroundImg = styled(MainTopImg)`
  width: 1112px;
  height: 633px;
  position: relative;
  right: -12%;
  top: -10%;
  z-index: -1;
`;

export default MainTitle;
