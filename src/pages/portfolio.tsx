import React from 'react'
import { graphql, PageProps, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { mq } from '@/theme/theme'
import PreviewCard from '../components/cards/PreviewCard'
import { GetProjectsQuery } from '../../graphql-types'

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

const Portfolio: React.FC<PageProps> = () => {
  const data: GetProjectsQuery = useStaticQuery(graphql`
    query GetProjects {
      allFile {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                Vid
                placeholder
                alt
                codeUrl
                placeholderAlt
                tech
                title
                url
              }
              html
            }
          }
        }
      }
    }
  `)

  const projectEdges = data.allFile.edges

  const projects = projectEdges.map(({ node }) => {
    const { Vid, placeholderAlt, alt, codeUrl, placeholder, tech, title, url } =
      node.childMarkdownRemark.frontmatter

    const { html } = node.childMarkdownRemark

    return (
      <PreviewCard
        key={title}
        title={title}
        vid={Vid}
        descriptionHTML={html}
        codeUrl={codeUrl}
        liveUrl={url}
        tags={tech}
        vidAriaLabel={alt}
        placeholderAlt={placeholderAlt}
        placeholderImage={placeholder}
      />
    )
  })

  return <Container>{projects}</Container>
}

export default Portfolio
