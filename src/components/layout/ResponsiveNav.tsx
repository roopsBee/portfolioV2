import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { AiOutlineMenu as Icon } from 'react-icons/ai'
import { motion, Variants, Transition } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { mq } from '@/theme/theme'
import useIsSsr from '../../hooks/useIsSsr'
import NavLink from './NavLink'

const MenuIcon = styled(Icon)<{ open: boolean }>(({ theme, open }) => ({
  border: open ? '1px solid white' : `1px solid ${theme.colors.borderColor}`,
  borderRadius: '5px',
  boxShadow: open ? theme.boxShadowActive : theme.boxShadow,
  fontSize: '30px',
  color: theme.colors['dark-lava'],
  transition: 'all 0.3s ease',
  zIndex: 10,
  overflow: 'hidden',
  backgroundColor: `${theme.colors.primary}`,
  cursor: 'pointer',
  '&:active': {
    border: '1px solid white',
    boxShadow: theme.boxShadowActive,
  },
}))

const NavBox = styled.nav<{ isBigScreen: boolean }>(({ isBigScreen }) =>
  mq({
    justifyContent: 'flex-end',
    gap: ['10px', '10px', '15px', '20px', '25px'],
    display: 'flex',
    flexDirection: isBigScreen ? 'row' : 'column',
  }),
)

const MResponsiveMenu = styled(motion.div)(() =>
  mq({
    display: 'flex',
    gap: ['10px', '10px', '15px', '20px', '25px'],
  }),
)

const ResponsiveNav: React.FC<{ breakpoint: number }> = ({ breakpoint }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const isBigScreen = useMediaQuery({ minWidth: breakpoint })
  const isSsr = useIsSsr()

  useEffect(() => {
    setMenuOpen(isBigScreen)
  }, [isBigScreen])

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

  const transition: Transition = {
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
    <MResponsiveMenu
      variants={container}
      initial="hidden"
      animate={menuOpen ? 'show' : 'hidden'}
    >
      {!isBigScreen && (
        <motion.div variants={icon}>
          <MenuIcon open={menuOpen} onClick={handleMenuClick} />
        </motion.div>
      )}
      {!isSsr && (
        <NavBox id="site nav" isBigScreen={isBigScreen}>
          <NavLink motionProps={{ variants: item }} to="/">
            Home
          </NavLink>
          <NavLink motionProps={{ variants: item }} to="/portfolio/">
            Portfolio
          </NavLink>
          <NavLink motionProps={{ variants: item }} to="/contact/">
            Contact
          </NavLink>
        </NavBox>
      )}
    </MResponsiveMenu>
  )
}

export default ResponsiveNav
