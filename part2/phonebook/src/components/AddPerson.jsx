import userMethods from '../services/userMethods';

function AddPerson({
	newName,
	newNumber,
	persons,
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
			const newPerson = {
				name: newName,
				number: newNumber,
			};
			if (findDuplicate()) {
				if (
					window.confirm(
						`${newName} is already added to the phonebook, update number anyway?`
					)
				) {
					let personId = '';
					persons.forEach((person) => {
						if (person.name === newName) {
							personId = person.id;
							return;
						}
					});
					userMethods
						.updatePerson(personId, newPerson)
						.then(() => {
							const updatedPersons = [...persons];
							updatedPersons.find((person) => person.name === newName).number =
								newNumber;
							setPersons(updatedPersons);
							setNewName('');
							setNewNumber('');
						})
						.then(() => {
							setMessage(`updated number for ${newName}`);
							setTimeout(() => {
								setMessage(null);
							}, 4000);
						});
				}
			} else {
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
					})
					.catch((err) => {
						setMessage(err.response.data.error);
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
