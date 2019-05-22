import styled from 'vue-styled-components';
import StyledInput from "./StyledInput"

// Create an <StyledInput> component that'll render an <input> tag with some styles
const StyledFieldset = styled.fieldset `
  color: black;
  font-size: 1rem;
  height:100%;
  width: fit-content;
  border-style: solid;
  border-color: black;
  border-width: 0.125rem;
  border-radius: 0.25rem;
  outline: none;
`;

export default StyledFieldset