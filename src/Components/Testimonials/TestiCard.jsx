import React from 'react'
import styled from "styled-components"


const TestiCard = () => {
 return (
  <TestimonialCard>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.</p>
   <div className="person">
    <img src="/img/person.jpg" alt="person" />
    <div className="person-details">
     <h5>Wilson Jade</h5>
     <small>property owner</small>
    </div>
   </div>
  </TestimonialCard>
 )
}

const TestimonialCard = styled.div`
 display: flex;
 flex-direction: column;
 gap: 1rem;
 font-family: "Inter", sans-serif;
 color: black;
 margin: 3rem 0 3rem 5rem;
 p{
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: justify;
  padding-bottom: 0.5rem;

 }

 .person{
  display: flex;
  flex-direction: row;
  gap: 1rem;

  img{
   width: 3rem;
   border: 2px solid #F4511E;
   border-radius: 50%;
  }

  h5{
   color: #F4511E;
   font-weight: 700;
   font-size: 1.3rem;
  }
  small{
   font-weight: 400;
   font-size: 1rem;
  }
 }
 @media (min-width: 280px) and (max-width: 568px){
  margin:1rem;

  p{
   line-height: 1.3;
  }
 }
`
export default TestiCard