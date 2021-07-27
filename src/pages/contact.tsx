import React from 'react'
import { PageProps } from 'gatsby'
import styled from '@emotion/styled'
import ContactCard from '../components/cards/ContactCard'

const Container = styled.div({
  display: 'flex',
  minHeight: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
})

const Contact: React.FC<PageProps> = () => (
  <Container>
    <ContactCard />
  </Container>
)

export default Contact
