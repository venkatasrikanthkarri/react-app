import React from 'react'
import SIGN_IN_PATH from '../constants'
import SignInPageRoute from '../routes/SignInPageRoute'
import {ProtectedRoute} from '../components/ProtectedRoute'

const authRoutes = [<ProtectedRoute key={Math.random()} exact path={SIGN_IN_PATH} component={SignInPageRoute}/>]
export {authRoutes}