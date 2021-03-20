import Alert from 'react-bootstrap/Alert';

export const randomElementOfArray = (array) => {
	return array[Math.floor(Math.random() * array.length)];
};

export const showAlert = (text, variant) => {
	return <Alert variant={variant}>{text}</Alert>;
};
