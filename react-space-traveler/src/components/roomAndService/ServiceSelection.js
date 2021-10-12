import React, { useContext } from 'react';
import ContainerWithHeadline from '../ContainerWithHeadline';
import ServiceCard from './ServiceCard';
// import { mockFlightContext } from '../../contexts/mockContext';
import { serviceContext } from '../../contexts/serviceContext';


function ServiceSelection() {
  const { serviceList } = useContext(serviceContext);

  return (
    <>
      <ContainerWithHeadline headline="Extra Service"
        addClass="dflex-jaround mb125">
        {serviceList.filter(item => item.serviceType === 'extra')
          .map(item => (
            <ServiceCard key={item.id} data={item} />
          ))}
      </ContainerWithHeadline>
    </>
  );
}

export default ServiceSelection;
