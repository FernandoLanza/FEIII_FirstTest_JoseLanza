import './Formulario.css'; // Importa el archivo de estilos CSS

const Card = ({ estudiante }) => {

    return (
        <div className="card">
            <h2 className='card-title'>Información del estudiante</h2>
            <p>Nombre: {estudiante.nombre}</p>
            <p>Apellido: {estudiante.apellido}</p>
        </div>
    );
};

export default Card