import React from 'react'
import styled from '@emotion/styled'
import { AiOutlineMail as Mail } from 'react-icons/ai'
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa'
import { GoLinkExternal as LinkExternal } from 'react-icons/go'

import Card from './Card'

const Body = styled.p(() => ({
  padding: '10px 0px',
}))

const Icon = styled.div<{ right?: boolean }>(({ right }) => ({
  marginRight: !right ? '8px' : '0px',
  fontSize: '20px',
  display: 'flex',
}))

const ButtonGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

const Link = styled.a(({ theme }) => ({
  textDecoration: 'none',
  border: `1px solid ${theme.colors.borderColor}`,
  padding: '1px 10px',
  fontSize: '18px',
  backgroundColor: theme.colors.primary,
  borderRadius: '5px',
  color: theme.colors.mostReadableText(theme.colors.primary),
  boxShadow: `${theme.boxShadow}`,
  transition: 'all 0.3s ease',
  minWidth: '95px',
  textAlign: 'center',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    boxShadow: theme.boxShadowActive,
    borderColor: 'white',
  },
}))

const ContactCard: React.FC = () => {
  return (
    <Card css={{ padding: '15px 25px' }}>
      <h2 css={{ textAlign: 'center' }}>Contact</h2>
      <Body>
        Currently looking for new opportunities and would love to have a chat.
      </Body>
      <Body css={{ paddingTop: '0px' }}>Get in touch!</Body>
      <ButtonGroup>
        <Link css={{ fontSize: '16px' }} href="mailto:hi@roopeshpatel.com">
          <Icon>
            <Mail />
          </Icon>
          hi@roopeshpatel.com
        </Link>
        <Link target="_blank" href="https://github.com/roopsBee">
          <Icon>
            <Github />
          </Icon>
          Github
          <Icon right css={{ marginLeft: '2px' }}>
            <LinkExternal css={{ fontSize: '16px' }} />
          </Icon>
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/roopesh-patel-51a448145/"
        >
          <Icon>
            <Linkedin />
          </Icon>
          LinkedIn
          <Icon right css={{ marginLeft: '2px' }}>
            <LinkExternal css={{ fontSize: '16px' }} />
          </Icon>
        </Link>
      </ButtonGroup>
    </Card>
  )
}

export default ContactCard
