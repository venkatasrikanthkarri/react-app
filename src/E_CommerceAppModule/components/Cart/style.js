import tw from 'tailwind.macro'
import styled from '@emotion/styled'

const ItemContainer=styled('div')`${tw` flex flex-col m-2`}`
const Line=styled('div')`${tw`w-full mb-2`}border-top:1px solid white`
const ItemWrapper=styled('div')`${tw`flex  justify-between items-center`}`
const Image=styled('img')`${tw`w-12 object-contain`}`
const Details=styled('div')`${tw`flex-1 ml-1  h-16`}`
const Title=styled('div')`${tw`text-white text-sm`}`
const Description=styled('div')`${tw`text-gray-500 flex flex-col  text-xs`}`
const Quantitiy=styled('div')`${tw`text-gray-500 text-xs`}`
const CloseAndPrice=styled('div')`${tw`flex flex-col justify-between h-16`}`
const Price=styled('div')`${tw`text-yellow-600 text-sm  self-end ml-auto`}`
const Close=styled('div')`${tw`cursor-pointer align-bottom text-white self-end focus:outline-none 
active:outline-none leading-none`}`

export {ItemContainer,Line,ItemWrapper,Image,Details,Title,Description,Quantitiy,CloseAndPrice,Price,Close}