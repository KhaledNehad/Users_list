import React from 'react';
import { BiPhoneCall, BiEnvelope } from 'react-icons/bi';
import { StyledCard } from './Card.styles';
import propTypes from 'prop-types';

const Card = (props) => {
  const { fname, lname, email, phone, picture, location, view } = props;
  const colors = ['primary', 'secondary', 'tertiary'];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <>
      <StyledCard view={view} randomColor={randomColor}>
        <div className='card-image'>
          <img src={picture} alt={`${fname} ${lname}`} />
        </div>
        <h2>{`${fname} ${lname}`}</h2>
        <div className='card__content'>
          <div className='card__content__info'>
            <div className='card__footer'>
              <p>{location}</p>
              <div className='card-icons'>
                <a href={`tel:${phone}`}>
                  <BiPhoneCall />
                </a>
                <a href={`mailto:${email}`}>
                  <BiEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>
      </StyledCard>
    </>
  );
};

Card.propTypes = {
  fname: propTypes.string.isRequired,
  lname: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  phone: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  view: propTypes.string,
}

Card.defaultProps = {
  view: 'grid',
}

export default Card;
