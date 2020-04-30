import tw from 'tailwind.macro'
import styled from '@emotion/styled'

const HeaderContainer=styled('div')`${tw`flex justify-between items-center my-4`}`
const ProductsCount=styled('p')`${`hidden sm:flex`}`
const SortPriceBy=styled('label')`${tw`text-center`}`

export {HeaderContainer,ProductsCount,SortPriceBy}