import { useState } from 'react';
import { LayoutGroup, motion } from "framer-motion"
import styled from 'styled-components'
import TeamMember from '../components/TeamMember'
import { ITeamMember } from '../types';

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
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  > div > div { height: 100%; }
`

export default function Directory({ members, departments }: { members: ITeamMember[], departments: string[] }) {
  const [departmentSelection, setDepartmentSelection] = useState(departments[0]);
  const [displayMembers, setDisplayMembers] = useState(members.filter(a => a.department === departmentSelection));
  
  const handleChange = (e: any) => {
    const selection = e.target.value;
    setDepartmentSelection(selection);

    // if (!selection) {
    //   setDisplayMembers(members);
    //   return;
    // }

    const isMatch = ({ department }: ITeamMember) => department === selection;
    setDisplayMembers(members.filter(isMatch));
  }

  return (
    <>
    <nav aria-labelledby="toc-heading">
      <StyledHeading id="toc-heading">Our Team Members</StyledHeading>
      <StyedTabsNav role="tablist">
        {/* <li><button onClick={handleChange} value='' disabled={!departmentSelection}>All</button></li> */}
      {departments.map((name: string, i: number) => (
        <li key={i}>
          <button
            onClick={handleChange}
            disabled={name === departmentSelection}
            value={name}
            role="tab"
          >{name}</button>
        </li>
        ))}
      </StyedTabsNav>
    </nav>
    <StyledTeamGrid>
      <LayoutGroup>
        {displayMembers.map(({ name, image, position }: ITeamMember, i: number) => {
          return <motion.div key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.025 * i }}
          >
            <TeamMember name={name} image={image} position={position} />
          </motion.div>
        })}
      </LayoutGroup>
    </StyledTeamGrid>
    </>
  )
};