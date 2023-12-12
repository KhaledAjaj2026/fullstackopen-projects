import '../App.css';

const Notification = ({ message }) => {
	const failed = /failed/.test(message);
	if (message === null) return null;
	else if (failed) {
		return <div className='notification error'>{message}</div>;
	}

	return <div className='notification success'>{message}</div>;
};

export default Notification;
