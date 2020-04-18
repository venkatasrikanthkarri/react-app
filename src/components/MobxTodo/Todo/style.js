import styled from '@emotion/styled';
import tw from 'tailwind.macro';
const Container=styled('div')`${tw` w-full h-screen flex flex-col py-8 items-center shadow-xl`};`
const Heading = styled('h1')`${tw`text-red-600 text-6xl `};`
const UserInput = styled('input')`${tw`rounded w-3/12 h-12 text-2xl shadow-2xl`};`
const Todo = styled('input')`${tw`rounded h-12 text-2xl shadow-2xl `} ${props=>((props.strike)?{textDecoration:'line-through',pointerEvents: 'none'}:{textDecoration:'none',pointerEvents: 'auto'})}`;
const TodoContainer = styled('div')`${tw``}`;
const Checkbox = styled('input')`${tw``}`;
// const Todo = styled('input')`${tw`rounded h-12 text-2xl shadow-2xl`}`;
export {Container,Heading,UserInput,Todo,TodoContainer,Checkbox};