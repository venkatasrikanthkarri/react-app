import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";

import { productsPagePath } from "../../../E_CommerceAppModule/constants"
import SIGN_IN_PATH from "../../constants"
import SignInPageRoute from '../SignInPageRoute'
import AuthService from '../../services/AuthService/index.api'
import AuthStore from '../../stores/AuthStore'

const LocationDisplay = withRouter(({location})=>(
<div data-testid="location-display">{location.pathname}</div>
))

describe("SignInRoute Tests",()=>{
    let authAPI
    let authStore

    beforeEach(()=>{
        authAPI=new AuthService()
        authStore=new AuthStore(authAPI)
    });

    afterEach(()=>{
        jest.restoreAllMocks()
    })

    it("should render username empty error message",()=>{
        const {getByText,getByRole}=render(
            <Router history={createMemoryHistory()}>
                <SignInPageRoute authStore={authStore}/>
            </Router>
        )
        const signInButton=getByRole("button",{name:"LogIn"})
        fireEvent.click(signInButton);

    getByText(/Please enter username/i);
    })

    it("should submit sign-in on press enter", () => {
        const { getByLabelText, getByPlaceholderText, getByRole } = render(
          <Router history={createMemoryHistory()}>
            <SignInPageRoute authStore={authStore} />
          </Router>
        );
        const username = "test-user";
        const password = "test-password";
    
        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", { name: "LogIn" });
    
        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.keyPress(signInButton, { key: "Enter", code: "Enter" });
    
        waitFor(() => getByLabelText("audio-loading"));
      });


      it("should render signInRoute loading state", async () => {
        const { getByLabelText, getByPlaceholderText, getByRole } = render(
          <Router history={createMemoryHistory()}>
            <SignInPageRoute authStore={authStore} />
          </Router>
        );
        const username = "test-user";
        const password = "test-password";
    
        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", { name: "LogIn" });
    
        const mockLoadingPromise = new Promise(function(resolve, reject) {});
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        authAPI.signInAPI = mockSignInAPI;
    
        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.click(signInButton);
    
        // getByLabelText("audio-loading");
        // getByRole("button", { disabled: true });
      });


      it("should render signInRoute success state", async () => {
        const history = createMemoryHistory();
        const route = productsPagePath;
        history.push(route);
    
        const {
          getByPlaceholderText,
          getByRole,
          queryByRole,
          queryByLabelText,
          getByTestId
        } = render(
          <Provider authStore={authStore}>
            <Router history={history}>
              <Route path={SIGN_IN_PATH}>
                <SignInPageRoute />
              </Route>
              <Route path={productsPagePath}>
                <LocationDisplay  />
              </Route>
            </Router>
          </Provider>
        );
    
        const username = "test-user";
        const password = "test-password";
    
        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", { name: "LogIn" });
    
        const mockSuccessPromise = new Promise(function(resolve, reject) {
          resolve(authStore.getUserSignInResponse);
        });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise);
        authAPI.signInAPI = mockSignInAPI;
    
        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.click(signInButton);
    
        await waitFor(() => {
          expect(
            queryByRole("button", { name: "LogIn" })
          ).not.toBeInTheDocument();
          expect(getByTestId("location-display")).toHaveTextContent(
            productsPagePath
          );
        });
      });






})
