import React, { useState } from 'react'
import styled from '@emotion/styled'
import { AiOutlineMenu as Icon } from 'react-icons/ai'
import { motion, Variants } from 'framer-motion'

import NavLink from './NavLink'

const MenuIcon = styled(Icon)(({ theme }) => ({
  border: `1px solid ${theme.colors.borderColor}`,
  borderRadius: '5px',
  boxShadow: theme.boxShadow,
  fontSize: '30px',
  color: theme.colors['dark-lava'],
  transition: 'all 0.1s ease',
  zIndex: 10,
  overflow: 'hidden',
  '&:active': {
    border: '1px solid white',
    boxShadow: theme.boxShadowActive,
  },
}))

const HeaderBox = styled.div<{ open: boolean }>`
  position: fixed;
  width: 100%;
  display: flex;
  padding: 25px;
  justify-content: flex-end;
  ${MenuIcon} {
    border: ${(props) => props.open && '1px solid white'};
    box-shadow: ${(props) => props.open && props.theme.boxShadowActive};
  }
`
const NavBox = styled.div({
  justifyContent: 'flex-end',
  gap: '20px',
  display: 'flex',
  flexDirection: 'column',
})

const ResponsiveMenu = styled.div<{ open: boolean }>(() => ({
  display: 'flex',
  gap: '20px',
}))

const MResponsiveMenu = motion(ResponsiveMenu)

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  const container: Variants = {
    hidden: {
      transition: { staggerChildren: 0.05 },
    },
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const transition = {
    type: 'spring',
    duration: 0.4,
  }

  const item: Variants = {
    hidden: { opacity: 0, x: 150, transition },
    show: {
      opacity: 1,
      x: 0,
      transition,
    },
  }

  const icon: Variants = {
    hidden: { x: 100, transition },
    show: {
      x: 0,
      transition,
    },
  }

  return (
    <>
      <HeaderBox open={menuOpen}>
        <MResponsiveMenu
          variants={container}
          animate={menuOpen ? 'show' : 'hidden'}
          open={menuOpen}
        >
          <motion.div variants={icon}>
            <MenuIcon onClick={handleMenuClick} />
          </motion.div>
          <NavBox>
            <motion.div variants={item}>
              <NavLink to="/">Home</NavLink>
            </motion.div>
            <motion.div variants={item}>
              <NavLink to="/portfolio/">Portfolio</NavLink>
            </motion.div>
            <motion.div variants={item}>
              <NavLink to="/contact/">Contact</NavLink>
            </motion.div>
          </NavBox>
        </MResponsiveMenu>
      </HeaderBox>
    </>
  )
}

export default Header
