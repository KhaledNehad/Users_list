import styled from 'styled-components';

export const Container = styled.div`
  width: 900px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.large}) {
    width: 90%;
  }
`;


export const PageTitle = styled.h1`
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 3.5rem;

  @media (max-width: ${({ theme }) => theme.mobileS}) {
    font-size: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 2.3rem;
  }

  @media (max-width: ${({ theme }) => theme.large}) {
    font-size: 3rem;
  }
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 5fr 21fr;
  justify-items: end;
  align-items: end;
  margin: 20px 0;
`;

export const SearchInput = styled.input.attrs({type: 'search'})`
  border: 0;
  border-bottom: 2px solid var(--black);
  outline: 0;
  background: transparent
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat 5px center;
  margin: 0;
  padding: 9px 4px 2px 25px;
  font-size: 14px;
  color: inherit;
  border-radius: inherit;
  transition: all 0.2s;

    &:focus {
    border-bottom: 2px solid var(--primary);
    left: 0;
    }

`

