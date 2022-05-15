import styled from 'styled-components';

export const StyledCardList = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.view === 'grid' ? 'row' : 'column')};
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const StyledErrorMessage = styled.p`
  color: ${(props) => (props.type === 'error' ? '#842029' : '#664d03')};
  background-color: ${(props) =>
    props.type === 'error' ? '#f8d7da' : '#fff3cd'};
  border: 1px solid
  ${(props) => (props.type === 'error' ? '#f5c2c7' : '#ffecb5')};
  text-align: center;
  margin: 1rem 0;
`;
