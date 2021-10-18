// Code Keypad Component Here
import react from 'react';

const Keypad = () => {
	const handleSubmit = (e) => {
		console.log('Entering password...');
	};
	return (
		<>
			<form onChange={handleSubmit}>
				<input type="password"></input>
			</form>
		</>
	);
};

export default Keypad;
