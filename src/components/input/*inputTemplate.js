import styled from 'vue-styled-components';

const props = {
  background: String,
  border: String,
  focus: String,
  text: String,
  success: String,
  modifier: String,
  hasErrors: Boolean
};

// eslint-disable-next-line no-unexpected-multiline
const inputTemplate = styled('fieldset', props)
`
  margin: ${props => props.modifier + "px"};
  border-radius: ${props => props.modifier / 2 + "px"};
  transition: ${props => ( props.modifier / 8 ) + "s"};
  font-size: ${props => props.modifier * 1.5 + "px"};
  border-color: ${props => props.text};
  background: ${props => props.background};
  color: ${props => props.text};
  width: auto;
  font-weight: bold;
  outline: none;
  border-style: solid;

  &:active,:focus,:focus-within {
    border-color: ${props => props.focus};
  }

  svg {
    padding-left: ${props =>  props.modifier + "px"};
    padding-right: ${props =>  props.modifier + "px"};
    font-size: ${props => props.modifier * 1.5 + "px"};
    opacity: 0.8;
  }

  input {
    padding-top: ${props => props.modifier + "px"};
    padding-bottom: ${props => props.modifier + "px"};
    background: ${props => props.background};
    color: ${props => props.text};
    font-weight: bold;
    width: ${props => "calc(100% - " + (props.modifier * 7) + "px)"};
    height: 100%;
    border-style: none;
    font-size: ${props => props.modifier * 1.5 + "px"};
    outline: none;

    &::placeholder {
      color: ${props => props.text};
    }
  }
  .fa-check {
    transition: ${props => ( props.modifier / 8 ) + "s"};
    color: ${props => props.success};
    opacity: ${props => props.hasErrors ? 0 : 1}
  }
`;

export default inputTemplate;