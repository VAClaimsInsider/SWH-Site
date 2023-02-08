// import { useNextSanityImage } from 'next-sanity-image';
import imageUrlBuilder from "@sanity/image-url"
import Image from 'next/image'
import styled from 'styled-components'
import Card from '../components/Card'
import client from '../client'
import { IPerson } from '../types'
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
const builder = imageUrlBuilder(client);

export default function TeamMember({ name, image, position }: IPerson) {
  const imageUrl = image ? builder.image(image).size(500, 500).url() : defaultProfile;
  
  return (
    <Card>
      <Card.Image>
        <Image
          src={imageUrl}
          alt={`${name} profile photo`}
          width={500}
          height={500}
        />
      </Card.Image>
      <Card.Body>
        <StyledName>{name}</StyledName>
        {position ? <StyledPosition>{position}</StyledPosition> : ''}
      </Card.Body>
    </Card>
  );
}
