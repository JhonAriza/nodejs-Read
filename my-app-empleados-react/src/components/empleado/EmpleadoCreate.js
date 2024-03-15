import React, { useState } from 'react';

const EmpleadoCreate = () => {
    const [nombre, setNombre] = useState('');
    const [fechaIngreso, setFechaIngreso] = useState('');
    const [salario, setSalario] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/api/empleados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre,
                    fecha_ingreso: fechaIngreso,
                    salario
                })
            });

            if (response.ok) {

                console.log('Empleado creado exitosamente');
            } else {
                console.error('Error al crear el empleado:', response.statusText);
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Crear Empleado</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="fechaIngreso">Fecha de Ingreso</label>
                    <input type="date" className="form-control" id="fechaIngreso" value={fechaIngreso} onChange={(e) => setFechaIngreso(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="salario">Salario</label>
                    <input type="number" className="form-control" id="salario" value={salario} onChange={(e) => setSalario(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Crear Empleado</button>
            </form>
        </div>
    );
};

export default EmpleadoCreate;
