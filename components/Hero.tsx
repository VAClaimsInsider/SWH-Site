import styled from 'styled-components'
import Container from '../components/Container';

const Wrapper = styled.div`
  padding: 10rem 0;
  margin-bottom: 6rem;
  background-color: #333;
  min-height: 50rem;
  display: flex;
  align-items: center;
  ${({ bg }) => bg ? `
    background-image: url(${bg});
    background-size: cover;
  ` : ``}
`
const StyledPageTitle = styled.h1`
  font-size: 7rem;
  line-height: 1.1;
  font-weight: 900;
  color: #fff;
  margin: 0;
`

interface IHero {
  title: string,
  bg?: string,
}

export default function Hero({ title, bg }: IHero) {
  return (
    <Wrapper bg={bg}>
      <Container>
        <StyledPageTitle>{title}</StyledPageTitle>
      </Container>
    </Wrapper>
  )
}
