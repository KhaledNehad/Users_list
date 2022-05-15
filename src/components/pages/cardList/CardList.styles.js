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

export const StyledButton = styled.button`
  background-color: var(--primary);
  color: var(--dark-text);
  border: none;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 1rem auto;
  float: right;
  transition: all 0.2s ease-in-out;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin: 0 auto;
    font-size: 0.7rem;
    padding: 0.7rem;
    border-radius: 0.3rem;
  }

  &:hover {
    background-color: var(--secondary);
    color: var(--black);
  }
`;
