import { registerRootComponent } from 'expo';

import App from './App';
import Card from './Components/task';
import Tables from './Components/tables';
import Carousel from './Components/carousel';
import animation from './Components/animation';
import bouningball from './Components/bouningball';
import navigation from './Components/navigation';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(Card);
// registerRootComponent(App);
// registerRootComponent(Tables);
// registerRootComponent(Carousel);
// registerRootComponent(animation);
// registerRootComponent(bouningball);
registerRootComponent(navigation);


