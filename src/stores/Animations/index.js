import {keyframes} from '@emotion/core'

const FadeIn=keyframes`
0% {
    opacity:0
}

100% {
    opacity:1
}
`

const BoxStretch = keyframes`
    0% {
        transform:scale(0.1)
    }

    100% {
        transform:scale(1)
    }
`
const BoxShrink = keyframes`
    0% {
        transform:scale(1)
    }

    100% {
        transform:scale(0)
    }
`

const BoxStetchHorizontally=keyframes`
0% {
    transform:scaleX(0)
}

100% {
    transform:scaleX(1)
}
`

const Loading=
keyframes `
    0% {
      height: 64px;
      width:64px;
    }
    50%, 100% {
      height: 32px;
      width:32px;
    }
  `
export {FadeIn,BoxStretch,BoxShrink,BoxStetchHorizontally,Loading}