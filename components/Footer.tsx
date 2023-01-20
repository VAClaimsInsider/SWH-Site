import styled from 'styled-components'
import Container from '../components/Container';
import LogoBadge from '../public/logo-badge.svg'

const StyledFooter = styled.div`
  /* background-color: #1F242E; */
  background-color: var(--primary-color-9);
  color: #fff;
  margin-top: 6rem;
  padding-bottom: 5rem;
  padding-top: 5rem;
`
const StyledLegal = styled.div`
  background-color: var(--primary-color-8);
  color: #fff;
  font-size: 1.4rem;
  line-height: 1;
  text-align: center;
  padding-bottom: 3rem;
  padding-top: 3rem;
`

export default function Footer() {
  return (
    <footer>
      <StyledFooter>
        <Container>
          <LogoBadge width={50} />
          Served With Honor - The Veteran Company™
          Mailing Address:
          3575 Far West Blvd #28983
          Austin, TX 78731
          
          How Can We Serve You Today?

        </Container>
      </StyledFooter>
      <StyledLegal>  
        <Container>&copy; 2022-2023 - Served With Honor, Inc - All Rights Reserved</Container>
      </StyledLegal>
    </footer>
  )
}
