import React from 'react'
import styled from "styled-components"

const Label = ({name}) => {
 return (
  <MyLabel htmlFor={name}>{name} <span>*</span></MyLabel>
 )
}

const MyLabel = styled.label`
 span{
  color: #F4511E;
  font-weight: bolder;
 }
`

export default Label