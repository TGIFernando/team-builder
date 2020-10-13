import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import Team from './components/Team'

function App() {
  //initializing form and team state
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
  })
  const [team, setTeam] = useState([])

  //update form function
  const update = (name, value) => {
    setForm({...form, [name] : value})
  }
  const submit = () => {
    const newTeammate = {
      name: form.name,
      email: form.email,
      role: form.role,
    }
    setTeam([...team, newTeammate])
  }


  return (
    <div>
      <h1>Team Form</h1>
      <Form value={form} update={update} submit={submit}/>
      <Team team={team}/>
    </div>
  );
}

export default App;