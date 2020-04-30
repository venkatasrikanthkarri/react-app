import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import {Loading} from '../../../stores/Animations'
const LoaderContainer=styled('div')`${tw`flex justify-center items-center w-screen h-screen`}`
const MainBox=styled('div')`${tw`flex justify-between w-32 h-32 `}`
const Block1=styled('div')`${tw` w-2 h-2 rounded-full bg-red-600`} animation:${Loading} 1s ease -0.24s infinite`
const Block2=styled('div')`${tw` w-2 h-2 rounded-full bg-blue-600`} animation:${Loading} 1s ease -0.12s infinite`
const Block3=styled('div')`${tw` w-2 h-2 rounded-full bg-green-600`} animation:${Loading} 1s ease 0s infinite`

export {LoaderContainer,MainBox,Block1,Block2,Block3}