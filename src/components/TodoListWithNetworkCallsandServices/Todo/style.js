import tw from 'tailwind.macro'
import styled from '@emotion/styled'

const Checkbox=styled('input')`${tw``} `
const Text=styled('input')`${tw``} text-decoration:${props=>props.strike}`
const Close=styled('button')`${tw``} background:${props=>props.bg};color:${props=>props.color}`


export {Checkbox,Text,Close}