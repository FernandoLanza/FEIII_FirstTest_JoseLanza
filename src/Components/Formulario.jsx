import React, { useState } from 'react';
import './Formulario.css'; // Importa el archivo de estilos CSS

const Formulario = ({ onSubmit }) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let nombreValido = nombre.length >= 3 && !nombre.startsWith(" ");
        let apellidoValido = apellido.length >= 6;
        if (!nombreValido || !apellidoValido) {
            setError(true);
            return;
        }

        console.log("Formulario enviado");
        const nuevoEstudiante = {
            nombre,
            apellido,
        };
        onSubmit(nuevoEstudiante);
        setError(false);
    }

    return (
        <form className="formulario" onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input
                type="text"
                value={nombre}
                onChange={({ target }) => setNombre(target.value)}
            />
            <label htmlFor="apellido">Apellido:</label>
            <input
                type="text"
                value={apellido}
                onChange={({ target }) => setApellido(target.value)}
            />
            {error && <p className="error">Por favor chequea que la información sea correcta</p>}
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Formulario;


































// import React, { useState } from 'react'

// const Formulario = ({ onSubmit }) => {

//     const [nombre, setNombre] = useState("");
//     const [apellido, setApellido] = useState("");
//     const [error, setError] = useState(false);


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         let nombreValido = nombre.length >= 3 && !nombre.startsWith(" ");
//         let apellidoValido = apellido.length >= 6;
//         if (!nombreValido || !apellidoValido) {
//             setError(true);
//             return;
//         }

//         console.log("Formulario enviado");
//         const nuevoEstudiante = {
//             nombre,
//             apellido,
//         };
//         onSubmit(nuevoEstudiante);
//         setError(false);

//     }
//     return (

//         <form onSubmit={handleSubmit}>
//             <label htmlFor="nombre">Nombre:</label>
//             <input
//                 type="text"
//                 value={nombre}
//                 onChange={({ target }) => setNombre(target.value)}>
//             </input>

//             <label htmlFor="apellido">Apellido:</label>
//             <input
//                 type="text"
//                 value={apellido}
//                 onChange={({ target }) => setApellido(target.value)}
//             />

//             {error && <p className="error">Por favor chequea que la información sea correcta</p>}

//             <button type="submit">Enviar</button>
//         </form>
//     )
// }


// export default Formulario

