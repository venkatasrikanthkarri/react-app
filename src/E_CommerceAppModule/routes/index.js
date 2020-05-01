// import { Route } from "react-router-dom";
import React from 'react'


import productsPagePath from '../constants'
import ProductsPage from '../components/ProductsPage'
import {PRotectedRoute} from '../../AuthenticationModule/components/ProtectedRoute'

const produtsPageRoutes=[<PRotectedRoute key={Math.random()} pathname={productsPagePath} component={ProductsPage}/>]

// [<Route key={Math.random()} exact path={productsPagePath} component={ProductsPage}/>]
    // <ProductsPage/>
    // </Route>]

export default produtsPageRoutes