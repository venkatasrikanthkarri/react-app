import tw from 'tailwind.macro'
import styled from '@emotion/styled'

const FilterContainer=styled('div')`${tw`w-1/4 px-4`}`
const Sizes=styled('p')`${tw`my-4 font-bold`}`
const Size=styled('button')`${tw`rounded-full h-10 w-10 m-1 focus:outline-none bg-gray-200  text-black`} background:${props=>props.bg}; color:${props=>props.color}`
// const SizeS=styled('button')`${tw`rounded-full h-10 w-10 m-1 focus:outline-none bg-gray-200  text-black`}`
// const SizeM=styled('button')`${tw`rounded-full h-10 w-10 m-1 focus:outline-none bg-gray-200  text-black`}`
// const SizeL=styled('button')`${tw`rounded-full h-10 w-10 m-1 focus:outline-none bg-gray-200  text-black`}`
// const SizeXL=styled('button')`${tw`rounded-full h-10 w-10 m-1 focus:outline-none bg-gray-200  text-black`}`
// const SizeXS=styled('button')`${tw`rounded-full h-10 w-10 m-1 focus:outline-none bg-gray-200  text-black`}`

export {FilterContainer,Sizes,Size}