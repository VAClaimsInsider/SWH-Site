import { useState } from 'react';
import { LayoutGroup, motion } from "framer-motion"
import styled from 'styled-components'
import TeamMember from '../components/TeamMember'
import { IPerson, IDepartment } from '../types';
import { slugify } from '../utilities'

const StyledHeading = styled.h2`
  color: var(--primary-color);
  text-transform: uppercase;
`

const StyedTabsNav = styled.ul`
  display: flex;
  gap: 1em;
  list-style-type: none;
  margin: 3rem 0;
  padding: 0;
  
  button {
    background: transparent;
    border: 0;
    color: inherit;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1;
    padding: 0 0 0.5em 0;

    :disabled {
      color: var(--primary-color);
      border-bottom: solid 2px var(--primary-color);
    }
  }
`

const StyledTeamGrid = styled.div`
  display: grid;
  gap: var(--gutter);

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  > div > div { height: 100%; }
`

export default function Directory({ data }: { data: IDepartment[] }) {
  const [selection, setSelection] = useState(data[0]);
  
  const handleChange = (e: any) => {
    const matchingDepartment = data.find(({ name }: IDepartment) => (
      name === e.target.value
    ));
    if (matchingDepartment) setSelection(matchingDepartment);
  }

  return (
    <>
    <nav aria-labelledby="toc-heading">
      <StyledHeading id="toc-heading">Our Team Members</StyledHeading>
      <StyedTabsNav role="tablist">
          {data.map(({ name }: { name: string }, i: number) => (
        <li key={i}>
          <button
            onClick={handleChange}
            disabled={name === selection.name}
            value={name}
            role="tab"
          >{name}</button>
        </li>
        ))}
      </StyedTabsNav>
    </nav>
    <StyledTeamGrid>
      <LayoutGroup>
          {selection.team.map(({ name, image, position }: IPerson, i: number) => {
          const key = slugify(`${selection.name} ${name}`);
          return <motion.div key={key}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05 * i }}
          >
            <TeamMember name={name} image={image} position={position} />
          </motion.div>
        })}
      </LayoutGroup>
    </StyledTeamGrid>
    </>
  )
};