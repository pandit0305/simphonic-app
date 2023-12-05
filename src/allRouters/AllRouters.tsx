import React from 'react'
import { Route, Routes } from "react-router-dom";
import SingleProductPage from '../pages/singleProductPage/SingleProductPage';
import LandingPage from '../pages/landingPage/LandingPage';
import ViewPage from '../pages/viewPage/ViewPage';

const AllRouters = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
      <Route path="/:id" element={<SingleProductPage />}></Route>
      <Route path="/products" element={<ViewPage />}></Route>
    </Routes>
    </>
  )
}

export default AllRouters
