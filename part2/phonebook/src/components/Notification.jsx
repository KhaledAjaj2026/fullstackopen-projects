import '../App.css';

const Notification = ({ message }) => {
	if (message === null) return null;
	else if (/failed/g.test(message)) {
		return <div className='notification error'>{message}</div>;
	}

	return <div className='notification success'>{message}</div>;
};

export default Notification;
