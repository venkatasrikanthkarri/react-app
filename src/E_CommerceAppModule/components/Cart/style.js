import tw from 'tailwind.macro'
import styled from '@emotion/styled'

const ItemContainer=styled('div')`${tw`flex flex-col m-3`}`
const ItemWrapper=styled('div')`${tw`flex justify-between items-center`}`
const Image=styled('img')`${tw`w-12 object-contain`}`
const Details=styled('div')`${tw`ml-2 flex-1`}`
const Title=styled('div')`${tw`text-white text-sm`}`
const Description=styled('div')`${tw`text-gray-500 text-xs`}`
const Quantitiy=styled('div')`${tw`text-gray-500 text-xs`}`
const CloseAndPrice=styled('div')`${tw`flex flex-col h-full `}`
const Price=styled('span')`${tw`text-yellow-600 ml-auto self-center `}`
const Close=styled('span')`${tw`h-10 p-3 cursor-pointer self-start text-white bg-gray-800 focus:outline-none active:outline-none leading-none`}`

export {ItemContainer,ItemWrapper,Image,Details,Title,Description,Quantitiy,CloseAndPrice,Price,Close}