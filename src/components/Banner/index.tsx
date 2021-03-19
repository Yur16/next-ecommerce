import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'

import { Wrapper, Image, Caption, Title, Subtitle } from './styles'

export type BannerProps = {
  image: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const Banner = ({
  image,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'normal'
}: BannerProps) => {
  return (
    <Wrapper>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}
      <Image src={image} role="img" aria-label={title} />
      <Caption>
        <Title>{title}</Title>
        <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Button as="a" href={buttonLink} size="large">
          {buttonLabel}
        </Button>
      </Caption>
    </Wrapper>
  )
}

export default Banner
