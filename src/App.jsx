// App.jsx
import { useState } from 'react';
import Card from './Components/Card';
import Formulario from './Components/Formulario';
import './App.css'; // Importa el archivo de estilos CSS

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



















// import { useState } from 'react';
// import Card from './Components/Card';
// import Formulario from './Components/Formulario';


// function App() {

//   const [estudiante, setEstudiante] = useState({});
//   const handleEstudianteSubmit = (nuevoEstudiante)=>{setEstudiante(nuevoEstudiante)}

//   return (
//     <div>
//       <h1>Formulario de estudiantes</h1>
//       <hr></hr>
//       <Formulario onSubmit={handleEstudianteSubmit} />
//       <hr></hr>
//       <Card estudiante={estudiante} />

//     </div>
//   );
// }

// export default App;