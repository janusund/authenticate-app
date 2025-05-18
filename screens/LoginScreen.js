import AuthContent from '../components/Auth/AuthContent';
import {login} from '../components/Utils/auth';
import {useState, useContext} from 'react';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext }  from '../store/auth-context';


function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  // Context for setting the user authenticate token from the firebase response 
  const authCtx = useContext(AuthContext);

  async function signInHandler({email, password}){
    setIsAuthenticating(true);
    
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
      //authCtx.setRefreshToken(refreshToken);
    }  catch(error){
      Alert.alert('Authentication failed!',
        'Unable to login, invalid credentials or try agiain later!'
      );
      setIsAuthenticating(false);
    }
    
    
  }

  if(isAuthenticating){
    return <LoadingOverlay message="Signing In.."/>
  }

  return <AuthContent isLogin onAuthenticate={signInHandler} />;
}

export default LoginScreen;
