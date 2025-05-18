import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { useContext ,useState ,useEffect,useCallback} from 'react';
import IconButton from './components/UI/IconButton';
import  * as SplashScreen from 'expo-splash-screen';
// Use AsyncStorage for storing the token on device
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

// Once Authenticated need to switch screens ; screen protection / route protection
// TLDR ; Called screen protection which gets enabled only when a signup is complete
function AuthStack() {
  return (
    
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen}  options={
        {headerRight:({tintColor})=><IconButton icon ="exit" color={tintColor} size={24} onPress={authCtx.logout}/>
      }}/>
    </Stack.Navigator>
  );
}

function Navigation() {
// Use context 
const authCtx = useContext(AuthContext);

  
  return (
   
    <NavigationContainer>
      {!authCtx.isAuthenticated &&< AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack/>}
    </NavigationContainer>
    
  );
}

function Root(){
  // For loading if the logging is complete
  const [isTryingLogin, setTryingToken] = useState(true);
  // Use context
  const authCtx = useContext(AuthContext);

  // Check if the device has the token stored to auto login the user
  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      setTryingToken(false); // User is authenticated
    }
    fetchToken();
  }, []);

  useEffect(() => {
    async function hideSplashcreen() {
      if (!isTryingLogin) {
        await SplashScreen.hideAsync(); // Hide the screen
      }
    }
    hideSplashcreen();
  }, [isTryingLogin]);

  const onLayoutRootView = useCallback(async () => {
    if (!isTryingLogin) {
      await SplashScreen.hideAsync(); // 👈 Hide splash screen manually
    }
  }, [isTryingLogin]);

  if (isTryingLogin) {
    return null; // Keep splash screen visible
  }

  return (
  <Navigation onLayout={onLayoutRootView}/>);
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
       <Root />
      </AuthContextProvider>
    </>
  );
}
