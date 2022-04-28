import styled from 'styled-components'
import { SkeletonElement } from "./skeletonElements";

export const StyledSkeletonElement = styled(SkeletonElement)`

&.title{
background-color: #ddd;
width: 80%;
height: 20px;
margin-bottom: 65px;
}
&.item{
background-color: #ddd;
width: 100%;
  height: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 10px;
  margin-bottom: 10px;

}
`

