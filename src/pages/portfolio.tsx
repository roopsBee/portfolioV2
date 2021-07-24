import React from 'react'
import { PageProps } from 'gatsby'
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

const mockProject = [
  {
    title: 'Ultimate Project',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores voluptates distinctio corrupti commodi facilis. Ullam, repellendus consequatur similique autem distinctio voluptas accusamus, rerum, magni commod ducimus est voluptatum tempora exercitationem?',
    tags: ['reactjs', 'typescript', 'javascript', 'redux', 'api'],
    image: 'https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif',
    codeUrl: 'http://github.com',
    liveUrl: 'http://roopeshpatel.com',
  },
  {
    title: 'Mega Project',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores voluptates distinctio corrupti commodi facilis. Ullam, repellendus consequatur similique autem distinctio voluptas',
    tags: ['reactjs', 'javascript', 'redux', 'api'],
    image: 'https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif',
    codeUrl: 'http://github.com',
    liveUrl: 'http://roopeshpatel.com',
  },
  {
    title: 'Big Bad',
    description: 'Lorem ipsum dolor sit, amet',
    tags: ['reactjs', 'typescript'],
    image: 'https://media.giphy.com/media/cuPm4p4pClZVC/giphy.gif',
    codeUrl: 'http://github.com',
    liveUrl: 'http://roopeshpatel.com',
  },
  {
    title: 'Batman universal project',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores voluptates distinctio corrupti commodi facilis. Ullam, repellendus consequatur similique autem distinctio',
    tags: ['javascript', 'redux', 'api'],
    image: 'https://media.giphy.com/media/ilqOZH5iI98vxx3nt6/giphy.gif',
    codeUrl: 'http://github.com',
    liveUrl: 'http://roopeshpatel.com',
  },
  {
    title: 'Project',
    description:
      'Lorem ipsum dolor tio voluptas accusamus, rerum, magni commod ducimus est voluptatum tempora exercitationem?',
    tags: ['api'],
    image: 'https://media.giphy.com/media/Q94xQWspTUkShljj8P/giphy.gif',
    codeUrl: 'http://github.com',
    liveUrl: 'http://roopeshpatel.com',
  },
]

const Portfolio: React.FC<PageProps> = () => {
  return (
    <Container>
      {mockProject.map(
        ({ codeUrl, description, image, liveUrl, tags, title }) => (
          <PreviewCard
            key={title}
            title={title}
            image={image}
            description={description}
            codeUrl={codeUrl}
            liveUrl={liveUrl}
            tags={tags}
            imageAlt="cat"
          />
        ),
      )}
    </Container>
  )
}

export default Portfolio
