import React, { useContext } from 'react';
import ContainerWithHeadline from '../ContainerWithHeadline';
import ServiceCard from './ServiceCard';
import { summaryContext } from '../../contexts/summaryContext';
import { mockFlightContext } from '../../contexts/mockContext';


function ServiceSelection() {
  const { MOCK_FLIGHT, MOCK_USER, MOCK_EXTRA_LIST } = useContext(mockFlightContext);

  return (
    <>
      <ContainerWithHeadline headline="Extra Service"
        addClass="dflex-jaround mb125">
        {MOCK_EXTRA_LIST.map((item, idx) => (
          <ServiceCard key={idx} data={item} price={MOCK_FLIGHT.extraPrice} />
        ))}
      </ContainerWithHeadline>
    </>
  );
}

export default ServiceSelection;
