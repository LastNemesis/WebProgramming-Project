// file src/lib/microsoftLogOut.js
import * as msal from '@azure/msal-browser'

// Creating the configuration
const config = {
    auth: 
        {
        clientId: process.env.VUE_APP_OAUTH_CLIENT_ID,
      
        //redirectUri: "your_app_redirect_uri", 
      
        //postLogoutRedirectUri: "your_app_logout_redirect_uri",
        }
};
  
// creating the application
const msalInstance = new msal.PublicClientApplication(config);
  
// you can select which account application should sign out
const logoutRequest = {
    //account: msalInstance.getAccountByHomeId(homeAccountId),
    account: msalInstance.getActiveAccount(),
    //mainWindowRedirectUri: "your_app_main_window_redirect_uri",
};
  
// Exporting the main function
export async function signOut(){
    try{
        sessionStorage.clear();
        const authResult = await msalInstance.logoutPopup(logoutRequest);
        console.log(authResult);
        return 1;
    }catch(e){
        console.log(e);
        return 0;
    }
}

