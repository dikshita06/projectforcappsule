import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import MedicineCard from './MedicineCard';

const AppContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  min-height: 100vh;
`;

const medicines = [
  { form: 'Tablet', strength: '100 mg', packaging: '5 strips', name: 'Salt A', price: 80, availability: true },
  { form: 'Tablet', strength: '100 mg', packaging: '5 strips', name: 'Salt B', price: 80, availability: false },
  { form: 'Capsule', strength: '500 mg', packaging: '30 strips', name: 'Salt C', price: 80, availability: false },
  { form: 'Tablet', strength: '100 mg', packaging: '5 strips', name: 'Salt D', price: 80, availability: true },
];

const App = () => {
  return (
    <AppContainer>
      <SearchBar />
      {medicines.map((medicine, index) => (
        <MedicineCard key={index} {...medicine} />
      ))}
    </AppContainer>
  );
};

export default App;