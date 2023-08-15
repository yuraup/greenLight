import styled from 'styled-components';

import Circles from '../../imgs/circlesBackground.png';
import Discussing from '../../imgs/discussingIssues.png';
import Recycling from '../../imgs/recycling.png';

const MainDetail = () => {
  return (
    <MainTitleWrapper>
      <BackgroundImg src={Circles} alt="backgroundImg" />
      <InfoBox>
        <TextBox>
          <Title>사람과</Title>
          <Title>환경이</Title>
          <Title>공존하는</Title>
          <Title>포장 서비스</Title>
          <SubTitle>일회용품 사용은 줄이고</SubTitle>
          <SubTitle>이제는 지구와 친해질 시간 !</SubTitle>
        </TextBox>
        <DiscussingImg src={Discussing} alt="discussingImg" />
      </InfoBox>

      <InfoBox boxNum>
        <DiscussingImg src={Recycling} alt="recyclingImg" />
        <TextBox>
          <Title>번거로운</Title>
          <Title>다회용기</Title>
          <Title>포장은</Title>
          <Title>이제 안녕 ! </Title>
          <SubTitle>다회용기 예약시스템과 함께</SubTitle>
          <SubTitle>당신의 실천을 반기는 가게를</SubTitle>
          <SubTitle>기분 좋게 애용해 보세요 !</SubTitle>
        </TextBox>
      </InfoBox>
    </MainTitleWrapper>
  );
};

const BackgroundImg = styled.img`
  margin: 0 0 -90px 80px;
  width: 612px;
  height: 298px;
  z-index: -1;
`;

const MainTitleWrapper = styled.div`
  width: 1280px;
  height: 1200px;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => (props.boxNum ? '200px' : '0')};
  z-index: 100;
`;

const TextBox = styled.div``;

const Title = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: 50px;
  letter-spacing: 2px;
`;

const SubTitle = styled.p`
  color: var(--unnamed, #464646);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const DiscussingImg = styled.img`
  width: 423px;
  height: 307px;
  margin: 40px;
`;

export default MainDetail;
