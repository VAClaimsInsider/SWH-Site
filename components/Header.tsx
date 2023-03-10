import styled from 'styled-components'
import LogoBadge from '../public/logo-badge.svg'

import { main as mainMenu } from '../menus'
import Menu from '../components/Menu'
import Container from '../components/Container';

const StyledHeader = styled.header`
  margin-top: 4.5rem;
  margin-bottom: 4.5rem;
`

const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
`;

const StyledLogo = styled.div`
  display: flex;
  color: var(--primary-color);
  svg {
    margin-right: 1rem;
  }
`

const MenuWrapper = styled.div`
  nav {
    display: flex;
    gap: 3rem;
    font-size: 1.7rem;
    font-weight: 100;
    line-height: 1;
  }
  a {
    text-decoration: none;
  }
`

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <StyledLogo>
            <LogoBadge width={60} />
            <span>Served With Honor<br />The Veteran Company&trade;</span>
          </StyledLogo>
          <MenuWrapper><Menu links={mainMenu} /></MenuWrapper>
        </Wrapper>
      </Container>
    </StyledHeader>
  )
}