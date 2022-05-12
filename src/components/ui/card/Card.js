import React from 'react';
import styles from './card.module.css';
import { BiPhoneCall, BiEnvelope } from 'react-icons/bi';

const Card = (props) => {
  const { fname, lname, email, phone, picture, location, view } = props;
  return (
    <div className={view === 'grid' ? styles.card : 'list'}>
      <div className={styles.card__title}>
        <h2>
          {fname} {lname}
        </h2>
      </div>

      <div className={styles.card__image}>
        {<img src={picture} alt={`${fname} ${lname}`} />}
      </div>
      <div className={styles.card__content}>
        <div className={styles.card__content__info}>
          <p>{location}</p>
          <div className={styles.contact__details}>
            <a href={`mailto:${email}`}>
              <BiEnvelope />
            </a>

            <a href={`tel:${phone}`}>
              <BiPhoneCall />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
