import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';

// screens
import HomeStack from './src/screens/HomeStack';
import GalleryStack from './src/screens/GalleryStack';
import GuideStack from './src/screens/GuideStack';
import MoreStack from './src/screens/MoreStack';
import SplashScreen from './src/screens/SplashScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function TabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        backgroundColor: 'black',
        borderTopWidth: 0,
      },
      tabBarActiveTintColor: 'white',
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Keşfet') {
          iconName = focused ? 'compass' : 'compass-outline';
        } else if (route.name === 'Galeri') {
          iconName = focused ? 'images' : 'images-outline';
        } else if (route.name === 'Rehber') {
          const image = focused ? require('../../mervebilgin/Ulucami/src/images/Active.png') : require('../../mervebilgin/Ulucami/src/images/Area.png');
          return <Image source={image} />;
        } else if (route.name === 'Daha Fazla') {
          iconName = focused ? 'ellipsis-horizontal-circle' : 'ellipsis-horizontal-circle-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    >
      <Tab.Screen name="Keşfet" component={HomeStack} />
      <Tab.Screen name="Galeri" component={GalleryStack}/>
      <Tab.Screen name="Rehber" component={GuideStack}/>
      <Tab.Screen name="Daha Fazla" component={MoreStack} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
