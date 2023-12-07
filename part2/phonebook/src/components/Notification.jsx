import '../App.css';

const Notification = ({ message }) => {
	if (message === null) return null;

	return <div className='notification-container'>{message}</div>;
};

export default Notification;
