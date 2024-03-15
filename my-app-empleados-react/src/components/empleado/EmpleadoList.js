import React, { useEffect, useState } from 'react';
import { listEmpleados } from './EmpleadoServer';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmpleadoList = () => {
    const [empleados, setEmpleados] = useState([]);

    const fetchData = async () => {
        try {
            const res = await listEmpleados();
            const data = await res.json();
            setEmpleados(data);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container mt-4">
            <h2>Lista de Empleados</h2>
            <table className="table">
                <thead>
                    <tr>
                          <th>##id</th>
                        <th>Fecha de Ingreso</th>
                        <th>Nombre</th>
                        <th>Salario</th>
                    </tr>
                </thead>
                <tbody>
                    {empleados.map((empleado) => (
                        <tr key={empleado.id}>
                            <td>{empleado.id}</td>
                            <td>{empleado.fecha_ingreso}</td>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.salario}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmpleadoList;
