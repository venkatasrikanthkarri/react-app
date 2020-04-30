import tw from 'tailwind.macro'
import styled from '@emotion/styled'

const ProductsPageWrapper = styled('div')`${tw`m-6 relative`} max-width:${1200}px; margin-right:auto;margin-right `
// const Cart=styled('div')`${tw`fixed top-0 right-0 z-10 `}`
const SignOut=styled('div')`${tw`border border-gray-800 p-1 cursor-pointer rounded text-xs`} width:${56.3375}px`
const ProductPageContainer=styled('div')`${tw`flex`}`
const HeaderProducts= styled('div')`${tw`flex flex-col flex-1`}`

export {SignOut,ProductPageContainer,ProductsPageWrapper,HeaderProducts}