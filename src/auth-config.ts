/**
 * This file contains authentication parameters. Contents of this file
 * is roughly the same across other MSAL.js libraries. These parameters
 * are used to initialize Angular and MSAL Angular configurations in
 * in app.module.ts file.
 */

 import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';

 const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;
 
 export const b2cPolicies = {
    names: {
        // signUpSignIn: "b2c_1_susi_reset_v2",
        // editProfile: "b2c_1_edit_profile_v2",
        signUpSignIn: "B2C_1_studentPortalSignUpAndSignIn",
        resetPassword: "B2C_1_studentsPortalPasswordReset"

    },
    authorities: {
        signUpSignIn: {
             authority: "https://fadelStudentsPortal.b2clogin.com/fadelStudentsPortal.onmicrosoft.com/B2C_1_studentPortalSignUpAndSignIn",
            //authority: "https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/b2c_1_susi_reset_v2",

        },
        // resetPassword: {
        //     authority: "https://fabrikamb2c.b2clogin.com/fadelStudentsPortal.onmicrosoft.com/b2c_1_edit_profile_v2"
        // },
        // editProfile: {
        //     authority: "https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/b2c_1_edit_profile_v2"
        // }
    },
     authorityDomain: "fadelStudentsPortal.b2clogin.com"
    //authorityDomain: "fabrikamb2c.b2clogin.com"

};

 /**
  * Configuration object to be passed to MSAL instance on creation. 
  * For a full list of MSAL.js configuration parameters, visit:
  * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
  */
 export const msalConfig: Configuration = {
    //  auth: {
    //      clientId: 'Enter_the_Application_Id_Here', // This is the ONLY mandatory field that you need to supply.
    //      authority: 'https://login.microsoftonline.com/Enter_the_Tenant_Info_Here', // Defaults to "https://login.microsoftonline.com/common"
    //      redirectUri: '/', // Points to window.location.origin. You must register this URI on Azure portal/App Registration.
    //      postLogoutRedirectUri: '/', // Indicates the page to navigate after logout.
    //      navigateToLoginRequestUrl: true, // If "true", will navigate back to the original request location before processing the auth code response.
    //  },
    //https://ugetitmain.fadelsoft.com/
    //http://localhost:4200/#/courses-3-columns-style-1
      auth: {
        clientId: '38587c69-e970-487f-bf43-f32c71fd7706', // This is the ONLY mandatory field that you need to supply.
        authority: b2cPolicies.authorities.signUpSignIn.authority, // Defaults to "https://login.microsoftonline.com/common"
        knownAuthorities: [b2cPolicies.authorityDomain], // Mark your B2C tenant's domain as trusted.
        redirectUri: 'https://ugetitmain.fadelsoft.com/', // Points to window.location.origin. You must register this URI on Azure portal/App Registration.
        postLogoutRedirectUri: 'https://ugetitmain.fadelsoft.com/', // Indicates the page to navigate after logout.
        navigateToLoginRequestUrl: true, // If "true", will navigate back to the original request location before processing the auth code response.
    },
     cache: {   
         cacheLocation: BrowserCacheLocation.LocalStorage, // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
         storeAuthStateInCookie: isIE, // Set this to "true" if you are having issues on IE11 or Edge
     },
     system: {
         loggerOptions: {
             loggerCallback(logLevel: LogLevel, message: string) {
                 console.log(message);
             },
             logLevel: LogLevel.Verbose,
             piiLoggingEnabled: false
         }
     }
 }

 export const protectedResources = {
    todoListApi: {
      endpoint: "https://localhost:44328/api/UIMain/",
      scopes: ["https://fadelStudentsPortal.onmicrosoft.com/ugetit-tasks-api/ugetit-tasks.read"],
    //   scopes: ["https://fabrikamb2c.onmicrosoft.com/api/tasks.read"],
    // endpoint: "http://localhost:5000/api/todolist",
    },
  }

  /**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: []
  };
 
 /**
  * An optional silentRequest object can be used to achieve silent SSO
  * between applications by providing a "login_hint" property.
  */
 export const silentRequest = {
     scopes: ["openid", "profile"],
     loginHint: "example@domain.net"
 };