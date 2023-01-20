import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  `
const CardContent = styled.div`
  padding: 1.5rem;

  > *:first-child { margin-top: 0; }
  > *:last-child { margin-bottom: 0; }
`

export default function Card({ image, children }: { image?: any, children: string | JSX.Element }) {
  return (
    <StyledCard>
      <div>{image}</div>
      <CardContent>{children}</CardContent>
    </StyledCard>
  )
}
