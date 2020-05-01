import tw from 'tailwind.macro'
import styled from '@emotion/styled'

const Cart= styled('div')`${tw`flex justify-between relative fixed bg-gray-800 top-0 right-0  h-full w-0 `} width:${props=>props.width}px; transition:${0.5}s`
const Close=styled('button')`${tw`self-start p-3 text-white bg-gray-800 focus:outline-none active:outline-none leading-none`}`
const CartContainer=styled('div')`${tw`fixed bg-gray-800 top-0 right-0 z-10 p-2 `}`
const CartCount=styled('div')`${tw`text-orange-500 fixed top-0 mx-6 my-4 cursor-pointer	`}`
const CartWrapper=styled('div')`${tw`flex flex-col m-3 h-full items-center w-full`}`
const CheckOut= styled('button')`${tw`h-10 w-11/12 p-2 text-white bg-black opacity-50 text-center cursor-pointer focus:outline-none active:outline-none leading-none rounded`}`
const CartTopBar=styled('div')`${tw`flex items-center mb-5`}`
const CartTitle=styled('div')`${tw`font-medium text-white`}`
const ProductsLists=styled('div')`${tw`flex-1 flex flex-col items-center text-white w-full`}`
const CheckOutWrapper=styled('div')`${tw`absolute inset-x-0 h-1/6 bottom-0  flex flex-col items-center w-full `}`
const AmountScreen=styled('div')`${tw`flex justify-between bg-red-900 w-11/12 mb-1`}`
const Subtotal=styled('div')`${tw`font-normal text-white`}`
const Amount=styled('div')`${tw`text-orange-500`}`



export {CartContainer,Cart,Close,CheckOut,CartCount,CartWrapper,
    CartTopBar,CartTitle,ProductsLists,CheckOutWrapper,AmountScreen,Subtotal,Amount}