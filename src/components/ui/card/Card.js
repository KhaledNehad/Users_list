import React from 'react';
import { BiPhoneCall, BiEnvelope } from 'react-icons/bi';
import { StyledCard } from './Card.styles';

const Card = (props) => {
  const { fname, lname, email, phone, picture, location, view } = props;
  const colors = ['primary', 'secondary', 'tertiary'];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  console.log(randomColor);
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

export default Card;
