import React    from 'react';
import { Link } from 'react-router-dom';


const Cape = () =>
	<div className="nav-cape">
		<Link to="/" title="На главную" className="link_unstyled">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="nav-cape-heart">
				<path className="nav-cape-heart-path" d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5z"/>
			</svg>
		</Link>
	</div>;


export default Cape;