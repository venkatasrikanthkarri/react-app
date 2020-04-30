import tw from 'tailwind.macro'
import styled from '@emotion/styled'

const Checkbox=styled('input')`${tw``} `
const Text=styled('input')`${tw``} text-decoration:${props=>props.strike}`
const Close=styled('button')`${tw``}`


export {Checkbox,Text,Close}