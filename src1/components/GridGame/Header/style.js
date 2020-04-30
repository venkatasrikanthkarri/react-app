import tw from 'tailwind.macro'
import styled from '@emotion/styled'

const StyledHeader=styled('div')`${tw`w-1/4 flex flex-col items-center`}`
const StyledThemeBar=styled('div')`${tw` w-full m-3 flex justify-between items-center`}`
const ChangeTheme=styled('button')`${tw` font-semibold py-2 px-4 border border-gray-400`}`
const Level =styled('div')`${tw``}`
const TopLevel =styled('div')`${tw``}`
export {StyledHeader,StyledThemeBar,ChangeTheme,Level,TopLevel}