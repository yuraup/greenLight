import styled from 'styled-components';

import { ReactComponent as Logo } from '../imgs/logo.svg';
import { ReactComponent as MenuIcon } from '../imgs/menu.svg';

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoBox>
        <LogoText>Green Light</LogoText>
        <LogoIconStyled />
      </LogoBox>
      <MenuIconStyled />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;

  width: 1280px;
  height: 200px;
`;

const MenuIconStyled = styled(MenuIcon)`
  margin-top: 32px;
  margin-right: 36px;
  width: 57px;
  height: 55px;
`;
const LogoIconStyled = styled(Logo)`
  margin-top: 12px;
  margin-left: 10px;
`;

const LogoBox = styled.div`
  width: 280;
  height: 60px;
  display: flex;

  margin-top: 32px;
  margin-left: 66px;
`;
const LogoText = styled.div`
  font-size: 50px;
  font-weight: bolder;
  background: linear-gradient(
    180deg,
    #51c884 0%,
    rgba(61, 192, 156, 0.7) 44.27%,
    #81d9ec 57.81%,
    rgba(58, 151, 203, 0.66) 99.97%
  );

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default Header;
