import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container';
import styled from 'styled-components'
import client from '../client'
import { IPerson, IDepartment } from '../types'
import Hero from '../components/Hero';
import Directory from '../components/Directory';
import VACILogo from '../public/logo-vaci.svg'
import TelemedicaLogo from '../public/logo-telemedica.svg'
import MDMELogo from '../public/logo-mdme.svg'
import LendHeroLogo from '../public/logo-lend-hero.svg'
import HireVeteransLogo from '../public/logo-hire-veterans.svg'
import RawCiderLogo from '../public/logo-raw-cider.svg'

const DirectoryWrapper = styled.div`
  margin: 15rem 0;
`
const CompaniesWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  gap: 30px;

  li {
    list-style-type: none;
  }
  
  svg {
    width: 100%;
    object-fit: contain;
  }
`

export default function About({ teamMembers, departments }: { teamMembers: IPerson[], departments: IDepartment[] }) {
  const companies = [
    { name: 'VA Claims Insider', url: 'https://vaclaimsinsider.com/', logo: VACILogo },
    { name: 'Telemedica', url: 'https://telemedicallc.com/', logo: TelemedicaLogo },
    { name: 'Military Disability Made Easy', url: 'https://militarydisabilitymadeeasy.com/', logo: MDMELogo },
    { name: 'LendHero Home Loans', url: 'https://lendherohomeloans.com/', logo: LendHeroLogo },
    { name: 'HireVeterans', url: 'https://hireveterans.com/', logo: HireVeteransLogo },
    { name: 'RAW Cider Company', url: 'https://rawcider.com/', logo: RawCiderLogo },
  ];

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero
        title={'What is Served With Honor?'}
        bg={'/hero-background.jpg'}
      />
      <main>
        <Container>
          <p>Proudly Serving Those Who Served!</p>
          <p>We&apos;re on a mission to help 10M+ veterans and their families live Happier, Healthier, and Wealthier lives.</p>
          <p>Served With Honor is the parent company of:</p>
          <CompaniesWrapper>
            {companies.map((company, i) => (
              <li key={i}>
                {company.logo}
                <a href={company.url} target="_blank" rel="noreferrer">
                  <company.logo />
                </a>
              </li>
            ))}
          </CompaniesWrapper>
          <DirectoryWrapper>
            <Directory members={teamMembers} departments={departments} />
          </DirectoryWrapper>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context: any) {
  // Get all Team Members and list of Departments
  let { teamMembers, departments } = await client.fetch(`{
    "teamMembers": *[_type == "teamMember"] | order(orderRank) {
      _id,
      first_name,
      last_name,
      preferred_name,
      position,
      "department": department->name,
      image,
    },
    "departments": *[_type == "department"] | order(orderRank){ name, director }
  }`);
  
  interface ISanityTeamMember {
    _id: string,
    name?: string,
    first_name?: string,
    last_name?: string,
    preferred_name?: string,
    position?: string,
    department?: string,
    image: any
  }
  interface ISanityDepartment {
    name: string,
    director?: { _ref: string }
  }
  // Modify team members to use preferred name if present
  teamMembers = teamMembers.map((person: ISanityTeamMember) => {
    const name = `${person.preferred_name ? person.preferred_name : person.first_name} ${person.last_name}`
    person.name = name;
    delete person.first_name;
    delete person.last_name;
    delete person.preferred_name;
    return person;
  });
  
  departments = departments.map(
    ({ name, director }: ISanityDepartment) => ({
      name,
      director: director ? director._ref : null,
    })
  );
  
  return { props: { teamMembers, departments } };
}
