import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'

const Properties = () => {
 return (
  <Prop>
   <div className="top">
    <h3><span>List o</span>f Properties</h3>
    <Button name='View all property'/>
   </div>
   <main className='properties'>
    {
     
    }
   </main>
  </Prop>
 )
}
const Prop = styled.section`
 background-color: #F5F5F5;
 .top{
  margin: 5rem;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  text-transform: capitalize;
  h3{
   font-family: "Inter", sans-serif;
   font-size: 2rem;
   color: black;
   span{
    border-bottom: 5px solid #F4511E;
    padding-bottom: 1.5px;
   }
  }
  button{
  background-color: #F4511E;
  font-size: 1.2rem;
  text-transform: capitalize;
  &:after{
   background-color: #23A6F0;
  }
 }
 }
 .properties{
  display: grid;
  grid-template-columns:repeat(3, 100px) ;
  grid-column-gap: 1rem;
  grid-row-gap: 1.5rem;
 }
`
export default Properties