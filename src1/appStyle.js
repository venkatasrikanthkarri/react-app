import tw from 'tailwind.macro'
import styled from '@emotion/styled'

const StyledTheme=styled('div')`${tw``} background:${props=>props.bg}; color:${props=>props.color};`

export default StyledTheme