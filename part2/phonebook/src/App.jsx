import { useState, useEffect } from 'react';
import RenderPersons from './components/RenderPersons';
import FindPerson from './components/FindPerson';
import AddPerson from './components/AddPerson';
import userMethods from './services/userMethods';
import Notification from './components/Notification';

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [find, setFind] = useState('');
	const [message, setMessage] = useState(null);

	useEffect(() => {
		userMethods.getAll().then((response) => setPersons(response.data));
	}, []);

	const handleNameInput = (event) => {
		setNewName(event.target.value);
	};
	const handleNumberInput = (event) => {
		setNewNumber(event.target.value);
	};
	const handleFindInput = (event) => {
		setFind(event.target.value);
	};

	return (
		<div>
			<h1>Phonebook</h1>
			<Notification message={message} />
			<h2>Find</h2>
			<FindPerson find={find} handleFindInput={handleFindInput} />
			<h2>Add New</h2>
			<AddPerson
				newName={newName}
				newNumber={newNumber}
				persons={persons}
				message={message}
				setNewName={setNewName}
				setNewNumber={setNewNumber}
				setPersons={setPersons}
				setMessage={setMessage}
				handleNameInput={handleNameInput}
				handleNumberInput={handleNumberInput}
			/>
			<h2>Numbers</h2>
			<RenderPersons persons={persons} setPersons={setPersons} find={find} />
		</div>
	);
};

export default App;
