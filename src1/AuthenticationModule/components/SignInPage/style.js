import tw from 'tailwind.macro'
import styled from '@emotion/styled'


const Container=styled('div')`${tw`flex h-screen justify-center items-center`}`
const SignInFormWrapper=styled('div')`${tw`w-full max-w-xs`}`
const SignInForm=styled('form')`${tw`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`}`
const Title=styled('div')`${tw`text-center font-bold m-0`}`
const UserName=styled('input')`${tw`shadow appearance-none border rounded mt-6 w-full py-2 px-3 text-gray-700 leading-tight `} ${`focus:outline-none`};${`focus:shadow-outline`}`
const Password=styled('input')`${tw`shadow appearance-none border rounded mt-6 w-full py-2 px-3 text-gray-700 leading-tight `} ${`focus:outline-none`};${`focus:shadow-outline`}`
const LoginWrapper=styled('div')`${tw`flex justify-between items-baseline`}`

export {Container,SignInFormWrapper,Title,SignInForm,UserName,Password,LoginWrapper}