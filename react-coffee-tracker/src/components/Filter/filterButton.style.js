//All the logic for creating a button
import styled from 'styled-components'
import { FilterButton } from './filterButton'

//pass in the Button component into the styled()
export const StyledFilterButton = styled(FilterButton)`

    background-color: white;
    border: 1px solid black;
    border-radius: 2px;
    margin-right: 8px;
    padding: 4px;
    padding-left: 6px;
    padding-right: 6px;
    font-size: 14px;


    &:hover{
        background-color: #C5C7C4;
        border-color: #C5C7C4;
        color: white;
            & label{
            color: pink;
        }
    }
    position: relative;
    span{
        margin-left: 6px;
        svg{
            fill: currentColor;
        }
        
    }
    &.active{
        background-color: #7e7e7e;
        border: 1px solid #7e7e7e;
        color: white;
        &.arrowFlipped{
            span{ 
                svg{
                    transform: rotate(180deg);
                    fill: currentColor;
                }
            }
        }
    }
    
`