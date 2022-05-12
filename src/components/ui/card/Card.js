import React from 'react';
import styles from './card.module.css';

const Card = (props) => {
  const { fname, lname, email, phone, picture, location } = props;
  return (
    <div className={styles.card}>
      <div className={styles.card__title}>
        <h2>{fname} {lname}</h2>
      </div>

      <div className={styles.card__image}>
        {<img src={picture} alt={`${fname} ${lname}`} />}
      </div>
      <div className={styles.card__content}>
        <div className={styles.card__content__info}>
        <p>{location}</p>
        <div className={styles.contact__details}>
          <a href={`mailto:${email}`}>email</a>
            <a href={`tel:${phone}`}>phone</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
