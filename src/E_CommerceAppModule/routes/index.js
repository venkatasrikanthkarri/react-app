
import React from 'react'
import productsPagePath from '../constants'
import ProductsPage from '../components/ProductsPage'
import {ProtectedRoute} from '../../AuthenticationModule/components/ProtectedRoute'

const produtsPageRoutes=[<ProtectedRoute key={Math.random()} pathname={productsPagePath} component={ProductsPage}/>]

export default produtsPageRoutes