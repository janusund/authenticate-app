import axios from 'axios';
import Config from 'react-native-config';
const API_KEY=Config.FIREBASE_API_KEY;

async function authenticate(mode, email, password){
    const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
        {
            email : email,
            password: password,
            returnSecureToken : true
        }
    );
   
    console.log(response.data); // This will cause unhandeled exception in case of authentication failure 
    const token = response.data.idToken; // this is the token from firebase
    // in order to refresh the token upon expiration pass the refreshToken from the response.data.refreshToken to the 
    /*
    curl 'https://securetoken.googleapis.com/v1/token?key=[API_KEY]' \
-H 'Content-Type: application/x-www-form-urlencoded' \
--data 'grant_type=refresh_token&refresh_token=[REFRESH_TOKEN]'*/
    return token;
}

async function refreshToken(refresh_token){
    const response = await axios.post(
        `https://securetoken.googleapis.com/v1/token?key=${process.env.FIREBASE_API_KEY}`,
        {
            grant_type : "refresh_token",
            refresh_token: refresh_token
        }
    );
   
    const token = response.data.idToken; // this is the token from firebase
    const refreshToken = response.data.refreshToken; // this is the refreshtoken from firebase
    return [token,refreshToken];
}



// Send a request to firebase to create a user
export function createUser(email, password){ // returns a promise 
    return authenticate('signUp', email, password)
}

export function login(email, password){ // returns a promise 
   return authenticate('signInWithPassword', email, password)
}

export function refresh(refresh_token){ // returns a promise 
    return refreshToken(refresh_token)
 }

