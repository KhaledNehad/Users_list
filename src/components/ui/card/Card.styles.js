import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.view === 'grid' ? 'row' : 'column')};
  align-items: ${(props) => (props.view === 'grid' ? 'center' : 'flex-start')};
  justify-content: center;
  width: ${(props) => (props.view === 'grid' ? '30%' : '100%')};
  height: ${(props) => (props.view === 'grid' ? '450px' : '100px')};
  background-color: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-bottom: 2rem;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: ${(props) => (props.view === 'grid' ? '45%' : '100%')};
    height: ${(props) => (props.view === 'grid' ? '250px' : '100px')};
  }

  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => (props.view === 'grid' ? '100%' : '10%')};
    height: ${(props) => (props.view === 'grid' ? '50%' : '100%')};
    background-color: var(
      --${({ randomColor }) => (randomColor && randomColor) || 'primary'}
    );
    border-radius: 20px 20px 60px 0;
    z-index: 1;
  }

  .card-image {
    width: ${(props) => (props.view === 'grid' ? '50%' : '10%')};
    margin-left: ${(props) => (props.view === 'grid' ? '0' : '2rem')};
    z-index: 2;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }

  .card__content {
    background-color: var(
      --${({ randomColor }) => (randomColor && randomColor) || 'primary'}
    );
    width: 100%;
    position: absolute;
    height: 50%;
    bottom: 0;
    border-radius: 0 0 20px 20px;

    .card__content__info {
      background-color: #fff;
      border-radius: 60px 0px 19px 19px;
      height: 100%;
      font-family: 'Lato', sans-serif;
      position: absolute;
      bottom: 0;
      width: 100%;
      display: flex;
      flex-direction: ${(props) => (props.view === 'grid' ? 'column' : 'row')};
      justify-content: ${(props) =>
        props.view === 'grid' ? 'center' : 'space-between'};
      align-items: center;
    }
  }

  .card-icons {
    margin-top: ${(props) => (props.view === 'grid' ? '1rem' : '0')};

    a {
      margin-right: 10px;
      color: #000;
      font-size: 1.5rem;
      text-decoration: none;
      transition: all 0.3s ease-in-out;

      :hover {
        color: #a7b8a8;
      }
    }
  }

  .card__footer {
    display: flex;
    flex-direction: ${(props) => (props.view === 'grid' ? 'column' : 'row')};
    justify-content: ${(props) =>
      props.view === 'grid' ? 'center' : 'space-between'};
    align-items: center;
    width: 100%;
    margin-left: ${(props) => (props.view === 'grid' ? '0' : '15%')};
    margin-right: ${(props) => (props.view === 'grid' ? '0' : '1rem')};
  }

  h2 {
    font-family: 'Lato', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
    z-index: 2;
    position: absolute;
    ${(props) => (props.view === 'grid' ? 'top: 20%' : 'left: 15%')};
  }
`;
