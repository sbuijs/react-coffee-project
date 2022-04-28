import styled from 'styled-components'
import { CoffeeCard } from './coffeeCard'

export const StyledCoffee = styled(CoffeeCard)`
.card{
  padding: 5px;

  &__body{
    padding: .5rem;
    border-radius: .2rem;
    color: #333;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    flex-grow: 1;
  }

  &__info{
    padding-top: 10px;
  }

  &__image{
    background-color: gray;
    padding-bottom:100%; 
    overflow:hidden; 
    position: relative;
    display: flex;
    flex-direction: column;
  }
}
  img{
    position: absolute;
    height: 100%;
    align-self: center;
  }
`