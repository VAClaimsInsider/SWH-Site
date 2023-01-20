import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container';
import Logo from '../public/logo.svg'

export default function Foundation() {
  return (
    <>
      <Head>
        <title>Foundation | Served With Honor </title>
        <meta name="description" content="Served With Honor helps veterans and their families live Happier, Healthier, and Wealthier. Click to learn more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Container>
          <h1>Served With Honor Foundation</h1>
          <Logo width={600} />
          <p>The Served With Honor Foundation is a 501(c)(3) nonprofit organization dedicated to serving those who served. It promotes philanthropy, charity, and volunteerism within the veteran community.</p>
          
          <h2>Our Social WHY, Causes We Care About, and Stance on Issues Affecting Veterans and Their Families.</h2>
          <p>At Served With Honor, we believe all Veterans deserve to be treated fairly and as the patriots they are, and have the rights, privileges, benefits, services, and support of a grateful nation.</p>
          <p>We will address these points by creating a vibrant community where we can have safe, raw, real, honest, and vulnerable conversations, which will enable the positive changes we want and need for ALL Veterans.</p>
          <p>We support a variety of non-profit organizations who are working to address these larger social issues that impact Veterans and their families.</p>
          
          <h2>Here&apos;s Our Stance on 4 Major Issues Affecting Our Social WHY:</h2>

          <ol>
            <li>
              <h3>Ending Veteran Homelessness Across The Country:</h3>
            </li>
            <li>
              <h3>Promoting Equal Rights & Dignity Among All Veterans:</h3>
              <p>We seek to be a voice that speaks out against injustices and be a presence that intervenes for the marginalized and oppressed, to stand with and speak for ALL Veterans and people of the community when they have been treated unfairly by striving for unity amidst diversity with intentional effort so that everyone is treated with honor, dignity, and respect. We&apos;re not red states, white states, or blue states, WE&apos;RE THE UNITED STATES.</p>
              <p>We will work to support a variety of nonprofits, to include both faith and non-faith based organizations, who are trying to represent and serve the whole community to build character, strengthen individuals, and nurture families, especially on issues most affecting veterans and their families.</p>
            </li>
            <li>
              <h3>Ending The Military & Veteran Suicide Epidemic:</h3>
              <p>We must provide better access to mental health resources for Veterans and their families by connecting them with private medical professionals who understand the unique needs of the Veteran community to break the social stigma around mental health, help more veterans celebrate LIFE CHANGE, and work to end the military/veteran suicide epidemic.</p>
              <p>We will work to support a variety of nonprofits who are trying to provide veterans and their families with better access to mental health resources, including but not limited to, supporting organizations working to end the military/veteran suicide crisis.</p>
            </li>
            <li>
              <h3>Emergency Assistance & Relief For Veterans And Their Families:</h3>
            </li>
          </ol>

        </Container>
      </main>
      <Footer />
    </>
  )
}