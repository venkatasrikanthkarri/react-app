import React from 'react'
import { BrowserRouter as Route } from "react-router-dom";

import productsPagePath from '../constants'
import ProductsPageRoute from '../components/ProductsPage'

const produtsPageRoutes=<Route key={Math.random()} exact path={productsPagePath}>
            <ProductsPageRoute />
                </Route>

export default produtsPageRoutes