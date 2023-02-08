import styled, { StyledComponentBase } from 'styled-components'

interface ICard extends StyledComponentBase<any, {}> {
    Image?: any;
    Body?: any;
}

const Card: ICard = styled.div`
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

const CardImage = ({ children }: any) => (
  <div>{children}</div>
)

Card.Image = CardImage;
Card.Body = CardBody;

export default Card