import React from 'react';
import { render } from '@testing-library/react'

import SignInPage from '.'

describe('SigninForm', () => {

    it('should render types username', () => {
        const username='test-user'
        const {getByPlaceholderText}=render(
            <SignInPage username={username}
            onChangeUsername={()=>{}}/>
        );
        const usernameField= getByPlaceholderText('Username')

        expect(usernameField.value).toBe(username);
    });

    it('should render types password', () => {
        const password='test-password'
        const {getByPlaceholderText}=render(
            <SignInPage password={password}
            onChangePassword={()=>{}}/>
        );
        const passwordField= getByPlaceholderText('Password')

        expect(passwordField.value).toBe(password);
    });

    it('should render given error message',() => {

        const{ getByText }=render(
            <SignInPage errorMessage="enter valid username" />
    )
    getByText(/enter valid username/i);

    })

});