import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import {
  Wrapper,
  IconWrapper,
  MenuFull,
  MenuNav,
  MenuLink,
  RegisterBox,
  CreateAccount,
  LogoWrapper
} from './styles'
import Logo from 'components/Logo'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper>
      <MediaMatch lessThan="medium">
        <IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="open menu" />
        </IconWrapper>
      </MediaMatch>

      <LogoWrapper>
        <Logo hideOnMobile />
      </LogoWrapper>

      <MediaMatch greaterThan="medium">
        <MenuNav>
          <MenuLink href="#">Home</MenuLink>
          <MenuLink href="#">Explore</MenuLink>
        </MenuNav>
      </MediaMatch>

      <div className="menu-group">
        <IconWrapper>
          <SearchIcon aria-label="search" />
        </IconWrapper>
        <IconWrapper>
          <ShoppingCartIcon aria-label="shopping cart" />
        </IconWrapper>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Button>Sign In</Button>
          </MediaMatch>
        )}
      </div>

      <MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

        <MenuNav>
          <MenuLink href="#">Home</MenuLink>
          <MenuLink href="#">Explore</MenuLink>
          {!!username && (
            <>
              <MenuLink href="#">My account</MenuLink>
              <MenuLink href="#">Wishlist</MenuLink>
            </>
          )}
        </MenuNav>
        {!username && (
          <RegisterBox>
            <Button fullWidth size="large">
              Log in now
            </Button>
            <span>or</span>
            <CreateAccount href="#" title="Sign Up">
              Sign Up
            </CreateAccount>
          </RegisterBox>
        )}
      </MenuFull>
    </Wrapper>
  )
}

export default Menu
