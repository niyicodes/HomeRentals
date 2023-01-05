import React from 'react'
import styled from 'styled-components'

const PropCard = ({name, type, image,price}) => {
 return (
  <PropertiesCard>
   <img src="" alt="" />
   <div className="propdetails">
    <p className="prop-name">2578 Folsom street, san francisco, CA, 94110</p>
    <small className="prop-type">Private Room</small>
    <h4 className="prop-price">$1200/month</h4>
   </div>
   <div className="prop-features"></div>
  </PropertiesCard>
 )
}

const PropertiesCard = styled.div`
 
`

export default PropCard