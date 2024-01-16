import styled from 'styled-components';

const headingStyle = {
  primary: { 'font-size': '30px' },
  secondary: { 'font-size': '24px', 'margin-top': '40px' },
  third: { 'font-size': '20px' },
};

export const Heading = styled(props => props.as || 'h2')`
  ${props => headingStyle[props.styletype]}
`;
