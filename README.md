<<<<<<< 

Check the demo of this code on output tab :https://github.com/abbysoni/BottomTabAnimated/blob/main/Output/AnimatedBT.mp4

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Build your application

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npx react-native run-android

```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Add dependencies

yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/native
yarn add d3-shape
yarn add react-native-reanimated
yarn add react-native-redash
yarn add react-native-safe-area-context
yarn add react-native-screens
yarn add react-native-svg
yarn add react-native-vector-icons
yarn add @types/d3-shape
yarn add @types/react-native-vector-icons

Make sure you add the following to your babel.config.js file:
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"], // Add this line
  };
};

MOST IMPORTANT:
Add this line to android/app/build.gradle to fetch the feathers icons.
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

=======