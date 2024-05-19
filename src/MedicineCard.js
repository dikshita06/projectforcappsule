import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0;
`;

const Detail = styled.p`
  margin: 5px 0;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5em;
  font-weight: bold;
`;

const MedicineCard = ({ form, strength, packaging, name, price, availability }) => {
  return (
    <Card>
      <Info>
        <Detail>Form: {form}</Detail>
        <Detail>Strength: {strength}</Detail>
        <Detail>Packaging: {packaging}</Detail>
        <Title>{name}</Title>
        <Detail>{form} | {strength} | {packaging}</Detail>
      </Info>
      <Price>{ 'No stores selling this product near you'}</Price>
    </Card>
  );
};

export default MedicineCard;