import React, { useState } from "react";
import Formulario from "./Components/Formulario";
import Card from "./Components/Card";

function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [error, setError] = useState({false});

  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <Formulario 
        key={nombre}
        //setHire={setHire}
        student={student}
        // nombre={nombre} 
        // apellido={apellido}
       />
      {!error && <Card nombre={nombre} apellido={apellido} />}
    </div>
  );
}

export default App;






// import React, { useState } from "react";
// import Formulario from "./Components/Formulario";
// import Card from "./Components/Card";

// function App() {
//   const [nombre, setNombre] = useState("");
//   const [apellido, setApellido] = useState("");

//   return (
//     <div className="App">
//       <h1>Carga de estudiantes</h1>
//       <Formulario nombre={nombre} apellido={apellido} />
//       <Card nombre={nombre} apellido={apellido} />
//     </div>
//   );
// }

// export default App;









// import React from "react";
// import Formulario from "./Components/Formulario";
// import Card from "./Components/Card";

// function App() {
  
//   return (
//     <div className="App">
//       <h1>Carga de estudiantes</h1>
//       <Formulario />
//       <Card nombre="" apellido="" />
//     </div>
//   );
// }

// export default App;