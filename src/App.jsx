import { useState } from 'react';
import Card from './Components/Card';
import Formulario from './Components/Formulario';
import './App.css';

function App() {
  const [estudiante, setEstudiante] = useState({});
  const handleEstudianteSubmit = (nuevoEstudiante) => {
    setEstudiante(nuevoEstudiante);
  }

  return (
    <div className="container">
      <h1>Formulario de estudiantes</h1>
      <hr></hr>
      <Formulario onSubmit={handleEstudianteSubmit} />
      <hr></hr>
      <Card estudiante={estudiante} />
    </div>
  );
}

export default App;