import React from 'react'
import { PageProps } from 'gatsby'
import {
  motion,
  useAnimation,
  useViewportScroll,
  Variants,
} from 'framer-motion'
import styled from '@emotion/styled'
import { mq } from '@/theme/theme'
import PreviewCard from '../components/card/PreviewCard'

const Container = styled.div(
  mq({
    display: 'flex',
    width: '100%',
    minHeight: '100vh',
    padding: ['50px 0px', '55px 10px', '60px 15px', '70px 20px'],
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'space-evenly',
  }),
)

const mockProject = {
  title: 'Ultimate Project',
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores voluptates distinctio corrupti commodi facilis. Ullam, repellendus consequatur similique autem distinctio voluptas accusamus, rerum, magni commod ducimus est voluptatum tempora exercitationem?',
  tags: ['reactjs', 'typescript', 'javascript', 'redux', 'api'],
  image: 'https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif',
  codeUrl: 'http://github.com',
  liveUrl: 'http://roopeshpatel.com',
}

const Portfolio: React.FC<PageProps> = () => {
  return (
    <Container>
      <PreviewCard
        codeUrl={mockProject.codeUrl}
        imageAlt="alt image text"
        image={mockProject.image}
        tags={mockProject.tags}
        title={mockProject.title}
        description={mockProject.description}
      />
      <PreviewCard
        codeUrl={mockProject.codeUrl}
        imageAlt="alt image text"
        image={mockProject.image}
        tags={mockProject.tags}
        title={mockProject.title}
        description={mockProject.description}
      />
      <PreviewCard
        codeUrl={mockProject.codeUrl}
        liveUrl={mockProject.liveUrl}
        imageAlt="alt image text"
        image={mockProject.image}
        tags={mockProject.tags}
        title={mockProject.title}
        description={mockProject.description}
      />
      <PreviewCard
        codeUrl={mockProject.codeUrl}
        liveUrl={mockProject.liveUrl}
        imageAlt="alt image text"
        image={mockProject.image}
        tags={mockProject.tags}
        title={mockProject.title}
        description={mockProject.description}
      />
      <PreviewCard
        codeUrl={mockProject.codeUrl}
        liveUrl={mockProject.liveUrl}
        imageAlt="alt image text"
        image={mockProject.image}
        tags={mockProject.tags}
        title={mockProject.title}
        description={mockProject.description}
      />
    </Container>
  )
}

export default Portfolio
