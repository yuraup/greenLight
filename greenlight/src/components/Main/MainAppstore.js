import styled from 'styled-components';

import Apple from '../../imgs/apple.png';
import Bulb from '../../imgs/bulb.png';
import EcologyHand from '../../imgs/ecologyHand.png';

const MainAppstore = () => {
  return (
    <MainTitleWrapper>
      <OrnamentImg src={Bulb} alt="전구 사진" />
      <ContentBox>
        <SubTitle bold>더 알뜰하게 환경을 보호하는 방법</SubTitle>
        <Title>GreenLight</Title>
        <SubTitle>지금 바로 수많은 챌린저들과 함께 지구를 지켜 보세요</SubTitle>
        <GoToAppleBtn>
          <BtnTitle>App Store</BtnTitle>
          <AppleImg src={Apple} alt="애플 스토어로 이동하는 버튼 이미지" />
        </GoToAppleBtn>
      </ContentBox>
      <OrnamentImg front src={EcologyHand} alt="흙을 담고 있는 손 사진" />
    </MainTitleWrapper>
  );
};

const MainTitleWrapper = styled.div`
  width: 1280px;
  height: 1200px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-family: Inter;
  font-size: 120px;
  font-weight: 800;
  margin: 15px 0 32px 0;
  background: linear-gradient(180deg, #4dd487 10%, rgba(59, 154, 241, 0.44) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubTitle = styled.p`
  color: var(--unnamed, #464646);
  font-family: Inter;
  font-size: ${(props) => (props.bold ? '40px' : '20px')};
  font-weight: ${(props) => (props.bold ? '400' : '400')};
  margin-bottom: ${(props) => (props.bold ? '400' : '72px')};
`;

const GoToAppleBtn = styled.div`
  width: 300px;
  height: 80px;
  border-radius: 40px;
  background: #252525;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnTitle = styled.p`
  color: #fff;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
`;

const AppleImg = styled.img`
  width: 30px;
  height: 34px;
  margin-left: 31px;
`;
export default MainAppstore;

const OrnamentImg = styled.img`
  margin: ${(props) => (props.front ? '-100px 0 0 260px' : '0 0 -150px 940px')};
  width: ${(props) => (props.front ? '335px' : '160px')};
  height: ${(props) => (props.front ? '326px' : '200px')};
  z-index: ${(props) => (props.front ? '100' : '-1')};
`;
