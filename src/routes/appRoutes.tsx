/* eslint-disable no-unused-vars */
import React from 'react';
import { Navigate, Route, Routes, redirect } from 'react-router-dom';
import MoviesList from '../pages/moviesList';
import Utils from '../redux/utils';
export const AppRoutes = () => {
  const user = Utils.getCurrentUser();
  const menu = Utils.getCurrentMenu();
  
  return (
      <Routes>
        <Route path="" element={<Navigate to={`/movies`} replace />} />
        <Route path='/movies' element={<MoviesList/>}/>
        
      </Routes>
    
  );
};
