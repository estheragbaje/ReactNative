import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const Stack = createStackNavigator();

const homeNavigator = ({ navigation, title }) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'gray',
        },
        height: 60,
        headerTintColor: '#444',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header navigation={navigation} title="GameZone" />,
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: 'Review Details',
        }}
      />
    </Stack.Navigator>
  );
};

export default homeNavigator;

// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from '../screens/home';
// import ReviewDetails from '../screens/reviewDetails';
// import Header from '../shared/header';

// const homeStack = ({ navigation }) => {
//   const Stack = createStackNavigator();
//   return (
//     <Stack.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: '#4caf50',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//         headerTitleAlign: 'center',
//       }}
//     >
//       <Stack.Screen
//         name="Home"
//         component={Home}
//         options={{
//           headerTitle: () => <Header navigation={navigation} />,
//         }}
//       />
//       <Stack.Screen
//         name="ReviewDetails"
//         component={ReviewDetails}
//         options={{ title: 'Details' }}
//       />
//     </Stack.Navigator>
//   );
// };

// export default homeStack;
