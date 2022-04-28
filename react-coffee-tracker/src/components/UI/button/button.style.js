//All the logic for creating a button
import styled from 'styled-components'
import { Button } from './button'

//pass in the Button component into the styled()
export const StyledButton = styled(Button)`

    background-color:
    ${props => (props.primary ? "black" : "orangeRed")};
    background-color:
    ${props => (props.secondary ? "#7e7e7e" : "blue")};
    color:
    ${props => (props.previous ? "black" : "white")};
    background-color:
    ${props => (props.previous ? "#D3D3D3" : "black")};
    font-size: 14px;
    border: 0;
    border-radius: 2px;
    height: fit-content;
    padding: 8px;

    &:hover{
        background-color:
            ${props => (props.previous ? "#C5C7C4" : "#313639")};
        & label{
            color: pink;
        }
    }
`

// export const ButtonLabel = styled.label`

// `