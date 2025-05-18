//Create Authcontext for the login token to be used across application

import { createContext, useState, useEffect} from 'react';
// Use AsyncStorage for storing the token on device
import AsyncStorage from '@react-native-async-storage/async-storage';

//Define the context data 
export const AuthContext =createContext({
    token: '' , //received from firebase 
    isAuthenticated : false ,//find if use authenticated
    authenticate:() =>{} , // authenticate the user
    logout:()=>{} // clear the token

});

function AuthContextProvider({children}){
    // Manage the Auth state
    const [authToken, setAuthToken] = useState();

    // Check if the device has the token stored to auto login the user
    // This is now handeled in App.js 
    // useEffect(()=>{
    // async function fetchToken(){
    // const   storedToken = await AsyncStorage.getItem('token');
    //     if(storedToken){
    //         setAuthToken(storedToken);
    //     }

    // }
    // fetchToken();

    // },[]);

    // For signing up 
    function authenticate(token){
        setAuthToken(token);
        // Device storage 
        AsyncStorage.setItem('token', token);
    }

    function logout(){
        setAuthToken(null);
        AsyncStorage.removeItem('token');
    }

    function setRefreshToken(refresh_token){
        // Device storage 
        AsyncStorage.setItem('refresh_token', refresh_token);
    }

    // Construct the value object
    const value={
        token: authToken,
        isAuthenticated: !!authToken, // convert true or false to false / true
        authenticate : authenticate,
        logout: logout, // define the logout to nullify the token 
        setRefreshToken:setRefreshToken
    };

    return <AuthContext.Provider value ={value}>{children}</AuthContext.Provider>

}

export default AuthContextProvider;

