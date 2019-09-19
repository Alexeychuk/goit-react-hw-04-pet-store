import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pet.module.css';

const Pet = ({
  pet: { name, image, age, gender, color, breed, description },
  handleReturn,
}) => {
  return (
    <div className={styles.PetWrapper}>
      <button
        type="button"
        onClick={handleReturn}
        className={styles.returnButton}
      >
        Return
      </button>
      <h3>All about {name}</h3>
      <div className={styles.stats}>
        <div className={styles.statsItem}>
          <img src={image} alt="pet" />
        </div>

        <div className={styles.statsItem}>
          <p>Age: {age}</p>
          <p>Gender: {gender}</p>
          <p>Color: {color}</p>
          <p>Breed: {breed}</p>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
Pet.propTypes = {
  pet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  handleReturn: PropTypes.func.isRequired,
};

Pet.defaultProps = {
  // bla: 'test',
};

export default Pet;
