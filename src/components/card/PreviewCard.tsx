import React from 'react'
import { motion, MotionProps } from 'framer-motion'
import styled, { CSSObject } from '@emotion/styled'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

const Card = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${theme.colors.borderColor}`,
  borderRadius: '5px',
  zIndex: 1000,
  flex: '0 0',
  flexBasis: '100%',
  maxWidth: '375px',
  backgroundColor: theme.colors.primary,
  color: theme.colors.mostReadableText(theme.colors.primary),
}))

const Header = styled.h2(({ theme }) => ({
  textAlign: 'center',
  padding: '5px',
  color: theme.colors.mostReadableText(theme.colors.primary),
}))

const Vid = styled.video(() => ({
  width: '100%',
}))

const Nav = styled.nav(() => ({
  width: '100%',
  padding: '10px',
  borderBottom: `1px solid`,
  display: 'flex',
  gap: '10px',
}))

const Link = styled.a(({ theme }) => ({
  textDecoration: 'none',
  border: `1px solid ${theme.colors.borderColor}`,
  padding: '1px 10px',
  fontSize: '18px',
  backgroundColor: theme.colors.primary,
  borderRadius: '5px',
  textTransform: 'capitalize',
  color: theme.colors.mostReadableText(theme.colors.primary),
  boxShadow: `${theme.boxShadow}`,
  transition: 'all 0.3s ease',
  minWidth: '95px',
  textAlign: 'center',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: theme.boxShadowActive,
    borderColor: 'white',
  },
}))

const CardBottom = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
})

const Body = styled.div(() => ({
  padding: '10px',
  fontWeight: 'bold',
}))
const TagBox = styled.div(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  padding: '10px',
  gap: '5px',
}))

const Tag = styled.div(({ theme }) => ({
  border: `1px solid ${theme.colors.tertiary}`,
  borderRadius: '5px',
  backgroundColor: theme.colors.primary,
  padding: '2px 6px',
  fontWeight: 'bold',
}))

interface Props extends MotionProps {
  title: string
  description: string
  tags: string[]
  vid: string
  vidAriaLabel: string
  placeholderImage: string
  placeholderAlt: string
  codeUrl: string
  liveUrl?: string
  css?: CSSObject
}

const PreviewCard: React.FC<Props> = ({
  title,
  description,
  vid,
  tags,
  vidAriaLabel,
  liveUrl,
  codeUrl,
  css,
  placeholderImage,
  placeholderAlt,
  ...props
}) => {
  return (
    <Card
      key={title}
      animate={{ rotateY: 0, opacity: 1, transition: { duration: 0.5 } }}
      initial={{ rotateY: 90, opacity: 0 }}
      exit={{ opacity: 0, rotateY: -90, transition: { duration: 0.4 } }}
      css={css}
      {...props}
    >
      <Header>{title}</Header>
      <LazyLoadComponent
        placeholder={
          <img width="100%" src={placeholderImage} alt={placeholderAlt} />
        }
      >
        <Vid autoPlay loop muted playsInline aria-label={vidAriaLabel}>
          <source src={vid} type="video/mp4" />
        </Vid>
      </LazyLoadComponent>
      <Nav>
        <Link href={codeUrl} target="_blank">
          Github
        </Link>
        {liveUrl && (
          <Link href={liveUrl} target="_blank">
            Live Demo
          </Link>
        )}
      </Nav>
      <CardBottom>
        <Body>{description}</Body>
        <TagBox>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagBox>
      </CardBottom>
    </Card>
  )
}

export default PreviewCard
