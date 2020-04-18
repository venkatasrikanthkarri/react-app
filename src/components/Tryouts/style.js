import styled from '@emotion/styled';
import tw from 'tailwind.macro';

let Button = styled('button')`${tw` bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`};`
let Input = styled('input')`${tw`w-32 text-center`};`
let H1 = styled('h1')`${tw`text-3xl font-bold m-8`};`
let Div = styled('div')`${tw` flex w-full justify-center`};`
let Container = styled('div')`${tw`  bg-green-200 w-full h-screen flex flex-col justify-center items-center`};`

export {Button,Div,Container,Input,H1};