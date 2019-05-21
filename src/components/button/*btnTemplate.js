import styled from 'vue-styled-components';

const props = {
  background: String,
  text: String,
  modifier: String,
  disabled: Boolean
};

// eslint-disable-next-line no-unexpected-multiline
const btnTemplate = styled('button', props)
`
  padding: ${props => props.modifier + "px"};
  margin: ${props => props.modifier + "px"};
  border-radius: ${props => props.modifier / 2 + "px"};
  border-width: ${props => props.modifier / 4 + "px"};
  transition: ${props => ( ( props.modifier / 8 ) / 2 ) + "s"};
  font-weight: bold;
  font-size: ${props => props.modifier * 1.5 + "px"};
  text-transform: capitalize;
  outline: none;
  border-color: ${props => props.background};
  background: ${props => props.background};
  color: ${props => props.text};
  user-select: none;
  pointer-events: ${props => props.disabled ? 'none' : 'all'};
  opacity: ${props => props.disabled ? 0.25 : 1};

  &:hover {
    user-select: none;
    background: ${props => props.disabled ? props.background : props.text};
    color: ${props => props.disabled ? props.text : props.background};
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
  }
`;

export default btnTemplate;