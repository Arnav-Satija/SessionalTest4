import React from 'react';
import '../styles/about.css';

const About = () => {
return (
	<div
	style={{
		display: 'block',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
	<h1>Welcome to the about Section of this Website.</h1>
	<div><p>This website contains the basic template<br/> for registering on any website.</p></div>
	<div><p>Only <u className='blue'>Admin</u> can view who all registered by signing in as admin<br/> present at <u className='blue'>Top Right Corner</u></p></div>
	</div>
);
};

export default About;