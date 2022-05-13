import styled from 'styled-components';

export const StyledCardList = styled.div`
    display: flex;
    flex-direction: ${props => props.view === 'grid' ? 'row' : 'column'};
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
`