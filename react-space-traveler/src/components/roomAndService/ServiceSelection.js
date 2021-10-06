import React from 'react';
import ContainerWithHeadline from '../ContainerWithHeadline';
import ServiceCard from './ServiceCard';
import { summaryContext } from '../../contexts/summaryContext';


function ServiceSelection() {
  return (
    <>
      <ContainerWithHeadline headline="Extra Service"
        addClass="dflex-jaround mb125"
      >
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />

      </ContainerWithHeadline>
    </>
  );
}

export default ServiceSelection;
