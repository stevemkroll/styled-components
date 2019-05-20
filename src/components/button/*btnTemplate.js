import styled from 'vue-styled-components';

const props = {
  background: String,
  text: String,
  disabled: Boolean
};

// eslint-disable-next-line no-unexpected-multiline
const btnTemplate = styled('button', props)
`
  padding: 8px;
  margin: 8px;
  border-radius: 4px;
  border-width: 2px;
  transition: 0.5s;
  font-weight: bold;
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