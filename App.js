import 'react-native-gesture-handler';
import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import {Text} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//import Home from './Components/Home';
//import Login from './Components/Login';
//import Signup from './Components/Signup';
//import About from './Components/About';
//import review from './Components/review';

/*export default function App() {
  return Login();
}*/

// export class Home extends Component {
//   render() {
//     return (
//       <View style={StyleSheet.container}>
//         <Text>Home</Text>
//       </View>
//     );
//   }
// }
// export class Review extends Component {
//   render() {
//     return (
//       <View style={StyleSheet.container}>
//         <Text>Review</Text>
//       </View>
//     );
//   }
// }

// export default createBottomTabNavigator({
//   Home: Home,
//   Review: Review,
// });

function Home() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function Review() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="review" component={Review} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
