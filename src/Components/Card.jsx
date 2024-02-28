


const Card = ({ nombre, apellido }) => {

    return (
        <div className="card">
            <h2>Información del estudiante</h2>
            <p>Nombre: {nombre}</p>
            <p>Apellido: {apellido}</p>
        </div>
    );
};

export default Card