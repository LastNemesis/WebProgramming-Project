// File src/lib/microsoftLogIn.js
import * as msal from '@azure/msal-browser'

// Requesting the permissions
export const graphConfig = {
	graphEnpoint: "https://graph.microsoft.com/v1.0/me",
	graphMailEndpoint: "https://graph.microsoft.com/v1.0/me/messages"
}

// Requesting the permissions
const requestedScopes = {
	scopes: ["Mail.Read"]
}

// Creating a public application
export const msalInstance = new msal.PublicClientApplication({
	auth: {
		clientId: process.env.VUE_APP_OAUTH_CLIENT_ID
	},
	cache: {
		cacheLocation: "sessionStorage",
		storeAuthStateInCookie: false
	}
})

// Exporting the main function
export async function signInAndGetUser () {

	const authResult = await msalInstance.loginPopup(requestedScopes)
	//console.log(authResult);

	msalInstance.setActiveAccount(authResult.account)

	return authResult
}