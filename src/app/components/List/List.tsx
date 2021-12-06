import React from 'react';
import { Link, generatePath } from 'react-router-dom';

import { Resource } from '../../store/resourcesSlice';

import styles from './List.module.scss';

interface IListProps {
  resources: Resource[];
}

export const List: React.FC<IListProps> = (props) => {
  const { resources } = props;
  return (
    <div className={styles.listWrapper}>
      <div className={styles.listHeader}>
        <div className={styles.leftColumn}>
          <p className={styles.headerText}>name</p>
        </div>
        <div className={styles.rightColumn}>
          <p className={styles.headerText}>description</p>
        </div>
      </div>
      {resources.map((resource) => {
        return (
          <Link
            to={generatePath('company/:companyId', { companyId: resource.id })}
            className={styles.resourceWrapper}
            state={{ company: resource }}
            key={resource.id}
          >
            <div className={styles.leftColumn}>
              <p className={styles.text} title={resource.name}>
                {!!resource.name ? resource.name : 'No Name'}
              </p>
            </div>
            <div className={styles.rightColumn}>
              <p className={styles.text} title={resource.description}>
                {!!resource.description
                  ? resource.description
                  : 'No Description'}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
