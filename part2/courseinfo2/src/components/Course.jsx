import Header from './Header';
import Content from './Content';
import Total from './Total';

import React from 'react';

function Course({ course }) {
	return (
		<>
			<Header course={course} />
			<Content course={course} />
			<Total course={course} />
		</>
	);
}

export default Course;
