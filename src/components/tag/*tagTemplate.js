import styled from 'vue-styled-components';

const props = {
  background: String,
  text: String,
  modifier: String,
};

// eslint-disable-next-line no-unexpected-multiline
const tagTemplate = styled('button', props)
`
  padding: ${props => props.modifier / 2 + "px"};
  margin: ${props => props.modifier + "px"};
  border-radius: ${props => props.modifier / 2 + "px"};
  transition: ${props => ( ( props.modifier / 8 ) / 2 ) + "s"};
  font-weight: bold;
  font-size: ${props => props.modifier * 1.125 + "px"};
  text-transform: uppercase;
  outline: none;
  border-color: ${props => props.background};
  background: ${props => props.background};
  color: ${props => props.text};
  // min-width: ${props => props.modifier * 8 + "px"};
  user-select: none;
  pointer-events: none;
  opacity: 1;


  &:hover {
    user-select: none;
    pointer-events: none;
    cursor: 'default';
  }
`;

export default tagTemplate;