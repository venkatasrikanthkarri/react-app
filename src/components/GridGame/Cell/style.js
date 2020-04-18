import tw from 'tailwind.macro'
import styled from '@emotion/styled'

const AnimatedCell=styled('div')`${tw`w-full h-full `} background:${props=>props.bg};  animation:${props=>props.animation} 0.2s ease `
const StyledHiddenCell=styled('div')`${tw` m-1`} width:${props=>props.width}px; 
height:${props=>props.width}px; background:${props=>props.bgc}; animation:${props=>props.animation} 1s ease`
export {AnimatedCell,StyledHiddenCell}
