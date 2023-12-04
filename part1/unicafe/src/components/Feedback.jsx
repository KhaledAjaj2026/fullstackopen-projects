import UserInput from './UserInput';

const Feedback = ({ actions }) => {
	return (
		<>
			<h1>Give Feedback!</h1>
			<UserInput actions={actions[0]} text={'good'} />
			<UserInput actions={actions[1]} text={'neutral'} />
			<UserInput actions={actions[2]} text={'bad'} />
		</>
	);
};
export default Feedback;
