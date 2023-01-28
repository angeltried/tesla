import React from 'react';
import styled from 'styled-components';
import Section from './Section'

function Home() {
  return (
    <Container>
       <Section
         title="Model 3"
         description="Leasing starting at $399/mo"
         backgroundImg="model-3.jpg"
         leftBtnText="Custom order"
         rightBtnText="Demo Drive"
      />
      <Section
       title="Model Y"
       description=""
       backgroundImg="model-y.jpg"
       leftBtnText="Custom order"
       rightBtnText="Demo Drive"
       />
         <Section
        title="Model S"
        description=""
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Demo Drive"
      />
      <Section
         title="Model X"
         description=""
         backgroundImg="model-x.jpg"
         leftBtnText="Custom order"
         rightBtnText="Demo Drive"
      />
      <Section
         title="Lowest Cost Solar Panels In America"
         description="Money-back guarantee"
         backgroundImg="solar-panel.jpg"
         leftBtnText="Order now"
         rightBtnText="Learn more"
      />
      <Section
         title="Solar for New Roofs"
         description="Solar Roof Cost Less Than A New Roof Plus Solar Panels"
         backgroundImg="solar-roof.jpg"
         leftBtnText="Order now"
         rightBtnText="Learn more"
      />
        <Section
         title="Accessories"
         description=""
         backgroundImg="accessories.jpg"
         leftBtnText="Shop now"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`