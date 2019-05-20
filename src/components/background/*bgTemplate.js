import styled from 'vue-styled-components';

const props = {
  background: String,
  text: String
};

// eslint-disable-next-line no-unexpected-multiline
const bgTemplate = styled('div', props)
`
  background: ${props => props.background};
  color: ${props => props.text};
`;

export default bgTemplate;