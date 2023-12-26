/* eslint-disable no-unused-vars */
import React from 'react';
import { Navigate, Route, Routes, redirect } from 'react-router-dom';
import MoviesList from '../pages/moviesList';
import EmptyList from '../pages/emptyList';
import Utils from '../redux/utils';
export const AppRoutes = () => {
  const user = Utils.getCurrentUser();
  const menu = Utils.getCurrentMenu();
  
  return (
      <Routes>
        <Route path="" element={<Navigate to={`/app/movies`} replace />} />
        <Route path='/movies' element={<MoviesList/>}/>
        <Route path='/emptyList' element={<EmptyList/>}/>
        
      </Routes>
    
  );
};
