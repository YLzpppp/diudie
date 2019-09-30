import Global from './src/model/global';
import {AppRegistry,PermissionsAndroid} from 'react-native';
import MainViewController from './src/viewmodel/MainViewController';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainViewController);
