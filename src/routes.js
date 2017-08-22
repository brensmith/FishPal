import React from 'react';
import { Router, Route, IndexRoute} from 'react-router';

import App from './App';
import About from './pages/about/about';
import Home from './pages/home/home';
import AddFish from './pages/addfish/addfish';

const Routes = (props) => (
	<Router {...props}>
		<Route path="/" component={App}>
			{/* indexroute, child of `/` */}
			<IndexRoute component={Home} />
			<Route path="/addfish" component={AddFish} />
			<Route path="/about" component={About} />
			
		
		</Route>
	</Router>
);

export default Routes;



