import React from 'react';
import { Router, Route} from 'react-router';

import App from './App';
import About from './pages/about/about';
import Contact from './pages/contact/contact';

const Routes = (props) => (
	<Router {...props}>
		<Route path="/" component={App}>
		
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
		
		</Route>
	</Router>
);

export default Routes;



