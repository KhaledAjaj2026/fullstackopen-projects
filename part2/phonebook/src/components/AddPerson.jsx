import userMethods from '../services/userMethods';

function AddPerson({
	newName,
	newNumber,
	persons,
	message,
	setNewName,
	setNewNumber,
	setPersons,
	setMessage,
	handleNameInput,
	handleNumberInput,
}) {
	const findDuplicate = () => {
		for (const person of persons) {
			if (person['name'] === newName) {
				return true;
			}
		}
	};
	const addNewName = (event) => {
		event.preventDefault();
		if (newName && newNumber) {
			if (findDuplicate()) {
				alert(`${newName} is already added to the phonebook`);
			} else {
				const newPerson = {
					name: newName,
					number: newNumber,
				};

				userMethods
					.postPerson(newPerson)
					.then(() => {
						setPersons(persons.concat(newPerson));
						setNewName('');
						setNewNumber('');
					})
					.then(() => {
						setMessage(`${newName} added to phonebook`);
						setTimeout(() => {
							setMessage(null);
						}, 4000);
					});
			}
		} else {
			alert('Please enter a name and number before submitting');
		}
	};
	return (
		<form onSubmit={addNewName}>
			<div>
				name: <input value={newName} onChange={handleNameInput} />
			</div>
			<div>
				number: <input value={newNumber} onChange={handleNumberInput} />
			</div>
			<div>
				<button type='submit'>add</button>
			</div>
		</form>
	);
}

export default AddPerson;
