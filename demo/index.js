import { AppRegistry } from 'react-native'
import App from './src/screens/App'
import configs from './app.json'

AppRegistry.registerComponent(configs.name, () => App)
