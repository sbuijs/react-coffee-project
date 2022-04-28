import styled from 'styled-components'
import { MethodForm } from './methodForm'

export const StyledMethodForm = styled(MethodForm)`
top: 0;
background-color: white;
height: 100vh;
width: 100vw;
z-index: 1022;
padding-top: 5vh;
position:fixed;
overflow: hidden; 
overscroll-behavior: contain;

input{
    padding: 5px;
}
button{
    ${props => (props.next ? "gray" : "black")};
    width: 100%;
    margin: 2px;
}
`