import styled from 'styled-components'
import { Navbar } from './navbar'

export const StyledNavbar = styled(Navbar)`
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

div{
margin-top:.1rem;
font-size: 16px;
font-weight: 500;
}

span{
    font-weight: 200;
    margin-left: .3rem;
}
.navbar{
    background-color: yellow;
    border: 1px solid green;
    margin-bottom: 5rem;
    font-size: 14px;
    color: black;

}

`