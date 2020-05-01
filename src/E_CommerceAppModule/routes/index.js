import { Route } from "react-router-dom";
import React from 'react'


import productsPagePath from '../constants'
import ProductsPage from '../components/ProductsPage'

const produtsPageRoutes=[<Route key={Math.random()} exact path={productsPagePath} component={ProductsPage}/>]
    // <ProductsPage/>
    // </Route>]

export default produtsPageRoutes