import styled from 'vue-styled-components';

const props = {
  background: String,
  toggle: String,
  active: String,
  modifier: String,
};

// eslint-disable-next-line no-unexpected-multiline
const switchTemplate = styled('label', props)
`
  margin: ${props => props.modifier + "px"};
  position: relative;
  display: inline-block;
  width: ${props => props.modifier * 8 + "px"};
  height: ${props => props.modifier * 4 + "px"};

  input {
    opacity: 0;
    width: 0;
    height: 0;
    display: none;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.background};
    transition: ${props => ( ( props.modifier / 8 ) / 2 ) + "s"};
    border-radius: ${props => props.modifier * 4 + "px"};
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: ${props => props.modifier * 3 + "px"};
    width: ${props => props.modifier * 3 + "px"};
    left: ${props => props.modifier / 2 + "px"};
    bottom: ${props => props.modifier / 2 + "px"};
    background-color: white;
    transition: ${props => ( ( props.modifier / 8 ) / 2 ) + "s"};
    border-radius: 50%;
  }
  
  input:checked + .slider {
    background-color: ${props => props.active};
  }
  
  input:checked + .slider:before {
    transform: translateX(calc(8px * 4));
    transform: ${props => 'translateX(' + props.modifier * 4 + 'px)'};
  }
`;

export default switchTemplate;