import styled from 'vue-styled-components';

const props = {
  background: String,
  text: String
};

// eslint-disable-next-line no-unexpected-multiline
const contentTemplate = styled('div', props)
`
  background: ${props => props.background};
  color: ${props => props.text};
  padding: 0.5rem;
  border-radius: 0.25rem;
`;

export default contentTemplate;