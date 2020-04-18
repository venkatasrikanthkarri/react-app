import tw from 'tailwind.macro'
import styled from '@emotion/styled'

const StyledGameResetContainer=styled('div')`${tw`flex flex-col h-screen justify-center items-center`}  background:${props=>props.bg}; color:${props=>props.color};`
const StyledThemeBar=styled('div')`${tw` w-1/4 m-4 flex justify-between items-center`}`
const ChangeTheme=styled('button')`${tw` font-semibold py-2 px-4 shadow-xl border border-gray-400`}`
const Level =styled('div')`${tw`font-medium`}`
const TopLevel =styled('div')`${tw` flex justify-center font-medium text-3xl `}`
const FinalLevel=styled('div')`${tw` flex justify-center mt-3 font-medium text-3xl`}`
const Congrats=styled('div')`${tw`font-medium text-green-400 text-2xl`}`
const PlayAgain=styled('button')`${tw`mt-10 bg-blue-500 hover:bg-blue-400 text-white font-bold w-32 h-12 border-b-4 border-blue-700 hover:border-blue-500 rounded`}`



export {StyledGameResetContainer,StyledThemeBar,ChangeTheme,Level,TopLevel,FinalLevel,Congrats,PlayAgain}