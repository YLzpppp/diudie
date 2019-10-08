import Global from './src/model/global';
import {AppRegistry,PermissionsAndroid} from 'react-native';
import MainViewController from './src/viewmodel/MainViewController';
import {name as appName} from './app.json';
import AppTest from './src/ztest/AppTest';
import InterfaceTest from '~src/ztest/InterfaceTest';

AppRegistry.registerComponent(appName, () => InterfaceTest);
