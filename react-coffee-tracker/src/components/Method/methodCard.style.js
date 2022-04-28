import styled from 'styled-components'
import { MethodCard } from './methodCard'

export const StyledMethod = styled(MethodCard)`
border: none;
border-radius: 0;


.card__body{
    padding: 16px;
    background-color: #F4F4F4;
    font-size: 14px;
    .card__item{    
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .card__item:not(:last-child){    
        border-bottom: 1px solid black;
    }
    .data{
        span{
            margin-left: 6px;
        }
    }
}
`