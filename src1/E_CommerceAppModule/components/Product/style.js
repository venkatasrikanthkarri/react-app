import tw from 'tailwind.macro'
import styled from '@emotion/styled'

const ProductContainer=styled('div')`${tw`flex flex-col hover:border-gray-300 border border-transparent border-solid md:w-46 lg:w-30 xl:w-48 m-2 items-center p-2 relative`} height:${420}px`
const ProductImage=styled('img')`${tw`w-4/5 object-contain mb-2`}`
const FreeShippingTag=styled('p')`${tw`absolute top-10 right-0 bg-black p-1 text-xs text-white`}`
const ProductTitle=styled('p')`${tw`h-45px text-base text-center`}height:${45}px`
const ProductDivision=styled('div')`${tw`w-4 border-t-2 rounded border-yellow-600 mt-2px mb-4`}`
const ProductPrice=styled('p')`${tw``}`
const Rupees=styled('span')`${tw`text-xs mr-1 `}`
const Digits=styled('span')`${tw`text-xl`}`
const Decimals=styled('span')`${tw`text-xs`}`
const Installments=styled('span')`${tw`text-sm text-gray-700 mb-4 h-5`}`
const AddToCart=styled('button')`${tw`w-full py-3 text-white bg-black text-center rounded text-sm focus:outline-none`}`

export {ProductContainer,FreeShippingTag,ProductImage,ProductTitle,ProductDivision,ProductPrice,Rupees,Digits,Decimals,Installments,AddToCart}
