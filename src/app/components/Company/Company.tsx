import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Resource } from '../../store/resourcesSlice';

import styles from './Company.module.scss';

interface propState {
  company: Resource;
}

const renderCompanyDetails = (location: any) => {
  const { company } = location.state as propState;
  return (
    <div className={styles.companyWrapper}>
      {!!company.image ? (
        <img src={company.image} className={styles.image} alt="" />
      ) : (
        <div className={styles.imagePlaceholder} />
      )}
      <div className={styles.companyDetails}>
        <div className={styles.column}>
          <h3 className={styles.heading}>Address</h3>
          <div className={styles.smallWrapper}>
            <p
              className={styles.text}
            >{`${company.address.number} ${company.address.street}`}</p>
            <p
              className={styles.text}
            >{`${company.address.city}, ${company.address.country} ${company.address.zip}`}</p>
          </div>
        </div>
        <div className={styles.column}>
          <h3 className={styles.heading}>Contact</h3>
          <div className={styles.smallWrapper}>
            <p className={styles.text}>{company.phone}</p>
            <p className={styles.text}>{company.email}</p>
          </div>
        </div>
        <div className={styles.nearbyPlaces}>
          <h3 className={styles.heading}>Nearby Places</h3>
          <div className={styles.place}>
            <p className={styles.text}>Caffee Nero</p>
            <p className={styles.text}>
              1st Floor, c/o Morleys, 472-488 Brixton Rd, London SW9 8EH
            </p>
          </div>
          <div className={styles.place}>
            <p className={styles.text}>Caffee Nero</p>
            <p className={styles.text}>
              1st Floor, c/o Morleys, 472-488 Brixton Rd, London SW9 8EH
            </p>
          </div>
          <div className={styles.place}>
            <p className={styles.text}>Caffee Nero</p>
            <p className={styles.text}>
              1st Floor, c/o Morleys, 472-488 Brixton Rd, London SW9 8EH
            </p>
          </div>
          <div className={styles.place}>
            <p className={styles.text}>Caffee Nero</p>
            <p className={styles.text}>
              1st Floor, c/o Morleys, 472-488 Brixton Rd, London SW9 8EH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Company: React.FC = () => {
  const location = useLocation();

  return !location.state ? <Navigate to="/" /> : renderCompanyDetails(location);
};
