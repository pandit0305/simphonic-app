import React from 'react'
import Home from '../../components/home/Home'
import BestSellingCategories from '../../components/bestSellingCategories/BestSellingCategories'
import BestSellingItems from '../../components/bestSellingItems/BestSellingItems'
import AllItems from '../../components/allItems/AllItems'
import NewArrivals from '../../components/newArrivals/NewArrivals'
import TopSuppliers from '../../components/topSuppliers/TopSuppliers'
import Banner from '../../components/banner/Banner'

const LandingPage = () => {
  return (
    <>
        <Home/>
        <Banner/>
        <BestSellingCategories/>
        <BestSellingItems/>
        <AllItems/>
        <NewArrivals/>
        <TopSuppliers/>
    </>
  )
}

export default LandingPage
