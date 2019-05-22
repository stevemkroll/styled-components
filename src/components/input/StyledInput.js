import styled from 'vue-styled-components';

// Create an <StyledInput> component that'll render an <input> tag with some styles
const StyledInput = styled.input `
  font-size: 1rem;
  color: black;
  border-style: none;
  height: 1rem;
  border-color: #999999;
  font-weight: bold;
  outline: none;
  padding: 0.5rem;
`;

export default StyledInput