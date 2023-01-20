import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${({ alt }: { alt: undefined | boolean }) => alt ? 'var(--primary-color-8)' : 'var(--primary-color-9)'};
  color: #fff;
  padding: 3rem;
  
  @media (min-width: 640px) {
    padding: 4.5rem;
  }

  > *:first-child { margin-top: 0; }
  > *:last-child { margin-bottom: 0; }
`;

const LabelWrapper = styled.div`
  color: #737882;
  font-size: 1.7rem;
  line-height: 1;
  margin-bottom: 3rem;

  span {
    color: var(--secondary-color);
    margin-left: 0.25em;
  }

  + * { margin-top: 0; }
`

export default function Tile({ label, num, alt, children }: { label?: string, num?: number, alt?: boolean, children: string | JSX.Element }) {
  return (
    <Wrapper alt={alt}>
      <>
      {label || num ?
        <LabelWrapper>
          {label ? label : ''}
          {num ? <span>{`0${num}`}</span> : ''}
        </LabelWrapper>
      : ''}
      {children}
      </>
    </Wrapper>
  )
}
