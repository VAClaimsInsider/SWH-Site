import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image'
import styled from 'styled-components'
import Card from '../components/Card'
import client from '../client'
import { ITeamMember } from '../types'
import defaultProfile from '../public/default-profile.jpg'

const StyledName = styled.h3`
  margin-bottom: 0;
  font-weight: 700;
  color: var(--secondary-color);
`
const StyledPosition = styled.p`
  margin: 0;
  font-size: 1.4rem;
  line-height: 1;
`

const ProfileImage = ({ imageProps, alt = '' }: any) => {
  console.log(imageProps);
  return imageProps ?
    <Image {...imageProps}
      style={{ width: '100%', height: 'auto' }}
      sizes="(max-width: 800px) 100vw, 800px"
      alt={ alt }
      loader={() => imageProps.src}
      // placeholder="blur"
      // blurDataURL={imageProps.asset.metadata.lqip}
    />
    : <Image src={defaultProfile} alt={ alt } />
}

export default function TeamMember({ name, image, position }: ITeamMember) {
  const imageProps = useNextSanityImage(client, image);
  
  return (
    <Card image={<ProfileImage imageProps={image ? imageProps : null} alt={`Photo of ${name}`} />}>
      <>
      <StyledName>{name}</StyledName>
      {position ? <StyledPosition>{position}</StyledPosition> : ''}
      </>
    </Card>
  );
}
