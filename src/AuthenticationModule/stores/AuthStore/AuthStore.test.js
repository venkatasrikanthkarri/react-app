import {
    API_FAILED,
    API_FETCHING,
    API_INITIAL
  } from "@ib/api-constants";
  import AuthService from '../../services/AuthService/index.api'
  import AuthStore from '.'

  describe("AuthStore Tests",()=>{
      let authAPI
      let authStore

      beforeEach(()=>{
          authAPI = new AuthService()
          authStore= new AuthStore(authAPI)
      });

      it("should test initialising auth store",()=>{
          expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL)
          expect( authStore.getUserSignInAPIError).toBe(null)
        })

        it("should test initialising cookie",()=>{
            authStore.setUserSignInAPIResponse()
            expect(authStore.accessToken).not.toBe('')
          })



        it("should test userSignInAPI data fetching state", () => {
            const onSuccess = jest.fn();
            const onFailure = jest.fn();
        
            // const requestObject = {
            //   username: "test-user",
            //   password: "test-password"
            // };
            
            const mockLoadingPromise = new Promise(function(resolve, reject) {});
            const mockSignInAPI = jest.fn();
            mockSignInAPI.mockReturnValue(mockLoadingPromise);
            authAPI.signInAPI = mockSignInAPI;

            authStore.userSignIn();
            expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING);
            expect(onSuccess).not.toBeCalled();
            expect(onFailure).not.toBeCalled();
        });

        it("should test userSignInAPI failure state", async () => {
            const onSuccess = jest.fn();
            const onFailure = jest.fn();
            const requestObject = {
              username: "test-user",
              password: "test-password"
            };
        
            const mockFailurePromise = new Promise(function(resolve, reject) {
              reject(new Error("error"));
            });
        
            const mockSignInAPI = jest.fn();
            mockSignInAPI.mockReturnValue(mockFailurePromise);
            authAPI.signInAPI = mockSignInAPI;
        
            authStore = new AuthStore(authAPI);
            await authStore.userSignIn(requestObject, onSuccess, onFailure);
        
            expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED);
            expect(authStore.getUserSignInAPIError).toBe("error");
            // expect(onFailure).toBeCalled();
          });

          it("should test user sign-out", () => {
            // const mockRemoveCookie = jest.fn();
            authStore.userSignOut();
            // expect(mockRemoveCookie).toBeCalled();
            expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
            expect(authStore.getUserSignInAPIError).toBe(null);
          });
})