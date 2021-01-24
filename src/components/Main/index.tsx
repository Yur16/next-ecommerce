import React from 'react'

import { Wrapper, Title, Description, Logo, Ilustration } from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => {
  return (
    <Wrapper>
      <Logo src="/img/logo.svg" alt="logo" />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Ilustration src="/img/hero-illustration.svg" alt="Hero" />
    </Wrapper>
  )
}

export default Main
