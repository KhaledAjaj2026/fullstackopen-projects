const Total = ({ course }) => {
	const { parts } = course;
	const total = parts.reduce((sum, current) => {
		return sum + current.exercises;
	}, 0);
	return <strong>Number of exercises {total}</strong>;
};

export default Total;
