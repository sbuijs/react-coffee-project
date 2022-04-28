//All the logic for creating a button
import styled from 'styled-components'
import { ButtonIcon } from './buttonIcon'

//pass in the Button component into the styled()
export const StyledButtonIcon = styled(ButtonIcon)`
    border: none;
    height: fit-content !important;
    width: fit-content !important;
    background-color: transparent;

&:hover{
        /* transition: all 0.5s ease; */
        transform: rotate(-180deg);
    }
`