
import {useContext, useState} from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../components/Utils/auth';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { Alert } from 'react-native';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  // Set the Auth token from firebase response in the context 
  const authCtx = useContext(AuthContent);

  async function signUpHandler({email, password}){
    setIsAuthenticating(true);
    try{
      const token= await createUser (email, password);
      authCtx.authenticate(token);
     // authCtx.setRefreshToken(refreshToken);
    }catch(error){
        Alert.alert('Authentication failed!',
              'Unable to login, invalid credentials or try agiain later!'
            );
      setIsAuthenticating(false);
    }
       
  }

  if(isAuthenticating){
    return <LoadingOverlay message="Creating user..." />;
  }
  return <AuthContent onAuthenticate={signUpHandler}/>;
}

export default SignupScreen;
