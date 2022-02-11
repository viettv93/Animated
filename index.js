/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Entry from './Entry';
import {name as appName} from './app.json';
import Rotate from "./Rotate"
AppRegistry.registerComponent(appName, () => Rotate);
