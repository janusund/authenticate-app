## Simple Authentication App<br/>
A simple and intuitive React Native app to demonstrate login logout techniques using Firebase Authentication <br/>


## Features<br/>
<ul>
    <li>Demonstartes Login , Logout, SignUp  with cloud based FireBase Authentication</li>
    <li>Demonstrates use of Axios library for acessing Firebase API calls </li>
    <li>Demonstrates storage of authtoken received from Firebase using state and context</li>
    <li>Demonstrates use of real time Firebase secured database access </li>
    <li>Demonstartes storage the token on the devide to reduce user re-login attampt using <br/>
    <a href ="https://react-native-async-storage.github.io/async-storage/docs/install/">Async-Storage</a>
    <a href ="https://github.com/react-native-async-storage/async-storage/tree/main/packages/default-storage">>Source</a>
    <a href ="https://reactnative.directory/?search=storage">>Source</a>
    <a href ="https://reactnative.dev/docs/asyncstorage"/></li>
    <li> Demonstrates use of SplashScreen for Loading the app for better user experience to prolong the splash screen</li>
</ul>

## FireBase Setup <br/>
Access the firebase console https://console.firebase.google.com/<br/>
Create a Firebase project <br/>
Generate an SDK <br/>
Setup Authentication with username and password <br/>
Setup RealTime Database messages and set up rules for secured access to the database.<br/>



## Tech Stack<br/>
React Native<br/>
FireBase <br/>

## Installation<br/>
git clone this repo<br/>
cd authenticator-appr<br/>
npm install<br/>
npm start<br/>
Note: You’ll need Node.js, Expo CLI, and a mobile simulator or Expo Go app.<br/>
Create an environment file .env to store the FireBae API Key to setup Authentication

## Project Structure <br/>

/components      # Reusable UI components <br/>
 
/App.js          # Entry point  <br/>

/screens         # Screen layouts for Login, Welcome, Signup <br/>

/store           # Storage of common authentication token using context <br/>

/utils           # Common Utility functions for app <br/>

/constants       # Constants used in the app <br/>

