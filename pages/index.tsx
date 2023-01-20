import Head from 'next/head'
import styled from 'styled-components'
import { useParallax } from 'react-scroll-parallax'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container';
import Tile from '../components/Tile';
import Logo from '../public/logo.svg'
          
const StyledTitle = styled.h1`
  font-size: min(12vw, 9rem);
  line-height: 1.2;
  text-align: center;
  
  em {
    color: var(--primary-color);
  }
`
const StyledHighlights = styled.p`
  color: var(--primary-color);
  font-size: 3.4rem;
  font-weight: 700;

  span { color: var(--secondary-color); }
`
const TilesWrapper = styled.div`
  margin-top: 6rem;
  margin-bottom: 6rem;
  display: grid;
  gap: 0.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const StyledTileText = styled.p`
  font-family: 'Times New Roman', serif;
  font-size: 5.5rem;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Served With Honor | The Veteran Company&trade;</title>
        <meta name="description" content="Served With Honor helps veterans and their families live Happier, Healthier, and Wealthier. Click to learn more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Container>
          <Logo width={600} style={{ margin: '0 auto', display: 'block' }}  />
          <StyledTitle>We Help Veterans and Their Families Live <em>Happier</em>, <em>Healthier</em>, and <em>Wealthier</em>.</StyledTitle>
          
          <StyledHighlights><span>Our WHY:</span> We believe veterans and their families feel stuck, alone, and underserved. Our purpose is to help veterans and their families celebrate life change.</StyledHighlights>
          <StyledHighlights><span>Our VISION:</span> To be the world&apos;s leading change agent for veterans and their families.</StyledHighlights>
          <StyledHighlights><span>Our MISSION:</span> To help 10M+ veterans and their families live happier, healthier, and wealthier lives.</StyledHighlights>
          
          <TilesWrapper>
            {[
              'Banking & Financial Services',
              'VA Disability Benefits',
              'Wellness and Telehealth',
              'VA and DoD Disability Education & Training',
              'Jobs and Exciting New Careers for Veterans',
              'Real Estate and VA Home Loans',
            ].map((item, index) => (
              <Tile
                key={index}
                label="Industry"
                num={index + 1}
                alt={index % 2 === 0}
              >
                <StyledTileText>{item}</StyledTileText>
              </Tile>
            ))}
          </TilesWrapper>

        </Container>
      </main>
      <Footer />
    </>
  )
}
