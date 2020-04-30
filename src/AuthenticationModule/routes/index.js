import React from 'react'
import { BrowserRouter as Route } from "react-router-dom";

import SIGN_IN_PATH from '../constants'
import SignInPageRoute from '../components/SignInPage'

const authRoutes =
                <Route key={Math.random()} exact path={SIGN_IN_PATH}>
                        <SignInPageRoute />
                </Route>
export default authRoutes