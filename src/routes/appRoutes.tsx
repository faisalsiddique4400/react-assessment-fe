  /* eslint-disable no-unused-vars */
  import React from 'react';
  import { Navigate, Route, Routes, redirect } from 'react-router-dom';
  import MoviesList from '../pages/moviesList';
  import EmptyList from '../pages/emptyList';
  import Utils from '../redux/utils';
  import CreateMovies from "../pages/CreateMovie";
  import Footer from "../assets/footer.png";

  export const AppRoutes = () => {
    return (
      <React.Fragment>
        <Routes>
          <Route path="" element={<Navigate to={`/app/movies`} replace />} />
          <Route path='/movies' element={<MoviesList/>}/>
          <Route path='/emptyList' element={<EmptyList/>}/>
          <Route path='/create' element={<CreateMovies/>}/>
          <Route path='/edit' element={<CreateMovies/>}/>
        </Routes>
          {/* <img src={Footer} alt="Footer" height={111}/> */}
      </React.Fragment>
    );
  };
