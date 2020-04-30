import tw from 'tailwind.macro'
import styled from '@emotion/styled'



const Login=styled('button')`${tw`bg-blue-500 hover:bg-blue-700 text-white font-medium h-10 py-1 px-4 mt-6 rounded `}`
const Loaderbg=styled('div')`${tw`bg-blue-500 flex justify-center w-full h-10 py-1 px-4 mt-6 rounded`}`
const Wrapper=styled('div')`${tw`flex w-full justify-between items-baseline`}`
const ForgorPassword=styled('a')`${tw`inline-block align-baseline font-bold mt-6 text-sm text-blue-500 hover:text-blue-800`}`
export {Login,Loaderbg,Wrapper,ForgorPassword}