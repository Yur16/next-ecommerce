import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import { Wrapper, IconWrapper, MenuFull } from './styles'
import Logo from 'components/Logo'

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper>
      <IconWrapper onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="open menu" />
      </IconWrapper>

      <Logo hideOnMobile />
      <div>
        <IconWrapper>
          <SearchIcon aria-label="search" />
        </IconWrapper>
      </div>

      <MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
      </MenuFull>
    </Wrapper>
  )
}

export default Menu
