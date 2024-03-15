import { getConnection } from "../database/database";

const getEmpleados = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, fecha_ingreso, nombre, salario FROM empleado");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, fecha_ingreso, nombre, salario FROM empleado WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const addEmpleado = async (req, res) => {
    try {
        const { fecha_ingreso, nombre, salario } = req.body;

        if (fecha_ingreso === undefined || nombre === undefined || salario === undefined) {
            res.status(400).json({ message:  "Solicitud incorrecta. Complete todos los campos." });
        }

        const empleado = { fecha_ingreso, nombre, salario };
        const connection = await getConnection();
        await connection.query("INSERT INTO empleado SET ?", empleado);
        res.json({ message: "Empleado  agregado correctamente" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const { fecha_ingreso, nombre, salario } = req.body;

        if (id === undefined || fecha_ingreso === undefined || nombre === undefined || salario === undefined) {
            res.status(400).json({ message:  "Solicitud incorrecta. Complete todos los campos." });
        }

        const empleado = { fecha_ingreso,nombre, salario };
        const connection = await getConnection();
        const result = await connection.query("UPDATE empleado SET ? WHERE id = ?", [empleado, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM empleado WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getEmpleados,
    getEmpleado,
    addEmpleado,
    updateEmpleado,
    deleteEmpleado
};
