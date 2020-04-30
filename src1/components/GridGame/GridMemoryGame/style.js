import tw from 'tailwind.macro'
import styled from '@emotion/styled'


const StyledGridGame=styled('div')`${tw`h-screen flex flex-col items-center justify-center`} background:${props=>props.bg};color:${props=>props.color};`

export default StyledGridGame
