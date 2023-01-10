import React from 'react'
import styled from "styled-components"


const TestiCard = () => {
 return (
  <div>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo quo molestias cumque, ipsa doloribus similique maxime possimus veritatis quos.</p>
   <div className="person">
    <img src="/img/person.jpg" alt="person" />
    <div className="person-details">
     <h5>Wilson Jade</h5>
     <small>property owner</small>
    </div>
   </div>
  </div>
 )
}

const TestimonialCard = styled.div`
 display: flex;
 flex-direction: column;
 gap: 1rem;

 p{
  font-size: 1.2rem;
  line-height: 1.2;
  text-align: justify;
  padding-bottom: 0.5rem;
 }

 .person{
  display: flex;
  flex-direction: row;
  gap: 1rem;

  img{
   width: 2.5rem;
   border: 2px solid #F4511E;
  }

  h5{
   color: #F4511E;
   
  }
 }
`
export default TestiCard