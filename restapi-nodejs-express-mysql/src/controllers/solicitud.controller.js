import { getConnection } from "../database/database";

const getSolicituds = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(` SELECT s.id, s.codigo, s.descripcion, s.resumen, e.nombre AS nombre_empleado FROM solicitud s  JOIN empleado e ON s.id_empleado = e.id `);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const getSolicitud = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, codigo, descripcion, resumen, id_empleado FROM solicitud WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addSolicitud = async (req, res) => {
    try {
        const { codigo, descripcion, resumen, id_empleado} = req.body;

        if (codigo === undefined || descripcion === undefined || resumen === undefined  || id_empleado === undefined) {
            res.status(400).json({ message:  "Solicitud incorrecta. Complete todos los campos."});
        }

        const empleado = { codigo, descripcion, resumen, id_empleado };
        const connection = await getConnection();
        await connection.query("INSERT INTO solicitud SET ?", empleado);
        res.json({ message: "Solicitud added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateSolicitud = async (req, res) => {
    try {
        const { id } = req.params;
        const { codigo, descripcion, resumen, id_empleado } = req.body;

        if (id === undefined || codigo === undefined || descripcion === undefined || resumen === undefined  || id_empleado === undefined) {
            res.status(400).json({ message:  "Solicitud incorrecta. Complete todos los campos." });
        }

        const empleado = {  codigo, descripcion, resumen, id_empleado };
        const connection = await getConnection();
        const result = await connection.query("UPDATE solicitud SET ? WHERE id = ?", [solicitud, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteSolicitud = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM solicitud WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getSolicituds,
    getSolicitud,
    addSolicitud,
    updateSolicitud,
    deleteSolicitud
};
