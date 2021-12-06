import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { AppState, fetchResources } from './store/resourcesSlice';
import { useAppDispatch, useAppSelector } from './store/hooks';

import { Header } from './components/Header/Header';
import { List } from './components/List/List';
import { Company } from './components/Company/Company';

import styles from './App.module.scss';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state: AppState) => state.loading);
  const resources = useAppSelector((state: AppState) => state.resources);

  useEffect(() => {
    dispatch(fetchResources());
    //eslint-disable-next-line
  }, []);

  return (
    <div className={styles.appWrapper}>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<List resources={resources} />}></Route>
            <Route path="/company/:companyId" element={<Company />}></Route>
            <Route
              path="*"
              element={
                <div>
                  Sorry! No such pages has been found.{' '}
                  <Link to="/">Go Back.</Link>
                </div>
              }
            ></Route>
          </Routes>
        </>
      )}
    </div>
  );
};
