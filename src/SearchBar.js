import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <Input type="text" placeholder="Medicine" />
      <Button>Search</Button>
    </SearchBarContainer>
  );
};

export default SearchBar;