import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`
const CardBody = styled.div`
  padding: 1.5rem;

  > *:first-child { margin-top: 0; }
  > *:last-child { margin-bottom: 0; }
`

type Props = { 
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element),
}

Card.Image = ({ children }: Props) => (
  <div>{children}</div>
)

Card.Body = ({ children }: Props) => (
  <CardBody>{children}</CardBody>
)

export default Card