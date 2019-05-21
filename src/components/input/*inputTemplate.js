import styled from 'vue-styled-components';

const props = {
  background: String,
  border: String,
  text: String,
  modifier: String,
};

// eslint-disable-next-line no-unexpected-multiline
const inputTemplate = styled('fieldset', props)
`
  margin: ${props => props.modifier + "px"};
  border-radius: ${props => props.modifier / 2 + "px"};
  transition: ${props => ( ( props.modifier / 8 ) / 2 ) + "s"};
  font-size: ${props => props.modifier * 1.5 + "px"};
  border-color: ${props => props.border};
  background: ${props => props.background};
  color: ${props => props.text};
  width: fit-content;
  font-weight: bold;
  outline: none;
  border-style: solid;

  svg {
    padding-left: ${props =>  props.modifier / 2 + "px"};
    padding-right: ${props =>  props.modifier / 2 + "px"};
    font-size: ${props => props.modifier * 1.5 + "px"};
  }

  input {
    padding-top: ${props => props.modifier / 2 + "px"};
    padding-bottom: ${props => props.modifier / 2 + "px"};
    background: ${props => props.background};
    color: ${props => props.text};
    font-weight: bold;
    height: 100%;
    border-style: none;
    font-size: ${props => props.modifier * 1.5 + "px"};
    outline: none;

    &::placeholder {
      color: ${props => props.border};
    }
  }
  .fa-check {
    color: ${props => props.border};
  }
`;

export default inputTemplate;