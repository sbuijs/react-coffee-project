import styled from 'styled-components'
import { Shimmer } from './Shimmer';

export const StyledShimmer = styled(Shimmer)`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
animation: loading 2s infinite;
.shimmer{
    width: 50%;
    height: 100%;
    background-color: rgba(255,255,255,0.2);
    transform: skewX(-20deg);
}

@keyframes loading {
    0%{
        transform:translateX(-150%)
    }
    100%{
        transform:translateX(150%)
    }
    
}
`

