import React, { useState } from 'react'
import { motion, MotionProps } from 'framer-motion'
import styled, { CSSObject } from '@emotion/styled'
import LazyLoad from 'react-lazyload'
import Card from './Card'

const Header = styled.h2(({ theme }) => ({
  textAlign: 'center',
  padding: '5px',
  color: theme.colors.mostReadableText(theme.colors.primary),
}))

const VidWrapper = styled.div({
  position: 'relative',
  width: '100%',
  paddingTop: '100%',
})

const Vid = styled(motion.video)(() => ({
  width: '100%',
  position: 'absolute',
  left: 0,
  top: 0,
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
  overflowWrap: 'break-word',
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

const Img = styled.img(() => ({
  width: '100%',
  height: 'auto',
}))

interface Props extends MotionProps {
  title: string
  descriptionHTML: string
  tags: string[]
  vid: string
  vidAriaLabel: string
  placeholderImage: string
  placeholderAlt: string
  codeUrl: string
  liveUrl?: string
  vidPoster?: string
  css?: CSSObject
}

const PreviewCard: React.FC<Props> = ({
  title,
  descriptionHTML,
  vid,
  tags,
  vidAriaLabel,
  liveUrl,
  codeUrl,
  css,
  placeholderImage,
  vidPoster,
  placeholderAlt,
  ...props
}) => {
  const [vidReady, setVidReady] = useState(false)

  return (
    <Card css={css} {...props}>
      <Header>{title}</Header>
      <VidWrapper css={{ backgroundImage: `url(${placeholderImage})` }}>
        <LazyLoad
          component={<Img src={placeholderImage} alt={placeholderAlt} />}
        >
          <Vid
            initial={{ opacity: 0 }}
            animate={{ opacity: vidReady ? 1 : 0 }}
            poster={vidPoster}
            preload="auto"
            controls
            loop
            muted
            playsInline
            aria-label={vidAriaLabel}
            onCanPlay={() => {
              setVidReady(true)
            }}
            src={vid}
          />
        </LazyLoad>
      </VidWrapper>
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
        <Body dangerouslySetInnerHTML={{ __html: descriptionHTML }} />

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
