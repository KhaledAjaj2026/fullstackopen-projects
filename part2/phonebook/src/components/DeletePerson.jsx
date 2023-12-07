import userMethods from '../services/userMethods';

function DeletePerson({ person, persons, setPersons }) {
	const initiateDeletion = () => {
		if (window.confirm(`Delete "${person.name}"?`)) {
			userMethods.deletePerson(person.id).then(() => {
				setPersons(persons.filter((p) => p.id !== person.id));
			});
		}
	};
	return <button onClick={initiateDeletion}>Delete</button>;
}

export default DeletePerson;
