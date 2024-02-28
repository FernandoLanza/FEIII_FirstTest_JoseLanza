import React, { useState } from "react"

const Formulario = ({card}) => {
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

        setError(false);
        console.log("Formulario enviado");

        // Enviar datos a Card
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input
                type="text"
                id="nombre"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <label htmlFor="apellido">Apellido:</label>
            <input
                type="text"
                id="apellido"
                name="apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
            />

            {error && <p className="error">Por favor chequea que la información sea correcta</p>}

            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;












// import React, { useState } from "react";

// const Formulario = () => {
//     const [nombre, setNombre] = useState("");
//     const [apellido, setApellido] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Aquí se validarán los datos y se enviarán a Card

//         console.log("Formulario enviado");
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="nombre">Nombre:</label>
//             <input
//                 type="text"
//                 id="nombre"
//                 name="nombre"
//                 value={nombre}
//                 onChange={(e) => setNombre(e.target.value)}
//             />

//             <label htmlFor="apellido">Apellido:</label>
//             <input
//                 type="text"
//                 id="apellido"
//                 name="apellido"
//                 value={apellido}
//                 onChange={(e) => setApellido(e.target.value)}
//             />

//             <button type="submit">Enviar</button>
//         </form>
//     );
// };

// export default Formulario;